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

// !====CRUD OPERATIONS========

//?====CREATE DOC===
//!.save()
// const newUser = new User({
//   username: "NIK",
//   age: 21,
//   DOB: new Date("2005-05-26"),
//   isActive: true,
//   hobbies: ["Cricket", "reading", "Coading"],
//   address: {
//     street: "ajivali",
//     city: "Panvel",
//     postCode: 410221,
//   },
//   customData: {
//     country: "India",
//   },
// });

//save the doc
// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//!.crete()
// User.create({
//   username: "TWI",
//   age: 21,
//   DOB: new Date("2005-07-11"),
//   isActive: true,
//   hobbies: ["reading", "Coading"],
//   address: {
//     street: "ajivali",
//     city: "Panvel",
//     postCode: 410221,
//   },
//   customData: {
//     country: "India",
//   },
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//!.insertMany()

// User.insertMany([
//   {
//     username: "TEJ",
//     age: 24,
//     DOB: new Date("2002-11-17"),
//     isActive: true,
//     hobbies: ["reading", "Coading"],
//     address: {
//       street: "ajivali",
//       city: "Panvel",
//       postCode: 410221,
//     },
//     customData: {
//       country: "India",
//     },
//   },
//   {
//     username: "TEJ-WIF",
//     age: 23,
//     DOB: new Date("2005-07-11"),
//     isActive: true,
//     hobbies: ["reading", "Coading"],
//     address: {
//       street: "ajivali",
//       city: "Panvel",
//       postCode: 410221,
//     },
//     customData: {
//       country: "India",
//     },
//   },
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//?====READ DOC=====
// !.find()
// User.find()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));
// !.findOne()
// User.findOne({
//   age: 21,
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));
// !.findById)
// User.findById("684fb46be19a1963ae2dc1a5")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

// !-----.where()----
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(23);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// !-----.sort()----
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(20).sort({ username: -1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// !-----.limit()----
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .gte(20)
//       .sort({ username: -1 })
//       .limit(1);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();

//?====UPDATE DOC===

// !.updateOne()
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.updateOne(
//       {
//         username: "NIK",
//       },
//       {
//         username: "SHRE-NIK",
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
// !.findByIdAndUpdate()
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findByIdAndUpdate(
//       "684fb46be19a1963ae2dc1a5",

//       {
//         username: "TWI-NKLE",
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
// !.findOneAndUpdate()
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       {
//         _id: "684fb541170743f9106a56ee",
//       },

//       {
//         username: "TEJ-AS",
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//!=========UPDATE OPERATORS =======
//uisng set and unset
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       {
//         _id: "684fb541170743f9106a56ee",
//       },

//       {
//         $set: { username: "TEJAS" },
//         $unset: { age: 1 },
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//uisng push and addTOSet
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       {
//         _id: "684fb541170743f9106a56ee",
//       },

//       {
//         // $addToSet: { hobbies: "Fucking" },
//         $push: { hobbies: "Fucking" },
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//uisng $inc and $mul
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       {
//         username: "SHRE-NIK",
//       },

//       {
//         // $inc: { age: 1 },
//         $mul: { age: 10 },
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//Usong pop and pull
// const updateDoc = async () => {
//   try {
//     const updatedDoc = await User.findOneAndUpdate(
//       {
//         username: "SHRE-NIK",
//       },

//       {
//         // $pop: { hobbies: 1 },
//         $pull: { hobbies: "Coading" },
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();
//?====DELETE DOC===
const deleteDoc = async () => {
  try {
    //!findByIdAndDelete
    // const deleted = await User.findByIdAndDelete("684fb381372453f51e77e58f");
    // console.log(deleted);
    //!findOneAndDelete
    // const deleted = await User.findOneAndDelete({ username: "TWI-NKLE" });
    // console.log(deleted);
    //!DeleteMany
    // const deleted = await User.deleteMany({ age: { $gte: 23 } });
    // console.log(deleted);
  } catch (error) {
    console.log(error);
  }
};
deleteDoc();

//Start The SERVER

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
