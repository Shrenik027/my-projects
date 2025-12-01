const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");

// GET /api/v1/admin
router.get("/", auth, role("admin"), (req, res) => {
  res.json({ message: "Welcome Admin. You have full access." });
});

module.exports = router;
