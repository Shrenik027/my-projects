const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 3000;

//!Connect DB
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("DB connected Sucessfully!!");
  })
  .catch((e) => {
    console.log(e);
  });
//Create the user Schema

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

//Compile the user Schema to form a model
const User = mongoose.model("User", userSchema);

//!Middleware
app.use(express.urlencoded({ extended: true }));

//!Ser the view engine

app.set("view engine", "ejs");
app.use(cookieParser());

//====CUSTOM MIDDLEWARES===

// !====isAUthenticated Middleware

const isAuthenticated = (req, res, next) => {
  // check the user in the cookies
  const userDataCookie = req.cookies.userData;
  try {
    const userData = userDataCookie && JSON.parse(userDataCookie);
    if (userData && userData.username) {
      //add the login user into req obj
      req.userData = userData;
      return next();
    } else {
      res.send("You Are Not Logged In");
    }
  } catch (error) {
    console.log(error);
  }
};

//!====isAdmin Middleware===(Authorization)

const isAdmin = (req, res, next) => {
  if (req.userData && req.userData.role === "admin") {
    return next();
  } else {
    res.send("You dont have access... Admin Only!");
  }
};

//Home route
app.get("/", (req, res) => {
  res.render("home");
});

//Admin route
app.get("/admin-only", isAuthenticated, isAdmin, (req, res) => {
  //!we have access to the login as req.userData
  res.render("admin");
});

//Login route
app.get("/login", (req, res) => {
  res.render("login");
});

//Register logic route
app.post("/register", async (req, res) => {
  //!Destructure the req.body
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    username,
    password: hashedPassword,
  });
  //Redirect to login
  res.redirect("/login");
});
//Registerroute
app.get("/register", (req, res) => {
  res.render("register");
});

//Login route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //! find the user in the DB
  const userFound = await User.findOne({
    username,
  });

  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //! create the cookie data
    //* Prepare the login user data
    //?setting the cookie with the userdata

    res.cookie(
      "userData",
      JSON.stringify({
        username: userFound.username,
        role: userFound.role,
      }),
      {
        maxAge: 3 * 24 * 60 * 1000, //#days expiration
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      }
    );
    res.redirect("/dashbord");
  } else {
    res.send("INVALID LOGIN CREDENTIALS");
  }
});

//Dashboard route
app.get("/dashbord", (req, res) => {
  // !Grab the user from the cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  const username = userData ? userData.username : null;

  //!Render the template
  if (username) {
    res.render("dashbord", { username });
  } else {
    //!redirect to login
    res.redirect("/login");
  }
});

//Logout route
app.get("/logout", (req, res) => {
  //!logout
  res.clearCookie("userData");
  //redirect
  res.redirect("/login");
});

//start the server
app.listen(PORT, () => {
  console.log(`server is running at${PORT}`);
});
