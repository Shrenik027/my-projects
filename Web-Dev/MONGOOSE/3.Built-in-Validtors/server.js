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

const userprofileProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, " username is requird"],
      unique: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: [true, " Email is requird"],
      match: /@/,
    },
    age: {
      type: Number,
      required: [true, " Age is requird"],
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      enum: ["male", "female", "Other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

//!Compile the schema to from mod0el

const User = mongoose.model("User", userprofileProfileSchema);

const createDoc = async () => {
  try {
    const usercreated = await User.create({
      gender: "male",
      email: "shrenik2605@gmail.com",
      age: 21,
      username: "Shrenik",
    });
    console.log(usercreated);
  } catch (error) {
    console.log(error);
  }
};
createDoc();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
