const express = require("express");
const usersRoutes = require("./Routes/usersRoutes");
const postsRoutes = require("./Routes/postRouter");
const isAuthenticated = require("./middleware/isauthencated");
const app = express();
const PORT = 8082;

//Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to main app",
  });
});

//User Route
app.use("/users", isAuthenticated, usersRoutes);
app.use("/posts", postsRoutes);

//start the server
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
