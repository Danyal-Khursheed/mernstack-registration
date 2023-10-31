const express = require("express");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt"); // Import bcrypt
require("dotenv").config();
const User = require("./model/schema");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const { connect } = require("./database/db"); // Correct import

// Database connection
connect();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Registration route
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      res.status(400).send("Please fill all the fields");
    } else {
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        res
          .status(409)
          .json(
            "Email already exists. Please try a different email or go to the login page"
          );
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({
          username,
          password: hashedPassword,
          email,
        });
        res
          .status(201)
          .json({ message: "User registered successfully", newUser });
      }
    }
  } catch (err) {
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ message: "Login sucessfull ", user, token });
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while logging in: " + err });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Hello from the main page");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
