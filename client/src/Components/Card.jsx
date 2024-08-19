import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { IoCashOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

function Card({ title, company, location, stipend, duration }) {
  return (
    <div className="border-[2px] border-white shadow-md w-[400px] p-[10px] flex flex-col text-start rounded-lg m-[20px]">
      <div className="flex space-x-1 items-center">
        <GoArrowUpRight className="h-[30px]" />
        <p>Actively Hiring</p>
      </div>
      <div className="py-[15px] border-b-[2px]">
        <p className="text-[22px] font-semibold">{title}</p>
        <p className="text-gray-700">{company}</p>
      </div>
      <div className="py-[20px] flex flex-col space-y-2">
        <div className="flex items-center space-x-1">
          <CiLocationOn className="h-[25px] w-[25px]" />
          <p>{location}</p>
        </div>
        <div className="flex items-center space-x-1">
          <IoCashOutline className="h-[25px] w-[25px]" />
          <p>{stipend}</p>
        </div>
        <div className="flex items-center space-x-1">
          <CiCalendar className="h-[25px] w-[25px]" />
          <p>{duration}</p>
        </div>
        <div className="flex justify-between py-[10px]">
          <p>Internship</p>
          <Link
            to={`/intern/${title}`}
            className="flex space-x-1 items-center"
          >
            <button className="text-[#078EDD]">View Details</button>
            <FcNext className="h-[18px] w-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
