const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. No token found." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded; // contains id, username, role
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};
