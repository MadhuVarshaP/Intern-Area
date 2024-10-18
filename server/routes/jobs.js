const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// POST route to create jobs
router.post("/jobs", async (req, res) => {
  const jobs = req.body;

  try {
    const savedJobs = await Job.insertMany(jobs);
    res.status(201).json({
      message: "Jobs created successfully",
      jobs: savedJobs,
    });
  } catch (error) {
    console.error("Error creating jobs:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET route to fetch jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/jobs/:title", async (req, res) => {
  const { title } = req.params;
  console.log("Title received in API call:", title);
  try {
    const job = await Job.findOne({
      title,
    });
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
