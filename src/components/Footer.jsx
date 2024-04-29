import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Footer = () => {

  const navlist = (
    <>
      <li>
        <NavLink to={"/"} >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/alltourism"}>
          AllTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addtourism"} >
          AddTourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to={`/mylist`} >
          MyList
        </NavLink>
      </li>
      <div className="flex gap-2 md:hidden">
        <NavLink to={"/login"} >
          Login
        </NavLink>
        <NavLink to={"/register"}>
          Register
        </NavLink>
      </div>
    </>
  );
  return (
    <div className=" bg-base-200 ">
      <footer className="footer flex flex-wrap  md:justify-between  max-w-7xl mx-auto p-10 text-base-content">
        <div className=" space-y-3">
        <a className="text-2xl border-b-2 border-red-300 pb-2 font-Homemade text-black font-semibold">City <span className=" text-[#f0932b]">Tour</span></a>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full bg-red-500">Subscribe</button>
        </div>
        <div>
        <ul className=" flex justify-center gap-3">
        <li><FaFacebookSquare size={30} color="#3498db"/></li>
        <li><FaLinkedin  size={30} color="#3498db" /></li>
        <li><BsInstagram  size={30} color="#be2edd"/></li>
        </ul>
        </div>
        </div>
        <nav className=" space-y-3">
          <h6 className="footer-title">VACATION DESTINATIONS</h6>
          <a className="link link-hover">World's Best</a>
          <a className="link link-hover">Mexico</a>
          <a className="link link-hover">Caribbean</a>
          <a className="link link-hover">Central & South America</a>
          <a className="link link-hover">Europe</a>
        </nav>
        <nav>
          <h6 className="footer-title">Menu</h6>
          <ul className=" space-y-4 *:text-[#010101]">
          {navlist}
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
