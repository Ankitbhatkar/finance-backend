const User = require("../models/User");

//  Get all users (Admin only)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update user role or status
exports.updateUser = async (req, res) => {
  try {
    const { role, isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update role
    if (role) user.role = role;

    // Update status
    if (isActive !== undefined) user.isActive = isActive;

    await user.save();

    res.json({
      message: "User updated successfully",
      user
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};