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

// !Design Address Schema

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  {
    timestamps: true,
  }
);

// !Design USer Schema

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    state: String,
    address: addressSchema, //Embeded doc
  },
  {
    timestamps: true,
  }
);

// !Compile the user schema

const User = mongoose.model("User", userSchema);

const createUser = async () => {
  try {
    //create user
    const newUser = await User.create({
      name: "baal",
      email: "shrenik26@gmail.com",
      address: {
        street: "dubalwadi 34",
        city: "Karad",
        state: "Maharashtra",
        zip: 415103,
      },
    });
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

createUser();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
