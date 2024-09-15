const express = require("express");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.js");
require("dotenv").config();

const app = express();
const cors = require("cors");

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/applications", require("./routes/applications"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
