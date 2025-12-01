const express = require("express");

//Create instance of express router
const userRouter = express.Router();

//Using the route()

//!getting all users
userRouter.route("/").get((req, res) => {
  res.json({
    message: "users fetched succsfully",
  });
});

//!Handel a specific user ID

userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      status: "success",
      message: "user fetched successfully",
    });
  })
  .put((req, res) => {
    res.json({
      message: "user updated sucessfully",
    });
  })
  .delete((req, res) => {
    res.json({
      message: "user deleted sucessfully",
    });
  });

module.exports = userRouter;
