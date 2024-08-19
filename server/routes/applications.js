const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Apply for Job
router.post('/', async (req, res) => {
    const { job, applicant, coverLetter } = req.body;
    try {
        const application = await Application.create({ job, applicant, coverLetter });
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Applications for Job
router.get('/job/:jobId', async (req, res) => {
    try {
        const applications = await Application.find({ job: req.params.jobId }).populate('applicant');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
