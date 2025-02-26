import React from 'react'
import { NavLink } from 'react-router'

const LandingPage = () => {
  return (
    <div className="flex gap-8 items-center justify-center h-screen bg-gray-100">
        <NavLink to={"/signup"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Sign Up
        </NavLink>

        <NavLink to={"/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Login
        </NavLink>
    </div>
  )
}

export default LandingPage