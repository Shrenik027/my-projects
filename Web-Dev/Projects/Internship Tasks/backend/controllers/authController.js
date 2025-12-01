const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "All fields required" });

    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ error: "User exists" });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({ username, password: hashed, role: "user" });

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username });
    if (!userFound)
      return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, userFound.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: userFound._id, username, role: userFound.role },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
