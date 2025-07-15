const express = require("express");
const app = express();
const mongoose = require("mongoose");
const validator = require("validator");
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
    age: {
      type: String,
      required: [true, " username is requird"],
      validate: {
        validator: (value) => {
          return validator.isInt(value, { min: 0, max: 120 });
        },
        message: "Invalid Age",
      },
    },
    email: {
      type: String,
      required: [true, " Email is requird"],
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: "Invalid Email",
      },
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
      age: "21",
      email: "shrenik9477@gmail.com",
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
