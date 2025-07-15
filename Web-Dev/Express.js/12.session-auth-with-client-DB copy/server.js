const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");

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

//!====isAUthenticated Middleware
const isAuthenticated = (req, res, next) => {
  //check  user in session

  const username = req.session.userData ? req.session.userData.username : null;
  if (username) {
    return next();
  } else {
    res.redirect("/login");
  }
};
//!====isAdmin Middleware===(Authorization)
const isAdmin = (req, res, next) => {
  //check  user in session

  const admin = req?.session?.userData?.role === "admin";
  if (admin) {
    return next();
  } else {
    res.send("Forbidden, admin-only");
  }
};

//!====Configure Express Session
app.use(
  session({
    secret: "gsls039434",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/",
    }),
  })
);

//Home route
app.get("/", (req, res) => {
  console.log(req.session);
  res.render("home");
});

//Login route
app.get("/login", (req, res) => {
  res.render("login");
});

//Admin route
app.get("/admin-only", (req, res) => {
  //!we have access to the login as req.userData
  res.render("admin");
});

//Registerroute
app.get("/register", (req, res) => {
  res.render("register");
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

//Login route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //! find the user in the DB
  const userFound = await User.findOne({
    username,
  });

  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //! create session (Save the user into the session)
    req.session.userData = {
      username: userFound.username,
      role: userFound.role,
    };

    //! Add the login user to session

    res.redirect("/dashbord");
  } else {
    res.send("INVALID LOGIN CREDENTIALS");
  }
});

//Dashboard route
app.get("/dashbord", isAuthenticated, isAdmin, (req, res) => {
  console.log(req.session);
  //Take the login user from session
  const username = req.session.userData ? req.session.userData.username : null;

  res.render("dashbord", { username });
});

//Logout route
app.get("/logout", (req, res) => {
  //!logout
  req.session.destroy();
  //redirect
  res.redirect("/login");
});

//start the server
app.listen(PORT, () => {
  console.log(`server is running at${PORT}`);
});
