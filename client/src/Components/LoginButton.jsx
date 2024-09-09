import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className='flex justify-center'>
        <div className="bg-[#078EDD] flex justify-center items-center space-x-2 text-white rounded-md p-[10px] w-[250px] h-fit">
        <FcGoogle className='h-[30px] w-[30px]'/>
        <button onClick={() => loginWithRedirect()}>Login With Google </button>
      </div>
      </div>
    )
  )
}

export default LoginButton
