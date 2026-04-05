const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/dashboardController");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

// All logged-in users can view dashboard
router.get("/summary", protect, authorize("ADMIN", "ANALYST", "VIEWER"), getSummary);

module.exports = router;