import { useContext} from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import Navbar from "../components/Navbar/Navbar";

const AddTourism = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL1 = form.photoURL1.value;
    const photoURL2 = form.photoURL2.value;
    const photoURL3 = form.photoURL3.value;
    const photoURL4 = form.photoURL4.value;
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
      photoURL2,
      photoURL3,
      photoURL4,
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

    fetch('http://localhost:5000/tourisms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addInfo)
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
        alert('Added successfully');
      } else {
        alert('Failed to add coffee. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  };

  return (
  <>
   <div className="">
   <img className=" w-full h-[600px]" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
   </div>
 
    <div className=" max-w-7xl mx-auto -mt-80 flex items-center">
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
                <input
                type="text"
                placeholder="photoURL2"
                name="photoURL2"
                className="input input-bordered input-xl w-full "
              />
            </div>
            <div className=" flex justify-center gap-3">
            <input
                type="text"
                placeholder="photoURL3"
                name="photoURL3"
                className="input input-bordered input-xl w-full "
              />
               <input
                type="text"
                placeholder="photoURL4"
                name="photoURL4"
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
