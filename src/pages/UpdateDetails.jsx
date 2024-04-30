import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import toast from "react-hot-toast/headless";

const UpdateDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
  
    // Get form data
    const formData = new FormData(form);
  
    // Convert form data to JSON
    const addInfo = {};
    formData.forEach((value, key) => {
      addInfo[key] = value;
    });
    addInfo.useremail = user.email;
    addInfo.username = user.name;
  
    fetch(`http://localhost:5000/tourisms/${data._id}`, {
      method: "PUT", // Change method to PUT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update tourist sport.");
        }
        return res.json();
      })
      .then((data) => {
        alert("Updated successfully");
       console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while updating. Please try again later.");
      });
  };

  return (
    <>
      <div className="">
        <img
          className=" w-full h-[600px]"
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>

      <div className=" max-w-7xl mx-auto -mt-80 mb-16 flex items-center">
        <div className="space-y-6 w-full md:w-2/3 mx-auto bg-slate-300  rounded-xl ">
          <div className=" bg-green-600 h-10 rounded-b-lg"></div>
          <div className="p-8 pt-0 ">
            <div className=" py-12">
              <h2 className=" text-center text-[#010101] font-Roboto text-3xl ">
                Add Tourist Sport
              </h2>
            </div>
            <form onSubmit={handleUpdateProduct} className=" space-y-4">
              <div className=" flex justify-center gap-3">
                <input
                  defaultValue={data.photoURL1}
                  type="text"
                  placeholder="photoURL1"
                  name="photoURL1"
                  className="input input-bordered input-xl w-full "
                />
              </div>
             
              <div className=" flex justify-center gap-3">
                <input
                  type="text"
                  placeholder="Ratings"
                  defaultValue={data.Rating}
                  name="Rating"
                  className="input input-bordered input-xl w-full "
                />
                <input
                  type="text"
                  placeholder="Tourist sport name"
                  defaultValue={data.Touristsportname}
                  name="Touristsportname"
                  className="input input-bordered input-xl w-full "
                />
              </div>
              <div className=" flex justify-center gap-3">
                <input
                  type="text"
                  defaultValue={data.countryname}
                  placeholder="Country name"
                  name="countryname"
                  className="input input-bordered input-xl w-full "
                />
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  defaultValue={data.location}
                  className="input input-bordered input-xl w-full "
                />
              </div>
              <div className=" flex justify-center gap-3">
                <input
                  type="text"
                  placeholder="Total Visitors PerYear"
                  defaultValue={data.totalVisitorsPerYear}
                  name="totalVisitorsPerYear"
                  className="input input-bordered input-xl w-full "
                />

                <input
                  type="text"
                  placeholder="Average cost"
                  defaultValue={data.averagecost}
                  name="averagecost"
                  className="input input-bordered input-xl w-full "
                />
              </div>
              <div className=" flex justify-center gap-3">
                <input
                  type="text"
                  placeholder="Seasonality"
                  defaultValue={data.seasonality}
                  name="seasonality"
                  className="input input-bordered input-xl w-full "
                />
                <input
                  type="text"
                  placeholder="Travel time"
                  defaultValue={data.traveltime}
                  name="traveltime"
                  className="input input-bordered input-xl w-full "
                />
              </div>
              <div>
                <input
                  type="text"
                  defaultValue={data.shortdescription}
                  placeholder="Short description"
                  name="shortdescription"
                  className="input input-bordered input-lg w-full "
                />
              </div>
              <div>
                <input
                  type="submit"
                  value={"Update Now"}
                  className="input text-white font-Roboto text-xl bg-yellow-800 input-bordered input-xl w-full "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDetails;
