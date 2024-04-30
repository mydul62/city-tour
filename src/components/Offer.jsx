import { FaLocationDot } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { FaCcAmazonPay } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Offer = () => {
  return (
    <div className=" bg-[#f1f6ff] " >
    <div className=" max-w-7xl mx-auto  py-16  ">
    <div className=" flex justify-center items-center py-16">
    <h4 className="text-xl font-bold ">Make you happy</h4>
    <h2 className=" text-2xl text-[#010101] font-semibold ">How can help your jopurney</h2>
    </div>
      <div className=" flex flex-wrap md:grid grid-cols-3 justify-center gap-8">
      <div data-aos="fade-right" data-aos-duration="1000" className=" flex justify-center flex-col w-65 text-center bg-white space-y-6 py-12 px-6">
      <div className=" flex justify-center">
      <FaLocationDot size={40} color="green" />
      </div>
      <h3 className="text-xl font-bold text-[#010101] hover:text-green-500">Find your travel destination</h3>
      <p className="text-sm text-[#9f9898] ">Find your travel destination, because we have covered all regions in the wold</p>
      </div>
    
  
      <div className=" flex justify-center flex-col w-65 text-center bg-white space-y-6 py-12 px-6">
      <div className=" flex justify-center">
      <IoTicketSharp size={40} color="green" />
      </div>
      <h3 className="text-xl font-bold text-[#010101] hover:text-green-500">Book a ticket
</h3>
      <p className="text-sm text-[#9f9898] ">After you find the trip you want to go to, you can directly order the ticket.</p>
      </div>
    
  
      <div data-aos="fade-left" data-aos-duration="1000"  className=" flex justify-center flex-col w-65 text-center bg-white space-y-6 py-12 px-6">
      <div className=" flex justify-center">
      <FaCcAmazonPay size={40} color="green" />
      </div>
      <h3 className="text-xl font-bold text-[#010101] hover:text-green-500">Pay and go to destination</h3>
      <p className="text-sm text-[#9f9898] ">After you pay you can immediately enjoy the trip to the destination.</p>
      </div>
    
  
      </div>
    </div>
    </div>
  );
};

export default Offer;