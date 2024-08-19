import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { BiCaretRightCircle } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { TbCashBanknote } from "react-icons/tb";
import { CgSandClock } from "react-icons/cg";
import { PiClockClockwiseFill } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";

function JobDetails() {
  return (
    <div className="m-[20px]">
      <p className="text-[25px] font-semibold">Job Title</p>
      <div className="flex justify-center">
        <div className="flex flex-col rounded-md border-[1px] m-[30px] p-[20px] w-[1000px] ">
          <div className="flex space-x-1 items-center">
            <GoArrowUpRight className="h-[18px]" />
            <p className="text-[18px] text-[#078EDD]">Actively Hiring</p>
          </div>
          <div className="flex flex-col py-[10px] justify-start text-start">
            <p className="font-medium">ReactJS Development</p>
            <p className="text-[18px]">Techie</p>
          </div>
          <div className="flex space-x-1 items-center py-[10px]">
            <GoHome className="h-[22px] w-[22px]" />
            <p className="text-[18px]">Work from home</p>
          </div>
          <div className="flex space-x-20">
            <div className="flex flex-col text-left space-y-[-10px] ">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <BiCaretRightCircle className="h-[18px] w-[18px]" />
                <p className="text-[16px]">START DATE</p>
              </div>
              <p className="text-[18px]">Immediately</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px] ">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <CiCalendar className="h-[18px] w-[18px]" />
                <p className="text-[16px]">EXPERIENCE</p>
              </div>
              <p className="text-[18px]">2-3 Years</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px] ">
              <div className="flex space-x-1 text-gray-500 items-center py-[10px]">
                <TbCashBanknote className="h-[18px] w-[18px]" />
                <p className="text-[16px]">SALARY</p>
              </div>
              <p className="text-[18px]">₹8,000 - 10,000 /month</p>
            </div>
            <div className="flex flex-col text-left space-y-[-10px] ">
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
              <p className="text-[16px]">Posted 1 week ago</p>
            </div>
            <div className="bg-gray-200 rounded-md text-gray-600 w-fit px-[5px]">
              <p className="text-[16px]">Job</p>
            </div>
          </div>
          <div className="text-gray-500 flex items-center space-x-1">
            <LuUsers />
            <p className="text-gray-800 text-[18px]">1000+ Applicants</p>
          </div>
          <div className="flex flex-col text-left py-[20px] space-y-2">
            <p className="font-medium pt-[10px]">
              About the work from home job
            </p>
            <div className="text-gray-500 text-[18px]">
              <p>
               
                We are seeking a motivated and enthusiastic React JS job to
                join our dynamic team. This internship offers a unique
                opportunity to gain hands-on experience in developing web
                applications within a fast-paced and collaborative environment.
                You'll work closely with our experienced developers, gaining
                practical skills and insights into the latest trends in web
                development.
              </p>
              <p className="py-[10px]">Selected job's day-to-day responsibilities include:</p>
              <p>
                1. Collaborative Development: Work with the development team to
                design, develop, and maintain React JS web applications.
              </p>
              <p>
                2. Feature Implementation: Assist in adding new features and
                functionalities to our existing applications.
              </p>
              <p>
                3. Troubleshooting and Debugging: Identify and fix issues to
                optimize the performance and reliability of our web
                applications.
              </p>
              <p>
                4. UI/UX Integration: Collaborate with UI/UX designers to ensure
                the best possible user experience.
              </p>
              <p>
                5. Industry Trend Awareness: Stay updated with industry trends
                and contribute innovative ideas for continuous improvement.
              </p>
              <p>
                6. Code Quality: Write clean, maintainable code, adhering to
                best practices and coding standards.
              </p>
            </div>
            <p className="font-medium pt-[10px]">Skill(s) required</p>
            <div className="flex space-x-5">
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                HTML
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                JavaScript
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                ReactJS
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                Redux
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                Rest API
              </p>
            </div>
            <p className="font-medium pt-[10px]">
              Earn certifications in these skills
            </p>
            <div className="flex space-x-5 text-[18px]">
              <a
                href="https://trainings.internshala.com/web-development-course/"
                className="bg-gray-50 text-[#078EDD] w-fit rounded-md px-[10px]"
              >
                Learn HTML
              </a>
              <a
                href="https://trainings.internshala.com/web-development-course/"
                className="bg-gray-50 text-[#078EDD] w-fit rounded-md px-[10px]"
              >
                Learn JavaScript
              </a>
              <a
                href="https://trainings.internshala.com/web-development-course/"
                className="bg-gray-50 text-[#078EDD] w-fit rounded-md px-[10px]"
              >
                Learn ReactJS
              </a>
              <a
                href="https://trainings.internshala.com/web-development-course/"
                className="bg-gray-50 text-[#078EDD] w-fit rounded-md px-[10px]"
              >
                Learn Rest API
              </a>
            </div>
            <p className="font-medium pt-[10px]">Who can apply</p>
            <div className="text-gray-500 text-[18px]">
              <p>Only those candidates can apply who: </p>
              <p> 1. are available for the work from home job/internship </p>

              <p>
                2. can start the work from home job/internship between 8th
                Jun'24 and 13th Jul'24
              </p>

              <p>3. are available for duration of 6 months </p>

              <p>4. have relevant skills and interests</p>
            </div>
            <p className="font-medium pt-[10px]">Who can apply</p>
            <div className="text-gray-500 text-[18px]">
              <p>1. Enrolled in a relevant undergraduate or graduate program, pursuing a degree in Computer Science, Software Engineering, or a related field.</p>
              <p>2. Basic understanding of React and web app development concepts</p>
              <p>3. Familiarity with JavaScript, ES6+, and React/React Native</p>
              <p>4. Previous experience with web app development (personal projects, coursework, etc.).</p>
              <p>5. Familiarity with version control systems, such as Git</p>
            </div>
            <p className="font-medium pt-[10px]">Perks</p>
            <div className="flex space-x-5">
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                Week off
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                Letter of Recommendation
              </p>
              <p className="bg-gray-100 text-gray-500 w-fit rounded-md px-[10px] text-[18px]">
                Flexible work hours
              </p>
            </div>
            <p className="font-medium pt-[10px]">Number of Openings</p>
            <p className="text-gray-500 text-[18px]">3</p>
            <p className="font-medium pt-[10px]">About Techie</p>
            <a href="https://www.techvastra.com/" className="text-[#078EDD] hover:underline">Website →</a>
            <div className="text-gray-500 text-[18px]">
              <p>Welcome to Techie, your solution for navigating the challenges of the fashion industry. From paperwork to tight deadlines, tailor oversights, fitting issues, customer connections, and social media management, Techie streamlines your boutique operations.</p>
              <p>Our dynamic team, a fusion of apparel and technology professionals, simplifies and supercharges your boutique's growth. Techie's blend of traditional craftsmanship and cutting-edge technology sets us apart.</p>
              <p>Embark on a journey to efficiency and success with Techie. We empower your boutique, letting you focus on creating exquisite garments while we handle the rest. Join Techie today for a transformative boutique experience.</p>
            </div>
            <div className="flex justify-center py-[10px]">
            <button className="bg-[#078EDD] text-white rounded-md p-[10px] w-[150px] flex justify-center">
          <p>Apply</p>
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
