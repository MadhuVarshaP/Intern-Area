import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const ProfileContext = createContext();

// ProfileProvider component to provide context values
export const ProfileProvider = ({ children }) => {
  // State to hold the profile picture URL
  const [profilePicture, setProfilePicture] = useState(() => {
    // Retrieve the profile picture from local storage if it exists
    const savedProfilePicture = localStorage.getItem("profilePicture");
    return savedProfilePicture ? savedProfilePicture : "";
  });

  // useEffect to save the profile picture to local storage whenever it changes
  useEffect(() => {
    if (profilePicture) {
      localStorage.setItem("profilePicture", profilePicture);
    }
  }, [profilePicture]);

  return (
    <ProfileContext.Provider value={{ profilePicture, setProfilePicture }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the ProfileContext
export const useProfile = () => useContext(ProfileContext);
