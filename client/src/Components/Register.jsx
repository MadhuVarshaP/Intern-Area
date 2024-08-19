import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();


  return (
    <div>
      <div className="py-[25px]">
        <p className="text-[30px] font-semibold">Sign up & Apply for Free</p>
        <p>1,50,000+ companies hiring on Intern Area</p>
      </div>
      <LoginButton />
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Email</p>
        <input
          type="text"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Password</p>
        <input
          type="password"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="Must be atleast 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Name</p>
        <input
          type="text"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
      <p className="my-[20px]">
        By signing up, you agree to our{" "}
        <span className="text-[#078EDD]">Terms and Conditions</span>
      </p>
      <div className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px]">
      <Link to="/" >
        Sign Up
      </Link>
      </div>
     
      <p className="py-[20px]">
        Already Registered?{" "}
        <Link to="/login" className="text-[#078EDD]">
          Login
        </Link>
      </p>
      </div>
    </div>
  );
}

export default Register;
