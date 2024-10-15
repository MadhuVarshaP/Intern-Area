import React, { useEffect, useState } from "react";
import profile from "../Assets/user.jpg"; // Default image
import { FaPenToSquare } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { useProfile } from "../utils/ProfileContext";
import axios from "axios";

const Profile = () => {
  const { profilePicture, setProfilePicture } = useProfile();
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [newProfilePicture, setNewProfilePicture] = useState(profilePicture);

  // Handle profile picture change
  const handleProfilePictureChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Send user data to backend
      axios
        .post("http://localhost:5000/api/users/auth0-register", user)
        .then((response) => {
          console.log("User stored/updated in MongoDB", response.data);
        })
        .catch((error) => {
          console.error("Error storing/updating user", error);
        });
    }
  }, [isAuthenticated, user]);

  // Handle profile update
  const handleUpdateProfile = async () => {
    // Ensure you have the user's access token
    const { accessToken } = await getIdTokenClaims();

    // Make a request to update the user's profile picture
    // This assumes you have an endpoint for updating user data
    try {
      await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ profilePicture: newProfilePicture }),
      });

      // Update the profile picture in the context
      setProfilePicture(newProfilePicture);

      // Optionally, you might want to refresh the user profile data
      // This would depend on how you're managing user data
    } catch (error) {
      console.error("Error updating profile:", error);
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
            src={newProfilePicture || user.picture || profile}
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

        <button
          className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit w-[400px] my-[20px]"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
