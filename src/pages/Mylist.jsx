import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { IoMdTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Mylist = () => {
const {user}=useContext(AuthContext)
const [datas,setData]=useState([])
const useremail = user?.email;
 useEffect(()=>{
   fetch(`http://localhost:5000/tourisms/email/${useremail}`)
   .then(res=>res.json())
   .then(data=>setData(data))
   
 },[useremail])
 console.log(datas);
  return (
  <>
  <div className="">
   <img className=" w-full h-[450px]" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   </div>
   <div>
      <div className=" my-16">
      <h2 className=" text-center text-3xl text-[#010101] font-semibold">My Collections</h2>
      </div>
      <div className=" max-w-7xl mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        datas && datas.slice(0,7).map(data=>(
          <div key={data._id} className=" shadow-md rounded-xl">
          <figure className="overflow-hidden rounded-t-md">
            <img src={data.photoURL1} alt="car!" className="w-full h-50 object-cover rounded-t-md" />
          </figure>
          <div className="p-4 space-y-2 ">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-1 text-[#101010]"><FaLocationDot /> {data?.location}</h2>
              <h2 className="flex items-center"><IoMdTime /> {data?.traveltime}</h2>
            </div>
            <h2 className="text-2xl font-Roboto font-medium">Sajek valiie</h2>
            <h2 className="text-[18px] font-Roboto ">{data?.shortdescription.slice(0,90)}</h2>
            <div className="flex justify-between items-center">
              <div className="text-[#eee]">
              <h2 className="text-sm font-Roboto ">{data?.Rating}k</h2>
              </div>
              <Link to={`/viewdetails/${data?._id}`} className="btn btn-sm bg-[#4CAF50] hover:bg-[#43A047] text-white">View details</Link>
            </div>
          </div>
        </div>
        ))
      }
     
      </div>
      </div>
    </div>
  </>
 
  );
};

export default Mylist;