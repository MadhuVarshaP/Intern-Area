import React from "react";
import LoginButton from "./LoginButton";
function Login() {
  return (
    <div>
      <div className="py-[25px]">
        <p className="text-[30px] font-semibold">Login Now</p>
        <p>1,50,000+ companies hiring on Intern Area</p>
      </div>
      <LoginButton />

      <div className="flex justify-center space-x-5 pt-[20px]">
        <p className="font-semibold">Email</p>
        <input
          type="text"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="john@example.com"
        />
      </div>
      <div className="flex justify-center space-x-5 py-[20px]">
        <p className="font-semibold">Password</p>
        <input
          type="password"
          className="border-[2px] py-[5px] rounded-md w-[400px] px-[10px]"
          placeholder="Must be atleast 6 characters"
        />
      </div>

      <p className="py-[px] text-[#078EDD]">Forgot Password?</p>
      <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]">
        <p>Login</p>
      </button>
      {/* <p className="py-[20px]">
        New to Internship?{" "}
        <Link to="/register" className="text-[#078EDD]">
          Register
        </Link>
      </p> */}
    </div>
  );
}

export default Login;
