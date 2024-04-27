import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import TopNav from "./TopNav"
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [navbar,setNavbar]=useState(false);
  const changeBackground =()=>{
    if(window.scrollY >=80){
    setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  
  window.addEventListener('scroll',changeBackground)
  const handleToggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      setTheme(storedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-theme', theme ? 'night' : 'light');
  }, [theme]);

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
        <NavLink to={`/mylist`} className="text-white hover:text-gray-300">
          MyList
        </NavLink>
      </li>
      <div className="flex gap-2 md:hidden">
        <NavLink to={"/login"} className="btn border-t-slate-600 text-black">
          Login
        </NavLink>
        <NavLink to={"/register"} className="btn border-t-slate-600 text-black">
          Register
        </NavLink>
      </div>
    </>
  );

  return (
    <div className={` ${navbar?'bg-black duration-500':'bg-transparent'}`}>
     <div className={` ${navbar?'hidden':'block'}`}>
    <TopNav></TopNav>
    </div>
      <div className={`navbar max-w-7xl mx-auto `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-white text-black  lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black  rounded-box w-52"
            >
              {navlist}
            </ul>
          </div>
          <a className="text-2xl font-Homemade text-white font-semibold">City Tour</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[14px] px-1">{navlist}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <div onClick={handleToggle} className="border-2 rounded-full text-white">
            {theme ? <MdDarkMode size={25} /> : <CiDark size={25} />}
          </div>
          <div className="text-white">
            <IoBagHandleOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
