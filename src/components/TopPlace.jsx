import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

const TopPlace = ({datas}) => {
console.log(datas);
  return (
    <div className=" max-w-7xl mx-auto my-24">
      <div className=" w-[90%] space-y-4 md:w-[60%] mx-auto pb-16 text-center spy3">
      <h2 className="text-3xl  font-bold font-Roboto ">PARIS <span className=" text-[#e04f67]">TOP</span> HOTELS</h2>
      <p className=" text-xl ">Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {
        datas && datas.slice(0,6).map(data=>(
          <div key={data._id} className=" shadow-md rounded-xl p-4 bg-[#eeeeee45]">
          <figure className="overflow-hidden rounded-t-md">
            <img src={data.photoURL1} alt="car!" className="w-full h-50 rounded-xl  object-cover rounded-t-md" />
          </figure>
          <div className="p-4 space-y-2 ">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-1 text-[#101010]"><FaLocationDot /> {data?.location}</h2>
              <h2 className="flex items-center"><IoMdTime /> {data?.traveltime}</h2>
            </div>
            <h2 className="text-2xl font-Roboto font-medium">{data.Touristsportname}</h2>
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
  );
};

export default TopPlace;