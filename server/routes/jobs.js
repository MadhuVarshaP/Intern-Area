const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Create Job
router.post('/', async (req, res) => {
    const { title, description, company, location, salary, postedBy } = req.body;
    try {
        const job = await Job.create({ title, description, company, location, salary, postedBy });
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
