import { useLoaderData } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ViewDetails = () => {
  const loadedData = useLoaderData();
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
     <div className=" mb-16">
     <div className="">
        <img
          className=" w-full h-[350px]"
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className=" max-w-7xl mx-auto my-16 ">
        <div className="flex  flex-col md:grid gap-8 md:grid-cols-12 ">
          <div className=" col-span-7 ">
            <img
              className=" w-full h-full  object-fill rounded-xl"
              src={loadedData?.photoURL1}
              alt=""
            />
          </div>
          <div className="col-span-5">
            <div className=" flex  justify-between">
              <div>
                <h2 className="font-Roboto font-bold text-2xl">{loadedData?.Touristsportname}</h2>
                <h3 className="text-xl text-[#676060]">{loadedData?.location}/{loadedData?.countryname}</h3>
              </div>
              <div>
                <h2 className=" text-xl font-Roboto ">{loadedData?.averagecost}tk/night</h2>
              </div>
            </div>
            <div className="border p-4 my-8 rounded-xl">
              <h2 className=" text-xl font-Roboto font-medium border inline-block px-3 rounded-full my-2 bg-[#eaeaea]">Overview</h2>
              <p className=" text-[17px]  font-Roboto font-medium text-[#736e6e]">
               {loadedData?.shortdescription}
              </p>
            </div>
            <div className=" space-y-4">
            <h2 className=" text-xl font-semibold">Details</h2>
            <h3 className=" text-[16px] font-Roboto ">Seasonality:{loadedData?.seasonality}</h3>
            <h3 className=" text-[16px] font-Roboto "> Visitors : {loadedData?.totalVisitorsPerYear}/year</h3>
            <h3 className=" text-[16px] font-Roboto ">Travel Time : {loadedData?.traveltime}</h3>
            <h3 className=" text-[16px] font-Roboto "> Rating :{loadedData?.Rating}</h3>
            </div>
            <div className=" my-4">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default ViewDetails;
