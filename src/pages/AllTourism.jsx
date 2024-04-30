import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllTourism = () => {
const [datas,setData]=useState([])
  const data = useLoaderData();
  console.log(datas);
  useEffect(()=>{
    setData(data)
  },[data])

  const handleSort = (event) => {
    let sortedCardData;
    const targetValue = parseInt(event.target.value);
    console.log(targetValue);
    switch (targetValue) {
      case 1:
        sortedCardData = [...datas].sort((b,a) => b.averagecost - a.averagecost);
        setData(sortedCardData)
        break;
      case 2:
        sortedCardData = [...datas].sort((a, b) => b.averagecost - a.averagecost);
      setData(sortedCardData);
      break;
    }
  };

  return (
    <>
      <div></div>
      <div className="">
        <img
          className=" w-full h-[500px]"
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className=" max-w-7xl w-[95%] mx-auto ">
        <div className=" pt-16">
          <h2 className=" text-center text-3xl">
            Explore Our All Tourist Point
          </h2>
        </div>
        <div>
          <div className="flex justify-center  py-9">
            <select
              onChange={handleSort}
              className="select select-info bg-[#23BE0A] border-none text-white font-bold  w-[200px]"
            >
              <option selected disabled defaultValue>
                Sort By
              </option>
              <option value={1}>Price(Low to High)</option>
              <option value={2}>Price(High to Low)</option>
            </select>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {datas &&
            datas.slice(1).map((data) => (
              <div key={data._id} className=" shadow-md rounded-xl p-3 bg-[#eeeeee0d]">
                <figure className="overflow-hidden rounded-t-md">
                  <img
                    src={data.photoURL1}
                    alt="car!"
                    className="w-full h-50 object-cover rounded-t-md"
                  />
                </figure>
                <div className="p-4 space-y-2 ">
                  <div className="flex justify-between items-center">
                    
                    <h2 className="flex items-center">
                      <IoMdTime /> {data?.traveltime}
                    </h2>
                    <h2 className="flex items-center">
                      <IoMdTime /> {data?.location}
                    </h2>
                  </div>
                  <h2 className="text-2xl font-Roboto font-medium">
                    {data.Touristsportname}
                  </h2>
                  <h2 className="text-[18px] font-Roboto">
                    Seasonality:{data.seasonality}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h2 className=" text-[16px] font-medium font-Roboto ">
                        {data?.averagecost}k
                      </h2>
                    </div>
                    <div className=" flex items-center gap-1">
                      visitor :<h2>{data.totalVisitorsPerYear}/Y</h2>
                    </div>
                  </div>
                  <Link
                    to={`/viewdetails/${data?._id}`}
                    className="btn btn-sm bg-[#4CAF50] hover:bg-[#43A047] text-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllTourism;
