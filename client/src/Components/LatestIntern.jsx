import React, { useState, useRef } from "react";
import Card from "./Card";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { internCard } from "../constants/data";
import SliderWrapper from "../utils/SliderWrapper";
import InternshipUploader from "./InternshipUploader";

function LatestIntern() {
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null); // Create a ref for the slider
  const selectOption = (option) => {
    setSelected(option);
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-50 py-[25px] ">
      <p className="text-[24px] font-medium py-[25px]">
        Latest Internships for you
      </p>
      <div className="space-x-5">
        {/* Filter Buttons */}
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
        <SliderWrapper ref={sliderRef} {...settings}>
          {" "}
          {/* Use SliderWrapper here */}
          {internCard.map((intern) => (
            <div key={intern.id} className="flex justify-center items-center">
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
      </div>
      <div className="flex justify-center space-x-20 py-[20px] ">
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
