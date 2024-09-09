import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { BiCaretRightCircle } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { TbCashBanknote } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { PiClockClockwiseFill } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { jobCard } from "../constants/data";
import { IoMdClose } from "react-icons/io";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { title } = useParams();
  const jobs = jobCard.find((job) => job.title === title);

  const { company, salary, experience } = jobs;
  const [popUp, setPopUp] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");

  const handleOptionChange = (e) => setRadioSelected(e.target.value);

  // Check if the job was found
  if (!jobs) {
    return <p>Job not found</p>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Submission Successful!");
    setPopUp(false);
  };

  return (
    <div className="m-[20px]">
      <p className="text-[25px] font-semibold">{title}</p>
      {popUp && (
        <div className="bg-[#000000]/40 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center">
          <div className="bg-gray-100 p-[20px] fixed z-60 flex flex-col rounded-lg">
            <div className="flex justify-between w-[800px] border-b-[2px]">
              <div className="flex flex-col justify-start items-start py-[10px]">
                <p className="font-semibold text-[22px]">
                  Applying for {title}
                </p>
                <p className="text-[18px]">{company}</p>
              </div>
              <div
                className="flex items-center bg-white h-[25px] rounded-full cursor-pointer"
                onClick={() => setPopUp(false)}
              >
                <IoMdClose className="w-[25px] h-[25px]" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-[20px] text-left space-y-1">
                <p className="font-medium">Cover Letter</p>
                <p className="text-[18px]">
                  Why should you be hired for this role?
                </p>
                <textarea
                  name="coverLetter"
                  placeholder="Mention in detail what relevant skill or past experience you have for this job. What excites you about this role? Why would you be a good fit?"
                  className="border-[1px] h-fit p-[10px] text-[18px]"
                />
                <p className="font-medium pt-[20px]">Your Availability</p>
                <p className="text-[18px]">Confirm your availability</p>
                <div className="text-[18px]">
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      id="1"
                      value="1"
                      checked={radioSelected === "1"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="1">
                      Yes, I am available to join immediately
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      id="2"
                      value="2"
                      checked={radioSelected === "2"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="2">
                      No, I am currently on notice period
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      id="3"
                      value="3"
                      checked={radioSelected === "3"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="3">
                      No, I will have to serve notice period
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      id="4"
                      value="4"
                      checked={radioSelected === "4"}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="4">
                      Other (Please specify your availability)
                    </label>
                  </div>
                </div>
                <p className="font-medium pt-[20px]">
                  Custom Resume (optional)
                </p>
                <input type="file" className="text-[18px]" />
              </div>
              <div className="flex justify-center py-[10px]">
                <button
                  type="submit"
                  className="bg-[#078EDD] text-white rounded-md p-[10px] w-[120px] flex justify-center items-center"
                >
                  <p>Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="flex flex-col rounded-md border-[1px] m-[30px] p-[20px] w-[1000px]">
          <div className="flex space-x-1 items-center">
            <GoArrowUpRight className="h-[18px]" />
            <p className="text-[18px] text-[#078EDD]">Actively Hiring</p>
          </div>
          <div className="flex flex-col py-[10px] justify-start text-start">
            <p className="font-medium">{title} Job</p>
            <p className="text-[18px]">{company}</p>
          </div>
          <div className="flex space-x-1 items-center py-[10px]">
            <GoHome className="h-[22px] w-[22px]" />
            <p className="text-[18px]">Work from home</p>
          </div>
          <div className="flex space-x-20">
            <div className="flex flex-col text-left space-y-[-10px]">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <BiCaretRightCircle className="h-[18px] w-[18px]" />
                <p className="text-[16px]">START DATE</p>
              </div>
              <p className="text-[18px]">Immediately</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px]">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <CiCalendar className="h-[18px] w-[18px]" />
                <p className="text-[16px]">EXPERIENCE</p>
              </div>
              <p className="text-[18px]">{experience}</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px]">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <TbCashBanknote className="h-[18px] w-[18px]" />
                <p className="text-[16px]">SALARY</p>
              </div>
              <p className="text-[18px]">{salary}</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px]">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <CgSandClock className="h-[18px] w-[18px]" />
                <p className="text-[16px]">APPLY BY</p>
              </div>
              <p className="text-[18px]">10 Jul' 2024</p>
            </div>
          </div>
          <div className="py-[20px] flex space-x-5">
            <div className="bg-gray-200 rounded-md space-x-1 text-gray-600 w-fit flex items-center px-[5px]">
              <PiClockClockwiseFill className="w-[20px] h-[20px]" />
              <p className="text-[16px]">Part Time</p>
            </div>
            <div className="bg-gray-200 rounded-md space-x-1 text-gray-600 w-fit flex items-center px-[5px]">
              <LuUsers className="w-[20px] h-[20px]" />
              <p className="text-[16px]">20 Applicants</p>
            </div>
          </div>
          <div className="py-[20px]">
            <p className="text-[20px] font-medium">About {company}</p>
            <p className="text-[16px] text-gray-500">
              The Innovation Program is a new initiative under the Grand
              Challenges India (GCI) umbrella, and will work across the
              portfolios of the Department of Biotechnology, and the Bill and
              Melinda Gates Foundation. This unique partnership is aimed at
              seeding, fostering, and scaling up innovations in the
              biotechnology space to create impactful products to benefit people
              in India and beyond.
            </p>
          </div>
          <div className="py-[10px]">
            <p className="text-[20px] font-medium">Activity on Internshala</p>
            <ul className="list-disc px-[20px]">
              <li>Hiring since November 2023</li>
              <li>40 opportunities posted</li>
              <li>300 candidates hired</li>
            </ul>
          </div>
          <div className="flex justify-center pt-[20px]">
            <button
              onClick={() => setPopUp(true)}
              className="bg-[#078EDD] text-white rounded-md p-[10px] w-[120px] flex justify-center items-center"
            >
              <p>Apply Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
