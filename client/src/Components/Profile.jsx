import React, { useState } from "react";
import profile from "../Assets/user.jpg"; // Default image
import { FaPenToSquare } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { useProfile } from "../utils/ProfileContext";

const Profile = () => {
  const { profilePicture, setProfilePicture } = useProfile();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Handle profile picture change
  const handleProfilePictureChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Show loading state or handle unauthenticated state
  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>You need to log in to view this page.</p>;

  return (
    <div className="py-[25px]">
      <p className="text-[30px] font-semibold">Profile</p>
      <div className="profile-container flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={profilePicture || user.picture || profile}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
          <div
            className="flex space-x-2 items-center py-[10px] cursor-pointer"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            <FaPenToSquare />
            <p>Change profile picture</p>
          </div>
          <input
            type="file"
            accept="image/*"
            className="absolute top-0 left-0 opacity-0 cursor-pointer"
            onChange={handleProfilePictureChange}
          />
          <h2 className="text-xl mt-2">Name: {user.name}</h2>
          <p className="text-lg text-gray-600">Email: {user.email}</p>
        </div>

        <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
