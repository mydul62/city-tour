
import { useEffect, useState } from 'react';
import './tourism.css'
import { Link } from 'react-router-dom';
const TouristsSpots = () => {
const [datas,setData]=useState({})

useEffect(() => {
  const loadData = async () => {
      const response = await fetch('http://localhost:5000/country/countrys');
      const data = await response.json();
      setData(data);
    } 

  loadData();
}, []);

  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className=" flex flex-col md:grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-4 md:row-span-2">
       <Link to={`/categorycarddetails/${datas[0]?.countryname}`} className="image_galary relative col-span-2 row-span-2 ">
       <img className="rounded-xl " src={datas[0]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[0]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[1]?.locations}</h3>
       </div>
       </Link>
       <Link to={`/categorycarddetails/${datas[1]?.countryname}`}  className="image_galary relative col-span-full row-span-full md:col-span-1 md:row-span-1">
       <img className="rounded-xl " src={datas[1]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[2]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[2]?.locations}</h3>
       </div>
       </Link>
       <Link to={`/categorycarddetails/${datas[2]?.countryname}`} className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl " src={datas[3]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[3]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[3]?.locations}</h3>
       </div>
       </Link>
       <Link to={`/categorycarddetails/${datas[3]?.countryname}`} className="image_galary relative col-span-2 row-span-2">
       <img className="rounded-xl w-full " src={datas[3]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[4]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[4]?.locations}</h3>
       </div>
       </Link>
       <Link to={`/categorycarddetails/${datas[4]?.countryname}`} className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl " src={datas[4]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[5]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[5]?.locations}</h3>
       </div>
       </Link>
       <Link to={`/categorycarddetails/${datas[5]?.countryname}`} className="image_galary relative col-span-1 row-span-1">
       <img className="rounded-xl " src={datas[5]?.photoURL} alt="" />
       <div className="absolute right-10 bottom-0 text-white ">
       <h2 className=" text-2xl mb-2 font-Roboto font-bold">{datas[6]?.countryname}</h2>
       <h3 className="offer hidden mb-2 font-bold font-Roboto ">{datas[6]?.locations}</h3>
       </div>
       </Link>
      </div>
    </div>
  );
};

export default TouristsSpots;
