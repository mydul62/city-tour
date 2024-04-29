import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const AllTourism = () => {
const datas = useLoaderData();
  return (
   <>
   <div className="">
   <img className=" w-full h-[500px]" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   </div>
    <div className=" max-w-7xl w-[95%] mx-auto ">
     <div className=" py-16">
     <h2 className=" text-center text-3xl">Explore Our All Tourist Point</h2>
     </div>
     <div>
     
     </div>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {
        datas && datas.slice(1).map(data=>(
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
            <h2 className="text-[18px] font-Roboto">
        {data?.shortdescription ? `${data.shortdescription.slice(0, 70)}...` : 'No description available.'}
      </h2>
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
   </>
  );
};

export default AllTourism;