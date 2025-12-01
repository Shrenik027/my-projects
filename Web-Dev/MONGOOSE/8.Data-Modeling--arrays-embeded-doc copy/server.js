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

// !Design Student Schema

const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);

// !Design Classroom Schema

const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [studentSchema],
  },
  {
    timestamps: true,
  }
);

// !Compile the classroom schema

const Classroom = mongoose.model("Classroom", classroomSchema);

const createClassroom = async () => {
  try {
    //create Class
    const newClass = await Classroom.create({
      className: "Math 101",
      students: [
        {
          name: "Shrenik",
          age: 21,
          grade: "A",
        },
        {
          name: "Twinkle",
          age: 21,
          grade: "A",
        },
        {
          name: "GIRL",
          age: 6,
          grade: "A",
        },
      ],
    });
    console.log(newClass);
  } catch (error) {
    console.log(error);
  }
};

createClassroom();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
