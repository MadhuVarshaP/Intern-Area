import React from "react";
import { LiaFilterSolid } from "react-icons/lia";
import JobCover from "./JobCover";

function JobList() {
  return (
    <div>
      <div className="my-[20px] space-y-2">
        <p className="font-semibold text-[25px]">8000 Jobs</p>
        <p className="text-[16px] text-gray-500">
          Search and Apply to Latest Job Vacancies & Openings in India
        </p>
      </div>
      <div className="flex items-center justify-center my-[20px] space-x-4">
        <div className="relative border-[1px] p-[10px] flex flex-col justify-center w-fit">
          <div className="flex space-x-1 items-center justify-center py-[10px]">
            <LiaFilterSolid className="h-[22px] w-[22px] text-[#078EDD]" />
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex space-x-1 items-center text-[18px]">
            <input type="checkbox" id="preference" />
            <p>
              As per my
              <span className="text-[#078EDD] cursor-pointer">
                {" "}
                preferences
              </span>
            </p>
          </div>
          <div className="text-left py-[10px]">
            <p>Profile</p>
            <input
              type="text"
              placeholder="e.g. Marketing"
              id=""
              className="border-[1px] p-[5px]"
            />
          </div>
          <div className="text-left py-[10px]">
            <p>Location</p>
            <input
              type="text"
              placeholder="e.g. Chennai"
              id=""
              className="border-[1px] p-[5px]"
            />
          </div>
          <div className="flex space-x-1 items-center text-[18px] py-[5px]">
            <input type="checkbox" id="home-work" />
            <p>Work from home</p>
          </div>
          <div className="flex space-x-1 items-center text-[18px] py-[5px]">
            <input type="checkbox" id="location" />
            <p>Part-time</p>
          </div>
          <div className="py-[5px]">
            <p className="font-medium py-[10px]">Annual salary (in lakhs)</p>
            <input
              type="range"
              className="w-[340px]"
              min="0"
              max="10000"
              step="1000"
            />
            <div className="flex justify-between w-[340px] px-[5px] text-gray-500">
              <span className="text-xs">0</span>
              <span className="text-xs">2</span>
              <span className="text-xs">3</span>
              <span className="text-xs">6</span>
              <span className="text-xs">8</span>
              <span className="text-xs">10</span>
              <span className="text-xs"></span>
            </div>
          </div>
          <div className="text-left py-[10px]">
            <p>Years of experience</p>
            <input
              type="text"
              placeholder="Select years of experience"
              id=""
              className="border-[1px] p-[5px]"
            />
          </div>
          <button className="text-[#078EDD] py-[10px] text-right">
            Clear all
          </button>
        </div>
        <div className="flex flex-col space-y-5 my-[5px]">
          <JobCover />
          <JobCover />
          <JobCover />
          <JobCover />
        </div>
      </div>
    </div>
  );
}

export default JobList;
