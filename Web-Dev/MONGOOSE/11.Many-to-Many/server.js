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

// !Design Courses Schema

const coursesSchema = new mongoose.Schema(
  {
    name: String,
    enrolledStudents: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    ],
  },
  {
    timestamps: true,
  }
);
// !Compile the Courses schema to form model

const Course = mongoose.model("Courses", coursesSchema);

// !Design Student Schema

const studentSchema = new mongoose.Schema(
  {
    name: String,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true,
  }
);

// !Compile the student Schema

const Student = mongoose.model("Student", studentSchema);

//!Create Course

const createCourse = async () => {
  try {
    //create the Course
    const newDoc = await Course.create([
      {
        name: "MERN STACK",
      },
      {
        name: "DSA",
      },
    ]);
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};

// createCourse();

//!Create Student

const createStudent = async () => {
  try {
    //create the Student
    const students = await Student.create([
      {
        name: "Shrenik",
      },
      {
        name: "Twinkle",
      },
    ]);
    console.log(students);
  } catch (error) {
    console.log(error);
  }
};

// createStudent();

//! Students apply to courses

const applyToCourse = async () => {
  try {
    // 1.Find the student
    const foundStudent = await Student.findById("6853d1a16873e83d2bf51992");
    // 2.Find the course
    const foundCourse = await Course.findById("6853d146e9633e85be64523f");
    // 3.apply to course (1.update the student enrolledCourses  2.update the enrolledStudents on courses)
    // 4. push the course found into the students enrolledCourses field

    foundStudent.enrolledCourses.push(foundCourse._id);
    // 4. push the student found into the courses enrolledStudents field

    foundCourse.enrolledStudents.push(foundStudent._id);

    // 5.Resave the doc
    await foundStudent.save();
    await foundCourse.save();
    console.log(foundStudent);
    console.log(foundCourse);
  } catch (error) {
    console.log(error);
  }
};

applyToCourse();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
