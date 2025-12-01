require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/logout", require("./routes/logoutRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes")); // MUST be protected

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
