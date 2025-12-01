const express = require("express");

//Create instance of express router
const userRouter = express.Router();

//!getting all users
userRouter.get("/", (req, res) => {
  res.json({
    message: "users fetched succsfully",
  });
});

//!getting single user

userRouter.get("/:id", (req, res) => {
  res.json({
    status: "success",
    message: "user fetched successfully",
  });
});

//!Updating a user

userRouter.put("/:id", (req, res) => {
  res.json({
    message: "user updated sucessfully",
  });
});

//!Deleting a user

userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "user deleted sucessfully",
  });
});

module.exports = userRouter;
