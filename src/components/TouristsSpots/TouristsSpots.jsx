
import './tourism.css'
const TouristsSpots = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className=" flex flex-col md:grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-4 md:row-span-2">
       <div className="image_galary relative col-span-2 row-span-2 ">
       <img className="rounded-xl " src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Bangladesh</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">2000 locations</h3>
       </div>
       </div>
       <div className="image_galary relative col-span-full row-span-full md:col-span-1 md:row-span-1">
       <img className="rounded-xl" src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Thailand</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">1500 locations</h3>
       </div>
       </div>
       <div className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl" src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Indonesia</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">4000 locations</h3>
       </div>
       </div>
       <div className="image_galary relative col-span-2 row-span-2">
       <img className="rounded-xl" src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Malaysia</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">8000 locations</h3>
       </div>
       </div>
       <div className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl" src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Vietnam</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">3500 locations</h3>
       </div>
       </div>
       <div className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl" src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">Cambodia</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">2100 locations</h3>
       </div>
       </div>
      </div>
    </div>
  );
};

export default TouristsSpots;
