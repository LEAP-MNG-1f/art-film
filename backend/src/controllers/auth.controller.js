const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      authType: "password",
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.authType !== "password") {
      return res
        .status(404)
        .json({ message: "User not found or invalid login." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({ token, message: "Login successful." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const googleAuth = async (req, res) => {
  const { email, profile, googleId } = req.body;

  try {
    let user = await User.findOne({ email, authType: "google" });
    if (!user) {
      user = new User({
        username: profile?.name,
        email,
        authType: "google",
        googleId,
        profile: {
          name: profile?.name,
          image: profile?.image,
        },
      });
      await user.save();
    }
    res.status(200).json({ message: "User authenticated", user });
  } catch (error) {
    res.status(500).json({ error: "Authentication error", details: error });
  }
};
