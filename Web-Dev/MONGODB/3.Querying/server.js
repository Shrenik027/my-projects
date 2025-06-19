const { log } = require("console");
const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// Connect to MOnogDB

// 1.Create Client
const client = new MongoClient(
  "mongodb+srv://shrenik9477:153759@nik-cluster.evzlrrh.mongodb.net/employee-database",
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
    const database = client.db("nik28");
    //Collections
    const employees = database.collection("employees");
    const books = database.collection("books");

    //Create

    // const employeesDocs = [
    //   { name: "SHrenik", age: 21, depertment: "HR" },
    //   { name: "TWinkle", age: 20, depertment: "Finance" },
    //   { name: "TEjas", age: 24, depertment: "IT" },
    //   { name: "TJ-Wife", age: 23, depertment: "Operations" },
    //   { name: "GAnesh", age: 22, depertment: "IT" },
    // ];

    const booksDocs = [
      {
        title: "to Kill a MockingBird",
        author: "Harper Lee",
        year: 9060,
        genre: "Drama",
      },
      {
        title: "the 1984",
        author: "George Orwel",
        year: 1949,
        genre: "Dystopian",
      },
      {
        title: "the catcher in the Rye",
        author: "JD",
        year: 1951,
        genre: "Drama",
      },
      {
        title: "the Brave World",
        author: "Huxley",
        year: 1932,
        genre: "Action",
      },
      {
        title: "The Hobbit",
        author: "J.R.R",
        year: 1937,
        genre: "Fantasy",
      },
    ];
    // const result = await employees.insertMany(employeesDocs);
    // const result = await books.insertMany(booksDocs);
    // console.log(result);

    // !Querying Operators

    // !------$gt-----

    // const employeesCursor = employees.find({ age: { $gt: 22 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$gte-----

    // const employeesCursor = employees.find({ age: { $gte: 22 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$ne-----

    // const employeesCursor = employees.find({ age: { $ne: 40 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$lt-----

    // const employeesCursor = employees.find({ age: { $lt: 22 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$lte-----

    // const employeesCursor = employees.find({ age: { $lte: 25 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$nin-----

    // const employeesCursor = employees.find({ age: { $nin: [25, 45, 30] } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$in-----

    // const employeesCursor = employees.find({ age: { $nin: [20, 21] } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    // !------$multiple conditions-----

    // const employeesCursor = employees.find({ age: { $gt: 19, $lte: 21 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);
    // !------$Logical Operators-----

    // !--$or

    // const booksCursor = books.find({
    //   $or: [{ genre: "Drama" }, { year: { $lt: 1950 } }],
    // });
    // const result = await booksCursor.toArray();
    // console.log(result);

    //!------$and-----

    // const booksCursor = books.find({
    //   $and: [{ genre: "Dystopian" }, { year: { $gt: 1930 } }],
    // });
    // const result = await booksCursor.toArray();
    // console.log(result);

    // !---$nor----

    const booksCursor = books.find({
      $nor: [{ genre: "Drama" }, { year: { year: 1930 } }],
    });
    const result = await booksCursor.toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Call the fun
connectDB();

// Start the server

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
