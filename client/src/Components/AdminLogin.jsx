import React from "react";

function AdminLogin() {
  return (
    <div className="py-[25px]">
      <p className="text-[30px] font-semibold">Admin Login</p>
      <div className='my-[20px]'>
      </div>
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
      <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]">
        Login
      </button>
    </div>
  );
}

export default AdminLogin;
