import React, { useState, useEffect, useRef } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import JobUploader from "./JobUploader";
import axios from "axios";
import SliderWrapper from "../utils/SliderWrapper";

function LatestJob() {
  const [jobs, setJobs] = useState([]);
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    fetchJobs();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const selectOption = (category) => {
    setSelected(category);
  };

  return (
    <div className="bg-gray-50 py-[25px]">
      <p className="text-[24px] font-medium py-[25px]">Latest Jobs for you</p>
      <div className="space-x-5">
        {[
          "Big Data",
          "Blockchain",
          "Data Science",
          "Full Stack",
          "Marketing",
          "Human Resource",
          "Engineering",
          "Part-Time",
          "Work from home",
        ].map((category) => (
          <button
            key={category}
            onClick={() => selectOption(category)}
            className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
              selected === category
                ? "bg-[#078EDD] text-white"
                : "bg-white text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        {jobs.length > 0 ? (
          <SliderWrapper ref={sliderRef} {...settings}>
            {jobs.map((job) => (
              <div key={job._id} className="flex justify-center items-center">
                <JobUploader
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  experience={job.experience}
                />
              </div>
            ))}
          </SliderWrapper>
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
      <div className="flex justify-center space-x-20 py-[20px]">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
        >
          <GrFormPrevious className="h-[30px] w-[30px]" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
        >
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default LatestJob;
