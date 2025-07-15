const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3001;

//!Middleware

app.use(express.json());
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
  res.json({ message: "Welcome to API" });
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
    res.json({
      message: "LOGIN SUCCESS!!",
    });
  } else {
    res.json({ message: "Login Failed!!" });
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
    res.json({ message: `Welcome ${username}, role:${userData.role}` });
  } else {
    //!redirect to login
    res.json({ message: "Unauthorized please login First!" });
  }
});

//Logout route
app.get("/logout", (req, res) => {
  //!logout
  res.clearCookie("userData");
  //redirect
  res.json({ message: "LoggedOut successfuly" });
});

//start the server
app.listen(PORT, () => {
  console.log(`server is running at${PORT}`);
});
