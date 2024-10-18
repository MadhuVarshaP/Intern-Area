const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stipend: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    description: String,
    applicants: Number,
    skills: [String],
    startDate: String,
    applyBy: String,
    posted: String,
    perks: [String],
    website: String,
  },
  { timestamps: true }
);

const Internship = mongoose.model("Internship", internshipSchema);

module.exports = Internship;
