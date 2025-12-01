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

// !Design--Schema

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    author: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    price: {
      type: String,
      required: true,
      set: (value) => Math.round(value * 100) / 100,
    },
    tags: {
      type: [String],
      required: true,
      set: (value) => value.map((tag) => tag.toLowerCase()),
    },
    url: {
      type: [String],
      required: true,
      set: (value) => `https://nik.com/books/${value}`,
    },
  },
  { timestamps: true }
);

//!Compile the schema to from mod0el

const Book = mongoose.model("Book", bookSchema);

const createDoc = async () => {
  try {
    const bookCreated = await Book.create({
      title: "mongoose for everyone",
      author: "NIK",
      price: 10.90999,
      tags: ["MONGODB", "NODE", "MONGOOSE", "EXPRESS"],
      url: "mongoose-for-everyone",
    });
    console.log(bookCreated);
  } catch (error) {
    console.log(error);
  }
};
createDoc();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
