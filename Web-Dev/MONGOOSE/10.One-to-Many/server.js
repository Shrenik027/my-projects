const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5000 || process.env.PORT;

//Connect to MongoDB
const URL = "URL";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MONGODB Connected Successfully!!");
  } catch (error) {
    console.log(`Error Connecting MONGODB : ${error}`);
  }
};
//! call the fnction
connectDB();

// !Design Comments Schema

const commentSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);
// !Compile the Comment schema to form model

const Comment = mongoose.model("Comment", commentSchema);

// !Design Blogpost Schema

const blogPostSchema = new mongoose.Schema(
  {
    title: String,
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

// !Compile the Book Schema

const Post = mongoose.model("Post", blogPostSchema);

//!Create Post

// const createPost = async () => {
//   try {
//     //create the author
//     const newDoc = await Post.create({
//       title: "Awesome FullStack Course",
//     });
//     console.log(newDoc);
//     return newDoc._id;
//   } catch (error) {
//     console.log(error);
//   }
// };

// createPost();

//!Create Comment

const createComment = async () => {
  try {
    // ! 1.Find the post you want to comment
    const postFound = await Post.findById("6853cad9a337b6b77176c17e");

    // ! 2.Create the comment
    const newComment = await Comment.create({
      text: "Awesome Post 2 ",
    });
    console.log(newComment);

    // ! 3.Push the comment of found post

    postFound.comment.push(newComment._id);

    //! 4.Resave the post
    await postFound.save();
  } catch (error) {
    console.log(error);
  }
};

createComment();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
