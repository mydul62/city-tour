import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import { useState } from "react";

const Root = () => {
const [navbar,setNavbar]=useState(false);

const changeBackground =()=>{
  if(window.scrollY >=80){
  setNavbar(true)
  }else{
    setNavbar(false)
  }
}

window.addEventListener('scroll',changeBackground)
  return (
    <div>
    <div className={` fixed top-0 z-50 w-full`}>
    <div className={` ${navbar?'hidden':'block'}`}>
    <TopNav></TopNav>
    </div>
   <div className={` ${navbar?'bg-black duration-500':'bg-transparent'}`}>
   <Navbar></Navbar>
   </div>
    </div>
    <Outlet></Outlet>
    </div>
  );
};

export default Root;