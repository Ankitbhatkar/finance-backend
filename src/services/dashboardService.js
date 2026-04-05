const Record = require("../models/Record");

exports.getDashboardData = async (matchFilter) => {
  const totals = await Record.aggregate([
    { $match: matchFilter },
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  return totals;
};