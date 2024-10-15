import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoCashOutline } from "react-icons/io5";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick

const InternshipUploader = () => {
  const [internships, setInternships] = useState([]); // State to store fetched internships

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/internships"
        );
        setInternships(response.data); // Set the fetched internships to state
      } catch (error) {
        console.error(
          "Error fetching internships:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchInternships();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col items-center w-full">
      {internships.length > 0 ? (
        <Slider {...settings} className="w-[500px]">
          {" "}
          {/* Adjust width as needed */}
          {internships.map((internship) => (
            <div
              key={internship._id}
              className="border-[2px] border-white shadow-md p-[10px] flex flex-col text-start rounded-lg m-[20px] bg-white"
            >
              <div className="flex space-x-1 items-center">
                <GoArrowUpRight className="h-[30px]" />
                <p>Actively Hiring</p>
              </div>
              <div className="py-[15px] border-b-[2px]">
                <p className="text-[22px] font-semibold">{internship.title}</p>
                <p className="text-gray-700">{internship.company}</p>
              </div>
              <div className="py-[20px] flex flex-col space-y-2">
                <div className="flex items-center space-x-1">
                  <CiLocationOn className="h-[25px] w-[25px]" />
                  <p>{internship.location}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <IoCashOutline className="h-[25px] w-[25px]" />
                  <p>{internship.stipend}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <CiCalendar className="h-[25px] w-[25px]" />
                  <p>{internship.duration}</p>
                </div>
                <div className="flex justify-between py-[10px]">
                  <p>Internship</p>
                  <Link
                    to={`/intern/${internship.title}`}
                    className="flex space-x-1 items-center"
                  >
                    <button className="text-[#078EDD]">View Details</button>
                    <FcNext className="h-[18px] w-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading internships...</p> // Show a loading message while fetching
      )}
    </div>
  );
};

export default InternshipUploader;
