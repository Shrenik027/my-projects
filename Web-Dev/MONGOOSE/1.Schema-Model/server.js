const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000 || process.env.PORT;

//Connect to MongoDB
const URL =
  "mongodb+srv://shrenik9477:153759@nik-cluster.evzlrrh.mongodb.net/students-database";

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

const userprofileProfileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  DOB: Date,
  isActive: Boolean,
  hobbies: [String],
  objectId: mongoose.Schema.Types.ObjectId,
  address: {
    street: String,
    city: String,
    postCode: Number,
  }, //Embebed

  customData: mongoose.Schema.Types.Mixed,
});

//!Compile the schema to from mod0el

const User = mongoose.model("User", userprofileProfileSchema);

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
