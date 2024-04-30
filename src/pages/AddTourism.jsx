import { useContext} from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import Navbar from "../components/Navbar/Navbar";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddTourism = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL1 = form.photoURL1.value;
    const Rating = form.Rating.value;
    const Touristsportname = form.Touristsportname.value;
    const countryname = form.countryname.value;
    const location = form.location.value;
    const shortdescription = form.shortdescription.value;
    const averagecost = form.averagecost.value;
    const seasonality = form.seasonality.value;
    const traveltime = form.traveltime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const useremail = user.email;
    const username = user.name;
    const addInfo = {
      photoURL1,
      Rating,
      Touristsportname,
      countryname,
      location,
      shortdescription,
      averagecost,
      seasonality,
      traveltime,
      totalVisitorsPerYear,
      username,
      useremail,
    };

    fetch('https://tourism-server-liard.vercel.app/tourisms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Card has been Adeded",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        toast.error('Failed to add coffee. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    });
  };

  return (
  <>
   <div className="">
   <img className=" w-full h-[600px]" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
          <form onSubmit={handleAddProduct} className=" space-y-4">
            <div className=" flex justify-center gap-3">
              <input
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
                name="Rating"
                className="input input-bordered input-xl w-full "
              />
              <input
                type="text"
                placeholder="Tourist sport name"
                name="Touristsportname"
                className="input input-bordered input-xl w-full "
              />
            </div>
            <div className=" flex justify-center gap-3">
              <input
                type="text"
                placeholder="Country name"
                name="countryname"
                className="input input-bordered input-xl w-full "
              />
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="input input-bordered input-xl w-full "
              />
            </div>
            <div className=" flex justify-center gap-3">
              <input
                type="text"
                placeholder="Total Visitors PerYear"
                name="totalVisitorsPerYear"
                className="input input-bordered input-xl w-full "
              />

              <input
                type="text"
                placeholder="Average cost"
                name="averagecost"
                className="input input-bordered input-xl w-full "
              />
            </div>
            <div className=" flex justify-center gap-3">
              <input
                type="text"
                placeholder="Seasonality"
                name="seasonality"
                className="input input-bordered input-xl w-full "
              />
              <input
                type="text"
                placeholder="Travel time"
                name="traveltime"
                className="input input-bordered input-xl w-full "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Short description"
                name="shortdescription"
                className="input input-bordered input-lg w-full "
              />
            </div>
            <div>
              <input
                type="submit"
                value={"Add"}
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

export default AddTourism;
