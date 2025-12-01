module.exports = (requiredRole) => {
  return (req, res, next) => {
    if (req.userData.role !== requiredRole) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
};
