const express = require("express");
const router = express.Router();

const controller = require("../controllers/recordController");
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

console.log("controller:", controller);
console.log("auth:", auth);
console.log("role:", role);

router.post("/", auth.protect, role.authorize("ADMIN"), controller.createRecord);
router.get("/", auth.protect, role.authorize("ADMIN", "ANALYST", "VIEWER"), controller.getRecords);
router.put("/:id", auth.protect, role.authorize("ADMIN"), controller.updateRecord);
router.delete("/:id", auth.protect, role.authorize("ADMIN"), controller.deleteRecord);

module.exports = router;