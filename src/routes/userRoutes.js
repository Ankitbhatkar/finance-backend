const express = require("express");
const router = express.Router();

const { getUsers, updateUser } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

// Admin only routes
router.get("/", protect, authorize("ADMIN"), getUsers);
router.patch("/:id", protect, authorize("ADMIN"), updateUser);

module.exports = router;