import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

const TouristsSpots = () => {
  return (
    <div className=" max-w-7xl mx-auto my-24">
    <div className=" w-[60%] mx-auto text-center mb-12 space-y-4">
    <h2 className="text-3xl md:text-4xl font-semibold font-Roboto"> Best Tourists Spots</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veniam rem temporibus impedit iste magnam excepturi asperiores molestiae doloribus consequuntur, debitis cum porro et!</p>
    </div>
     <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    <div className="card  glass">
  <figure><img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car!"/></figure>
  <div className="card-body  space-y-2">
    <div className=" flex justify-between ">
    <h2 className="flex items-center  gap-1 text-[#101010]"><FaLocationDot />
Sundarban</h2>
    <h2 className=" flex items-center "><IoMdTime />
10 hours</h2>
    </div>
    <h2 className=" text-2xl font-Roboto font-medium">Bandarban A full-Day Of Advanture</h2>
   <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum.
   </div>
   <div className=" flex justify-between items-center ">
   <div>
   4.0k
   </div>
   <div>
   <button className=" btn">View details</button>
   </div>
   </div>
  </div>
</div>
   {/* ___________________________ */}
    <div className="card  glass">
  <figure><img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car!"/></figure>
  <div className="card-body space-y-2">
    <div className=" flex justify-between ">
    <h2 className="flex items-center  gap-1 text-[#101010]"><FaLocationDot />
Sundarban</h2>
    <h2 className=" flex items-center "><IoMdTime />
10 hours</h2>
    </div>
    <h2 className=" text-2xl font-Roboto font-medium">Bandarban A full-Day Of Advanture</h2>
   <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum.
   </div>
   <div className=" flex justify-between items-center ">
   <div>
   4.0k
   </div>
   <div>
   <button className=" btn">View details</button>
   </div>
   </div>
  </div>
</div>
   {/* ___________________________ */}
    <div className="card  glass">
  <figure><img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car!"/></figure>
  <div className="card-body space-y-2">
    <div className=" flex justify-between ">
    <h2 className="flex items-center  gap-1 text-[#101010]"><FaLocationDot />
Sundarban</h2>
    <h2 className=" flex items-center "><IoMdTime />
10 hours</h2>
    </div>
    <h2 className=" text-2xl font-Roboto font-medium">Bandarban A full-Day Of Advanture</h2>
   <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum.
   </div>
   <div className=" flex justify-between items-center ">
   <div>
   4.0k
   </div>
   <div>
   <button className=" btn">View details</button>
   </div>
   </div>
  </div>
</div>
   {/* ___________________________ */}
    <div className="card  glass">
  <figure><img src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car!"/></figure>
  <div className="card-body space-y-2">
    <div className=" flex justify-between ">
    <h2 className="flex items-center  gap-1 text-[#101010]"><FaLocationDot />
Sundarban</h2>
    <h2 className=" flex items-center "><IoMdTime />
10 hours</h2>
    </div>
    <h2 className=" text-2xl font-Roboto font-medium">Bandarban A full-Day Of Advanture</h2>
   <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsum.
   </div>
   <div className=" flex justify-between items-center ">
   <div>
   4.0k
   </div>
   <div>
   <button className=" btn">View details</button>
   </div>
   </div>
  </div>
</div>
   {/* ___________________________ */}
    </div>
      
    </div>
  );
};

export default TouristsSpots;