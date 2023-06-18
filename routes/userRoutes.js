const express = require("express");
const {
  signup,
  login,
  logout,
  protect,
} = require("./../controllers/authController");
const { getCurrentUser } = require("./../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", protect, logout);
router.get("/current", protect, getCurrentUser);

module.exports = router;
