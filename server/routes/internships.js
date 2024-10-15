const express = require("express");
const Internship = require("../models/Internship"); // Import your Internship model
const router = express.Router();

// POST route to create internships
router.post("/internships", async (req, res) => {
  const internships = req.body; // Expecting an array of internships

  try {
    const savedInternships = await Internship.insertMany(internships); // Insert many documents
    res.status(201).json({
      message: "Internships created successfully",
      internships: savedInternships,
    });
  } catch (error) {
    console.error("Error creating internships:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET route to fetch internships
router.get("/internships", async (req, res) => {
  try {
    const internships = await Internship.find(); // Fetch all internships
    res.status(200).json(internships);
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
