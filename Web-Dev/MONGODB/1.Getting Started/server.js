const { log } = require("console");
const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;
// Username: shrenik9477
// Pass: Shrenik@1234
// Mongodb url: mongodb+srv://shrenik9477:153759@nik-cluster.evzlrrh.mongodb.net/students-database

// Connect to MOnogDB

// 1.Create Client

const client = new MongoClient(
  "mongodb+srv://shrenik9477:153759@nik-cluster.evzlrrh.mongodb.net/students-database",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// Function to connect
const connectDB = async () => {
  try {
    await client.connect;
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};

// Call the fun
connectDB();

// Start the server

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
