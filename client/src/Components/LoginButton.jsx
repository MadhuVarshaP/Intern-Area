import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const registerUser = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently();
          console.log("Access Token:", token);

          const response = await fetch("/auth0-register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Ensure token is sent here
            },
          });

          const data = await response.json();
          if (response.ok) {
            console.log("User registered or logged in:", data);
          } else {
            console.error("Error registering user:", data.error);
          }
        } catch (error) {
          console.error("Error fetching access token or calling API:", error);
        }
      }
    };

    registerUser();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  return (
    !isAuthenticated && (
      <div className="flex justify-center">
        <div className="bg-[#078EDD] flex justify-center items-center space-x-2 text-white rounded-md p-[10px] w-[250px] h-fit">
          <FcGoogle className="h-[30px] w-[30px]" />
          <button onClick={() => loginWithRedirect()}>Login With Google</button>
        </div>
      </div>
    )
  );
}

export default LoginButton;
