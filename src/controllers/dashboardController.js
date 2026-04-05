const Record = require("../models/Record");

// Dashboard Summary
exports.getSummary = async (req, res) => {
  try {
    let matchFilter = {};

    // 👇 Role-based filtering
    if (req.user.role !== "ADMIN") {
      matchFilter.createdBy = req.user.id;
    }

    // 1. Total Income & Expense
    const totals = await Record.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" }
        }
      }
    ]);

    let totalIncome = 0;
    let totalExpense = 0;

    totals.forEach(item => {
      if (item._id === "INCOME") totalIncome = item.total;
      if (item._id === "EXPENSE") totalExpense = item.total;
    });

    const netBalance = totalIncome - totalExpense;

    // 2. Category-wise breakdown
    const categoryData = await Record.aggregate([
      { $match: matchFilter },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    // 3. Recent transactions
    const recentTransactions = await Record.find(matchFilter)
      .sort({ date: -1 })
      .limit(5);

    res.json({
      totalIncome,
      totalExpense,
      netBalance,
      categoryBreakdown: categoryData,
      recentTransactions
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};