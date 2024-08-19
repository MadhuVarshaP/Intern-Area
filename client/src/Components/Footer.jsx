import React from "react";

function Footer() {
  return (
    <div className="flex items-end bg-[#242529] text-white">
      <div className="flex flex-col w-full py-[10px]">
        <div className="border-b-[1px] border-gray-400 flex text-left justify-center space-x-8 py-[25px]">
          <div className="flex flex-col">
            <p className="font-medium py-[10px]">Internship by Places</p>
            <a href="">
              <p>Internship in Delhi</p>
            </a>
            <a href="">
              <p>Internship in Coimbatore</p>
            </a>
            <a href="">
              <p>Internship in Salem</p>
            </a>
            <a href="">
              <p>Internship in Chennai</p>
            </a>
            <a href="">
              <p>Internship in Bangalore</p>
            </a>
            <a href="">
              <p>Internship in Hyderabad</p>
            </a>
            <a href="">
              <p>Virtual Internship</p>
            </a>
            <a href="">
              <p>View all Internships</p>
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-medium py-[10px]">Internship by Stream</p>
            <p>Computer Science Internship</p>
            <p>Electronics Internship</p>
            <p>Mechanical Internship</p>
            <p>Civil Internship</p>
            <p>Marketing Internship</p>
            <p>Summer Research Fellowship</p>
            <p>Campus Ambassador Program</p>
            <p>View all Internships</p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium py-[10px]">Jobs by Places</p>
            <p>Jobs in Delhi</p>
            <p>Jobs in Coimbatore</p>
            <p>Jobs in Salem</p>
            <p>Jobs in Chennai</p>
            <p>Jobs in Bangalore</p>
            <p>Jobs in Hyderabad</p>
            <p>Jobs in Pune</p>
            <p>View all Jobs</p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium py-[10px]">Internship by Stream</p>
            <p>Computer Science Internship</p>
            <p>Electronics Internship</p>
            <p>Mechanical Internship</p>
            <p>Civil Internship</p>
            <p>Marketing Internship</p>
            <p>Summer Research Fellowship</p>
            <p>Campus Ambassador Program</p>
            <p>View all Internships</p>
          </div>
        </div>
        <div className="flex text-left justify-evenly space-x-[-240px] py-[25px]">
          <div className="flex flex-col">
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>We're Hiring</p>
            </a>
            <a href="">
              <p>Hire Interns for your company</p>
            </a>
            <a href="">
              <p>Post a Job</p>
            </a>
          </div>
          <div className="flex flex-col">
            <a href="">
              <p>Team Diary</p>
            </a>
            <a href="">
              <p>Blog</p>
            </a>
            <a href="">
              <p>Our Services</p>
            </a>
          </div>
          <div className="flex flex-col">
            <a href="">
              <p>Terms & Conditions</p>
            </a>
            <a href="">
              <p>Privacy</p>
            </a>
            <a href="">
              <p>Contact Us</p>
            </a>
          </div>
        </div>
        <div className="flex justify-around items-center py-[30px]">
          <button className="border-[2px] border-white rounded-md p-[5px]">
            Get Android App
          </button>
          <p>© Copyrights 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
