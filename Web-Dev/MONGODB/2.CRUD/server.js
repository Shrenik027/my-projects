const { log } = require("console");
const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

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
    //1.Database name (school)
    const database = client.db("nik");
    //2.Collections (books)
    // !-----CREATE OPERATION-------
    const students = database.collection("students");
    //! 3.DOCUMENT() using insertone
    // const result = await students.insertOne({
    //   name: "Shrenik",
    //   age: 20,
    //   sub: ["Math", "Physics"],
    // });
    //! Using insertmany
    // const result = await students.insertMany([
    //   {
    //     name: "Tejas",
    //     age: 24,
    //     sub: ["physics", "chemistry", "bio", "math"],
    //   },
    //   { name: "Ganesh", age: 23, sub: ["physics", "chemistry", "bio"] },
    // ]);
    // console.log(result);

    // !-------READ OPERATION-------
    // !--FIND()--

    // const resultCursor = students.find();
    // const result = await resultCursor.toArray();
    // console.log(result);

    // !--FINDONE()--

    // const result = await students.findOne({
    //   age: 20,
    // });
    // console.log(result);

    // !--------UPDATE OPERATION-----
    //!--updateOne()--

    // const result = await students.updateOne(
    //   {
    //     name: "Shrenik", //Filter
    //   },
    //   {
    //     $set: { age: 22 },
    //   }
    // );

    // console.log(result);

    //!--updateMany()--
    //     const result = await students.updateMany(
    //       {
    //         age: 21,
    //       },
    //       {
    //         $set: { age: 22 },
    //       }
    //     );
    //     console.log(result);

    //!--findOneandUpdate()--

    // const result = await students.findOneAndUpdate(
    //   {
    //     name: "Twinkle",
    //   },
    //   {
    //     $set: { age: 21 },
    //   }
    // );
    // console.log(result);

    // !------DELETE OPERATION-----

    //!--deleteone()--
    // const result = await students.deleteOne({
    //   sub: ["Math", "Physics"],
    // });
    // console.log(result);

    //!--deleteMany()--
    // const result = await students.deleteMany({ age: 25 });
    // console.log(result);

    //!--findOneanddelete()--

    // const result = await students.findOneAndDelete({ name: "Shrenik" });
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Call the fun
connectDB();

// Start the server

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
