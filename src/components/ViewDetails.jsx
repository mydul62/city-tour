import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const loadedData= useLoaderData()
  console.log(loadedData);
  return (
    <div className=" max-w-7xl mx-auto my-44 ">
      <div className="flex flex-col md:grid gap-2 md:grid-cols-4 grid-rows-2">
      <div className=" col-span-2 row-span-2 ">
      <img className=" w-full  object-fill rounded-xl" src={loadedData?.photoURL1} alt="" />
      </div>
      <div className=" col-span-1 row-span-1">
      <img className=" w-full object-fill rounded-xl" src={loadedData?.photoURL2} alt="" />
      </div>
      <div className=" col-span-1 row-span-1 ">
      <img className=" w-full object-fill  rounded-xl" src={loadedData?.photoURL3} alt="" />
      </div>
      <div className=" col-span-1 row-span-1">
      <img className=" w-full object-fill  rounded-xl" src={loadedData?.photoURL4} alt="" />
      </div>
      <div className=" col-span-1 row-span-1">
      <img className=" w-full object-fill   rounded-xl" src={loadedData?.photoURL4} alt="" /> 
      </div>
      </div>
    </div>
  );
};

export default ViewDetails;