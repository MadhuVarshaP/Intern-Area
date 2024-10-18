const express = require("express");
const connectDB = require("./config/db.js");
const internshipRoutes = require("./routes/internships.js");
const jobRoutes = require("./routes/jobs.js");

require("dotenv").config();

const app = express();
const cors = require("cors");

// Connect to database
connectDB();

// Middleware
// app.use(cors());\
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // If you're using credentials (tokens, cookies)
  })
);
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/api", internshipRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
