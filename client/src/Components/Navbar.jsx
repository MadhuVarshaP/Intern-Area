import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

import {useAuth0} from '@auth0/auth0-react'

function Navbar() {
  const [dropDownIntern, setDropDownIntern] = useState(false);
  const [dropDownJob, setDropDownJob] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const { profilePicture } = useAuth();
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
  // const loginFunction = () => {
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const showLogin = () => setIsLogin(true);
  // const closeLogin = () => setIsLogin(false);

  return (
    <div className="p-[20px] flex border-b-[2px] shadow-sm">
      <div className="flex justify-start w-full space-x-4 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[70px] w-[150px]" />
        </Link>
        <button
          className="flex items-center"
          onClick={() => setDropDownIntern(!dropDownIntern)}
        >
          <p>Internships</p>
          {dropDownIntern ? (
            <IoMdArrowDropup className="h-[20px] w-[20px]" />
          ) : (
            <IoMdArrowDropdown className="h-[20px] w-[20px]" />
          )}
          {dropDownIntern && (
            <div className="absolute left-25 top-14 p-[10px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="flex space-x-5 text-left">
                <div className="flex flex-col space-y-1">
                  <Link to="/internList">
                    <p>Top Locations</p>
                  </Link>
                  <Link>
                    <p>Profile</p>
                  </Link>
                  <Link>
                    <p>Top Categories</p>
                  </Link>
                  <Link>
                    <p>Explore more Internships</p>
                  </Link>
                </div>
                <div className="flex flex-col space-y-1">
                  <Link>
                    <p>Work from Home</p>
                  </Link>
                  <Link>
                    <p>Intern at Chennai</p>
                  </Link>
                  <Link>
                    <p>Intern at Bangalore</p>
                  </Link>
                  <Link>
                    <p>Intern at Hyderabad</p>
                  </Link>
                  <Link>
                    <p>Intern at Delhi</p>
                  </Link>
                  <Link>
                    <p>View all Internships</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </button>
        <button
          className="flex items-center"
          onClick={() => setDropDownJob(!dropDownJob)}
        >
          <p>Jobs</p>
          {dropDownJob ? (
            <IoMdArrowDropup className="h-[20px] w-[20px]" />
          ) : (
            <IoMdArrowDropdown className="h-[20px] w-[20px]" />
          )}
          {dropDownJob && (
            <div className="absolute left-50 top-14 p-[10px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="flex space-x-5 text-left">
                <div className="flex flex-col space-y-1">
                  <Link to="/jobList">
                    <p>Top Locations</p>
                  </Link>
                  <Link>
                    <p>Top Categories</p>
                  </Link>
                  <Link>
                    <p>Explore more Jobs</p>
                  </Link>
                </div>
                <div className="flex flex-col space-y-1">
                  <Link to="/">
                    <p>Work from Home</p>
                  </Link>
                  <Link>
                    <p>Job at Chennai</p>
                  </Link>
                  <Link>
                    <p>Job at Bangalore</p>
                  </Link>
                  <Link>
                    <p>Job at Hyderabad</p>
                  </Link>
                  <Link>
                    <p>Job at Delhi</p>
                  </Link>
                  <Link>
                    <p>View all Jobs</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
      <div className="flex justify-end w-full space-x-4 items-center">
        <IoMdSearch className="h-[30px] w-[30px]" />
        <input
          type="text"
          className="flex items-center bg-gray-200 w-[250px] p-[10px] rounded-md"
        ></input>
        <Link
          to="/login"
          className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit"
        >
          <p>Login</p>
        </Link>
        <Link
          to="/register"
          className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit"
        >
          <p>Register</p>
        </Link>
        <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit">
          <p>Hire Talent</p>
        </button>
        <Link
          to="/admin"
          className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit"
        >
          <p>Admin</p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <>
            <Link to="/profile" className="text-xl">
              Profile
            </Link>
            {/* <img
              src={profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
