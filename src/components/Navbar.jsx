import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navlist = (
    <>
      <li><Link to={'/'} className="text-white hover:text-gray-300">Home</Link></li>
      <li><Link to={'/alltourism'} className="text-white hover:text-gray-300">AllTourists Spot</Link></li>
      <li><Link to={'/addtourism'} className="text-white hover:text-gray-300">AddTourists Spot</Link></li>
      <li><Link to={'/mylist'} className="text-white hover:text-gray-300">MyList</Link></li>
    </>
  );

  return (
    <div className="bg-gray-900">
      <div className="navbar container mx-auto flex justify-between items-center py-4">
        <div>
          <a href="#" className="text-white text-xl font-bold">TripAdvisor</a>
        </div>
        <div className="flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal px-1 mr-4">
         { navlist}
          </ul>
          <div className="dropdown mr-4">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
              {navlist}
            </ul>
          </div>
          <a href="#" className="btn btn-ghost text-white">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
