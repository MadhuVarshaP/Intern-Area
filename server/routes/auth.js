const express = require("express");
const jwt = require("express-jwt"); // Middleware to validate JWT
const jwksRsa = require("jwks-rsa"); // Retrieves RSA public key from Auth0
const router = express.Router();

// Middleware to validate JWT tokens
// const checkJwt = jwt({
//   // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://dev-qd1ntdamndjem8yr.us.auth0.com/.well-known/jwks.json`,
//   }),
//   // Validate the audience and the issuer
//   audience: "con_ptsGQogADNA0s6FX",
//   issuer: `https://dev-qd1ntdamndjem8yr.us.auth0.com/`,
//   algorithms: ["RS256"],
// });

// // Protect your routes using the checkJwt middleware
// router.get("/getstarted", checkJwt, (req, res) => {
//   res.json({ message: "You are authenticated", user: req.user });
// });

router.post("/register", checkJwt, async (req, res) => {
  const { name, email } = req.user; // Auth0 provides this in the JWT
  const auth0Id = req.user.sub; // Get the Auth0 user ID from the token

  try {
    // Register the user in your database
    const user = new User({
      name,
      email,
      auth0Id,
      // You can add more fields here if needed
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
