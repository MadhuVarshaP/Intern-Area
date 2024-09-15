import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { internCard } from "../constants/data";

function LatestIntern() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardWidth = 400;
  const cardGap = 10;
  const itemsToShow = 1;
  const totalItems = internCard.length;
  const selectOption = (option) => {
    setSelected(option);
  };

  const prevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, internCard.length - 1)
    );
  };

  const carouselRef = useRef(null);

  // Clone the first and last items for seamless infinite scroll
  const cloneFirst = internCard.slice(0, 1);
  const cloneLast = internCard.slice(-1);
  const extendedInternCard = [...cloneLast, ...internCard, ...cloneFirst];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next slide
    }, 3000); // 3 seconds delay

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle the infinite looping transition effect
  useEffect(() => {
    if (currentIndex === 0) {
      // If it's the cloned last item (which is the first in the extended array)
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition for instant change
        setCurrentIndex(totalItems); // Jump to real last item
      }, 500); // Allow time for transition
    } else if (currentIndex === totalItems + 1) {
      // If it's the cloned first item (which is the last in the extended array)
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition for instant change
        setCurrentIndex(1); // Jump to real first item
      }, 500); // Allow time for transition
    } else {
      setIsTransitioning(true); // Enable transition during regular navigation
    }
  }, [currentIndex, totalItems]);

  return (
    <div className="bg-gray-50 py-[25px] ">
      <p className="text-[24px] font-medium py-[25px]">
        Latest Internships for you
      </p>
      <div className="space-x-5">
        <button
          onClick={() => selectOption("Big Data")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Big Data"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Big Data
        </button>
        <button
          onClick={() => selectOption("Blockchain")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Blockchain"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Blockchain
        </button>
        <button
          onClick={() => selectOption("Data Science")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Data Science"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Data Science
        </button>
        <button
          onClick={() => selectOption("Full Stack")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Full Stack"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Full Stack
        </button>
        <button
          onClick={() => selectOption("Marketing")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Marketing"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Marketing
        </button>
        <button
          onClick={() => selectOption("Human Resource")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Human Resource"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Human Resource
        </button>
        <button
          onClick={() => selectOption("Engineering")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Engineering"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Engineering
        </button>
        <button
          onClick={() => selectOption("Part-Time")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Part-Time"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Part-Time
        </button>
        <button
          onClick={() => selectOption("Work from home")}
          className={`border-[2px] border-[#078EDD] p-[10px] rounded-md hover:bg-[#078EDD] hover:text-white ${
            selected === "Work from home"
              ? "bg-[#078EDD] text-white"
              : "bg-white text-black"
          }`}
        >
          Work from home
        </button>
      </div>
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className={`flex w-full ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
          }}
        >
          {extendedInternCard.map((intern, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full sm:w-[400px]"
            >
              <Card
                title={intern.title}
                company={intern.company}
                location={intern.location}
                stipend={intern.stipend}
                duration={intern.duration}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-20 py-[20px] ">
        <button
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
          onClick={prevClick}
          disabled={currentIndex === 0}
        >
          <GrFormPrevious className="h-[30px] w-[30px]" />
        </button>
        <button
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
          onClick={nextClick}
          disabled={currentIndex === internCard.length - 1}
        >
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default LatestIntern;
