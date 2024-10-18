const express = require("express");
const Internship = require("../models/Internship");
const router = express.Router();

// POST route to create internships
router.post("/internships", async (req, res) => {
  const internships = req.body;

  try {
    const savedInternships = await Internship.insertMany(internships);
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
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/internships/:title", async (req, res) => {
  const { title } = req.params;
  console.log("Title received in API call:", title);
  try {
    const internship = await Internship.findOne({
      title,
    });
    if (internship) {
      res.status(200).json(internship);
    } else {
      res.status(404).json({ error: "Internship not found" });
    }
  } catch (error) {
    console.error("Error fetching internship:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
