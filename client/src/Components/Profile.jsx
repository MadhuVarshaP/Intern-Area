import React, { useState } from "react";
import user from "../Assets/user.webp";
import { FaPenToSquare } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(user);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="py-[25px]">
      <p className="text-[30px] font-semibold">Profile</p>
      <div className="profile-container flex flex-col items-center p-4">
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
           <h2>{user.name}</h2>
           <p>{user.email}</p>
          <div
            className="flex space-x-2 items-center py-[10px] cursor-pointer"
            onChange={handleProfilePictureChange}
          >
            <FaPenToSquare />
            <p>Change profile</p>
          </div>
        </div>

        <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
