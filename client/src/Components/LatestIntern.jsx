import React, { useState } from "react";
import Card from "./Card";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { internCard } from "../constants/data";

function LatestIntern() {
  const [selected, setSelected] = useState(null);

  const selectOption = (option) => {
    setSelected(option);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, internCard.length -1 ));
  };

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
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (400 + 10)}px)`,
        }}
      >
        {internCard.map((intern, title) => (
          <div key={title} className="flex justify-center items-center w-full sm:w-400px">
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
      <div
        className="flex justify-center space-x-20 py-[20px] "
      >
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
          disabled={currentIndex === internCard.length-1}
        >
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default LatestIntern;
