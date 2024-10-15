const express = require("express");
const jwt = require("jsonwebtoken"); // JWT for token verification
const { expressjwt: jwtMiddleware } = require("express-jwt"); // Updated import from express-jwt
const jwksRsa = require("jwks-rsa");
const router = express.Router();
const User = require("../models/User");

// // Middleware to validate JWT tokens for Auth0 users
const checkJwt = jwtMiddleware({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-qd1ntdamndjem8yr.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "",
  issuer: `https://dev-qd1ntdamndjem8yr.us.auth0.com/`,
  algorithms: ["RS256"],
});

// Route for Auth0 registration or login
router.post("/auth0-register", async (req, res) => {
  console.log("JWT Payload:", req.user);
  const { name, email, auth0Id } = req.body; // Auth0 provides this in the JWT

  try {
    // let user = await User.findOne({ auth0Id });
    // if (!user) {
    //   user = new User({
    //     name,
    //     email,
    //     auth0Id,
    //     password: null,
    //   });
    //   await user.save();
    //   console.log("User saved:", user);
    // } else {
    //   console.log("User already exists:", user);
    // }
    let user = await User.findOne({ email });

    if (user) {
      // Update user details if they already exist
      user.name = name;
      user.picture = picture;
      user.auth0Id = sub; // Store Auth0's user ID (sub)
      await user.save();
    } else {
      // If user doesn't exist, create a new one
      user = new User({
        name,
        email,
        picture,
        auth0Id: sub, // Auth0 ID
      });
      await user.save();
    }

    res.status(200).json({ message: "User login/update successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Traditional email/password registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user with the provided credentials
    user = new User({
      name,
      email,
      password, // The pre-save hook will hash the password
    });

    await user.save();
    console.log("User saved:", user);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
