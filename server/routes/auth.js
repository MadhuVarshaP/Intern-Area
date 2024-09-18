const express = require("express");
const jwt = require("jsonwebtoken"); // JWT for token verification
const { expressjwt: jwtMiddleware } = require("express-jwt"); // Updated import from express-jwt
const jwksRsa = require("jwks-rsa");
const router = express.Router();
const User = require("../models/User");

// Middleware to validate JWT tokens for Auth0 users
const checkJwt = jwtMiddleware({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-64exgjn1nyp27dh0.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "con_D4QrTAA3pOXYdoVr",
  issuer: `https://dev-64exgjn1nyp27dh0.us.auth0.com/`,
  algorithms: ["RS256"],
});

// Route for Auth0 registration or login
router.post("/auth0-register", checkJwt, async (req, res) => {
  const { name, email } = req.user; // Auth0 provides this in the JWT
  const auth0Id = req.user.sub; // Get the Auth0 user ID from the token

  try {
    let user = await User.findOne({ auth0Id });
    if (!user) {
      user = new User({
        name,
        email,
        auth0Id,
        password: null, // Since they registered with Auth0
      });
      await user.save();
      console.log("User saved:", user); // Log the saved user object
    } else {
      console.log("User already exists:", user);
    }
    res
      .status(201)
      .json({ message: "Auth0 User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
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
