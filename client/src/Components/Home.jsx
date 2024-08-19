import React, { useState } from "react";
import img1 from "../Assets/Firstslide.png";
import img2 from "../Assets/secondslide.webp";
import img3 from "../Assets/thirdsilde.webp";
import img4 from "../Assets/fourthslide.webp";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import LatestIntern from "./LatestIntern";
import LatestJob from "./LatestJob";

function Home() {
  const Gallery = [img1, img2, img3, img4, img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex - 1
    );
  };

  const nextClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex + 1
    );
  };

  return (
    <div className="my-[40px] flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <p className="text-[25px] font-semibold">Hi, MADHU VARSHA!🖐️</p>
        <p className="py-[10px]">Let’s help you land your dream career</p>
      </div>
      <p className="text-[24px] font-medium py-[25px]">
        Trending on InternArea
      </p>
      
      <div className="flex justify-center">
      <div className="overflow-hidden relative w-[820px] ">
        <div
          className="flex space-x-5 "
          style={{
            transform: `translateX(-${currentIndex * (405 + 10)}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {Gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-[270px] w-[390px]"
            />
          ))}
        </div>
      </div>
      </div>

      <div className="flex justify-center space-x-20 py-[20px]">
        <button
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
          onClick={prevClick}
          disabled={currentIndex===0}
        >
          <GrFormPrevious className="h-[30px] w-[30px]" />
        </button>
        <button
          className="rounded-[999px] flex justify-center items-center border-[2px] p-[8px]"
          onClick={nextClick}
          disabled={currentIndex===Gallery.length-1}
        >
          <GrFormNext className="h-[30px] w-[30px]" />
        </button>
      </div>
      <LatestIntern />
      <LatestJob />
      <div className="space-x-10 flex justify-center">
        <div>
          <p className="text-[#078EDD] text-[70px] font-semibold">300K+</p>
          <p>Companies Hiring</p>
        </div>
        <div>
          <p className="text-[#078EDD] text-[70px] font-semibold">10K+</p>
          <p>New Openings Everyday</p>
        </div>
        <div>
          <p className="text-[#078EDD] text-[70px] font-semibold">21M+</p>
          <p>Active Students</p>
        </div>
        <div>
          <p className="text-[#078EDD] text-[70px] font-semibold">700K+</p>
          <p>Learners</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
