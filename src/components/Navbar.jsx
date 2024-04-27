import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);

 
  const navlist = (
    <>
      <li>
        <NavLink to={"/"} className="text-white hover:text-gray-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/alltourism"} className="text-white hover:text-gray-300">
          AllTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addtourism"} className="text-white hover:text-gray-300">
          AddTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={"/mylist"} className="text-white hover:text-gray-300">
          MyList
        </NavLink>
      </li>
      <div className=" flex gap-2 md:hidden ">
        <NavLink to={"/login"} className="btn border-t-slate-600   text-black ">
          Login
        </NavLink>
        <NavLink to={"/register"} className="btn border-t-slate-600   text-black ">
          Register
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlist}
            </ul>
          </div>
          <a className=" text-2xl font-Homemade text-white font-semibold ">
            {" "}
            City Tour
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal text-[14px] px-1">{navlist}</ul>
        </div>
        <div className="navbar-end">
          {
            user?<div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="user"
                src={user.photoURL}
              />
            </div>
          </div> :<div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
