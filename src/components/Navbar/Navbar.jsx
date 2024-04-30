import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirebaseProvider";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import TopNav from "./TopNav"
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [navbar,setNavbar]=useState(false);
  const [datas, setData] = useState([]);
  const useremail = user?.email;
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    fetch(`https://tourism-server-liard.vercel.app/tourisms/email/${useremail}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [useremail]);
  const changeBackground =()=>{
    if(window.scrollY >=80){
    setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
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
        <NavLink to={"/"} className="text-white ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/alltourism"} className="text-white ">
          AllTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addtourism"} className="text-white ">
          AddTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={`/mylist`} className="text-white ">
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
    <div className={` ${navbar?'bg-[#1A1D26] duration-500':'bg-transparent'}`}>
     <div className={` ${navbar?'hidden':'block'}`}>
    <TopNav></TopNav>
    </div>
      <div className={`navbar flex justify-between max-w-7xl mx-auto `}>
        <div className="navbar-start flex gap-4">
          <div className="dropdown">
            <div onClick={toggleSidebar} tabIndex={0} role="button"  className="  text-white  lg:hidden">
            { 
            showSidebar?<AiOutlineClose size={20} />:<RiMenuLine size={20} />
            }
            
            </div>
          </div>
          <a  className="text-2xl font-Homemade text-white font-semibold">City <span className=" text-[#f0932b]">Tour</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  text-[18px] font-medium px-1">{navlist}</ul>
        </div>
        <div className=" flex justify-end  gap-3">
          <div onClick={handleToggle} className="border-2 rounded-full text-white">
            {theme ? <MdDarkMode size={25} /> : <CiDark size={25} />}
          </div>
          <div className="text-white relative mr-16 ">
            <IoBagHandleOutline size={25} />
            <div className="rounded-full absolute -top-3 -right-3  border h-6 8 w-6 flex items-center justify-center border-red-500 ">
            {datas.length}
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute ${showSidebar ? 'right-0' : ' -right-[1500px]'} ease-in duration-300 min-h-screen z-40 w-full text-center items-center md:hidden flex justify-center bg-[rgb(200,214,229)] opacity-95 font-bold`}>
  <ul className='flex flex-col justify-center items-center text-center py-6 gap-6'>
    {navlist}
  </ul>
</div>
    </div>
  );
};

export default Navbar;
