import { CFormInput } from "@coreui/react";
import { useContext } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Link } from "react-router-dom";

const TopNav = () => {
const {user,LogOut}=useContext(AuthContext);
const handleLogOut = () => {
  LogOut();
};
  return (
    <div className=" border-b border-[#72aa8afe]">
    <div className=" max-w-7xl mx-auto flex justify-between p-2 text-white font-bold">
      <div>
      <h3 className=" text-[11px]">01302104188</h3>
      </div>
      <div className=" ">
      {
      user?<h3 className=" border-x border-green-500 px-2" onClick={handleLogOut}>Logout</h3>:<div className="flex gap-2 text-sm">
      <Link to={'/login'} className=" border-r-2 px-2 flex items-center text-[11px] gap-1"><FaArrowRightToBracket />
Sign in</Link>
      <Link to={'/register'} className=" border-r-2 text-[11px] px-2 flex items-center gap-1"><FaArrowRightToBracket />
Sign Up</Link>
      </div>
      }
      </div>
    </div>
    </div>
  );
};

export default TopNav;