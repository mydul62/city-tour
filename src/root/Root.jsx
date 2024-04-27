import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Root = () => {

  return (
    <div className="">
    <div className={` fixed top-0 z-50 w-full`}>
   <div >
   <Navbar></Navbar>
   </div>
    </div>
    <Outlet></Outlet>
    </div>
  );
};

export default Root;