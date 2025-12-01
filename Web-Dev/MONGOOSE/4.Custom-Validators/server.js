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
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9]+$/.test(value);
        },
        message: "Username can only contiain alphanumeric characters",
      },
    },
    email: {
      type: String,
      required: [true, " Email is requird"],
      validate: {
        validator: function (value) {
          return value.endsWith("@gmail.com");
        },
        message: "Username can only contiain alphanumeric characters",
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
      email: "shrenik9477@gmail.com",
      username: "nik28",
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
