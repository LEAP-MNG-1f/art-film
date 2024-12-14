const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google-auth", googleAuth);

module.exports = router;
