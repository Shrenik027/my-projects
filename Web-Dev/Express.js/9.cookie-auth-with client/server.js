const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3001;

//!Middleware
app.use(express.urlencoded({ extended: true }));

//!Set the view engine

app.set("view engine", "ejs");
app.use(cookieParser());

//Simulated DB of users

const users = [
  {
    username: "Shrenik",
    password: "123",
    role: "admin",
  },
  {
    username: "Twinkle",
    password: "456",
    role: "user",
  },
];

//Home route
app.get("/", (req, res) => {
  res.render("home");
});

//Login route
app.get("/login", (req, res) => {
  res.render("login");
});

//Login route logic
app.post("/login", (req, res) => {
  //! find the user login details
  const userFound = users.find((user) => {
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });
  console.log(userFound);

  //! create the cookie data
  //* Prepare the login user data
  //?setting the cookie with the userdata

  res.cookie("userData", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 1000, //#days expiration
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });
  //! REnder the user dashboard
  if (userFound) {
    res.redirect("/dashbord");
  }
  //!redirect the user to login page
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
