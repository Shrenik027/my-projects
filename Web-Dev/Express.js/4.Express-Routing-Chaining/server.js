const express = require("express");
const userRouter = require("./Routes/usersRoutes");
const postRouter = require("./Routes/postRouter");
const app = express();
const PORT = 8082;

//Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Main app",
  });
});

//User Route
app.use("/users", userRouter);

//post Route
app.use("/posts", postRouter);

//start the server
app.listen(PORT, console.log(`server is running at ${PORT}`));
