import React, { useState, useEffect, useRef } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import InternshipUploader from "./InternshipUploader";
import axios from "axios";
import SliderWrapper from "../utils/SliderWrapper";

function LatestIntern() {
  const [internships, setInternships] = useState([]);
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/internships"
        );
        setInternships(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error.message);
      }
    };

    fetchInternships();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const selectOption = (category) => {
    setSelected(category);
    // Optionally, you can filter internships by category here if your API doesn't handle it
  };

  return (
    <div className="bg-gray-50 py-[25px]">
      <p className="text-[24px] font-medium py-[25px]">
        Latest Internships for you
      </p>
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
        {internships.length > 0 ? (
          <SliderWrapper ref={sliderRef} {...settings}>
            {/* Render internships dynamically */}
            {internships.map((intern) => (
              <div
                key={intern._id}
                className="flex justify-center items-center"
              >
                <InternshipUploader
                  title={intern.title}
                  company={intern.company}
                  location={intern.location}
                  stipend={intern.stipend}
                  duration={intern.duration}
                />
              </div>
            ))}
          </SliderWrapper>
        ) : (
          <p>Loading internships...</p>
        )}
      </div>
      <div className="flex justify-center space-x-20 py-[20px]">
        <button
          onClick={() => sliderRef.current.slickPrev()} // Call the slickPrev method
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
        >
          <GrFormPrevious className="h-[30px] w-[30px]" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()} // Call the slickNext method
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
        >
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default LatestIntern;
