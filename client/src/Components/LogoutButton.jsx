import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

function LogoutButton() {
    const { logout , isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <button className="bg-[#078EDD] text-white rounded-md p-[10px] h-fit" onClick={() => logout()}>LogOut </button>

    )
  )
}

export default LogoutButton
