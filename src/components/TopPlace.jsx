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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {
        datas && datas.slice(0,8).map(data=>(
          <div key={data._id} className="shadow-lg rounded-lg overflow-hidden bg-white">
          <figure className="h-60 overflow-hidden">
            <img
              src={data.photoURL1}
              alt="Tour"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </figure>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="flex items-center gap-1 text-[#101010] text-base">
                <FaLocationDot className="text-[#e04f67]" /> {data?.location}
              </h2>
              <h2 className="flex items-center text-base">
                <IoMdTime className="text-[#e04f67]" /> {data?.traveltime}
              </h2>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {data.Touristsportname}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {data?.shortdescription
                ? `${data.shortdescription.slice(0, 70)}...`
                : "No description available."}
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700">
                <h2 className="text-sm font-bold">{data?.Rating}k</h2>
              </div>
              <Link
                to={`/viewdetails/${data?._id}`}
                className="btn bg-[#4CAF50] hover:bg-[#43A047] text-white text-sm font-bold py-2 px-4 rounded-md"
              >
                View Details
              </Link>
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