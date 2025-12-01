const express = require("express");

const postRouter = express.Router();

//!getting all posts
postRouter.get("/", (req, res) => {
  res.json({
    message: "posts fetched succsfully",
  });
});

//!getting single post

postRouter.get("/:id", (req, res) => {
  res.json({
    status: "success",
    message: "post fetched successfully",
  });
});

//!Updating a post

postRouter.put("/:id", (req, res) => {
  res.json({
    message: "post updated sucessfully",
  });
});

//!Deleting a user

postRouter.delete("/:id", (req, res) => {
  res.json({
    message: "post deleted sucessfully",
  });
});

module.exports = postRouter;
