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

// !Design Author Schema

const authorSchema = new mongoose.Schema(
  {
    name: String,
    birthYear: Number,
  },
  {
    timestamps: true,
  }
);
// !Compile the author schema to form model

const Author = mongoose.model("Author", authorSchema);

// !Design Books Schema

const booksSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  {
    timestamps: true,
  }
);

// !Compile the Book Schema

const Book = mongoose.model("Book", booksSchema);

//Create Author
const createAuthor = async () => {
  try {
    //create the author
    const newDoc = await Author.create({
      name: "Twinkle",
      birthYear: 2005,
    });
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};

createAuthor();

//Create Book
const creatBook = async () => {
  try {
    //create the book
    const authorId = await Author.findById("");

    const newDoc = await Book.create({
      title: "myBook",
      author: authorId,
    });
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};
creatBook();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
