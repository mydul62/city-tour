import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { auth } from "../Firebase/firebase-config";
import { updateProfile } from "firebase/auth"; // Make sure to import updateProfile from firebase/auth

const Registere = () => {
  const { signUpPass, setUser } = useContext(AuthContext);
  const [passError,setPassError]=useState('')

  const handleSignUpPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
    if(!passwordPattern.test(password)){
      setPassError('You must put one uppercase,lowecase and ,im 6 digit')
    return;
    }
   signUpPass(email, password)
  .then(result => {
    // Update user profile
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
    .then(() => {
      // Profile update successful
      setUser(auth.currentUser);
      alert("Registered and profile updated successfully!");
    })
    .catch(error => {
      // Handle profile update error
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile. Please try again later.");
    });
    console.log(result);
  })
  .catch(error => {
    console.error("Error signing up:", error);
    alert("An error occurred while signing up. Please try again later.");
  });
  };
  

  return (
    <div className=" bg-[url('https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-left min-h-screen">
    <div className=" max-w-7xl mx-auto min-h-[calc(100vh-84px)] flex   justify-center items-center">
    <div className=" w-full md:w-2/6 mx-auto shadow-sm ring-1 mt-24 border-2 border-[#f0942b4b]  ring-black rounded-xl md:mr-4 bg-[#eaeaea2d] ring-opacity-5 p-6">
        <h2 className=" text-center text-2xl font-semibold py-4">
          Account Register
        </h2>
        <form onSubmit={handleSignUpPass} className="flex flex-col gap-6 " action="">
          <input
            type="text"
            placeholder="Your Name"
            name="name" required
            className="border border-[#ccc] outline-none shadow-inner  px-3 py-2 rounded-xl  w-full "
          />
          <input
            type="email" required
            placeholder="Your Email"
            name="email"
            className="border border-[#bbb] shadow-inner px-3 py-2  outline-none rounded-xl   w-full "
          />
         <div>
         <input
            type="password" required
            placeholder="Password"
            name="password"
            className="border border-[#ccc] px-3 py-2 outline-none shadow-inner  rounded-xl   w-full "
          />
          <p>{passError&& passError}</p>
         </div>
          <input
            type="text"
            name="photoURL" required
            placeholder="photoURL"
            className="border border-[#ccc] px-3 py-2 outline-none shadow-inner  rounded-xl   w-full "
          />
          <input  
            className="btn bg-[#010101] text-white outline-none border shadow-inner  border-[#ccc] px-3 py-2 rounded-xl   w-full "
            type="submit"
            value={"REGISTER"}
          />
        </form>
        {/* <h3 className="flex items-center w-full py-4">
          <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
          <span className="mx-3 text-lg font-medium">or</span>
          <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
        </h3> */}
        {/* <div className=" flex justify-between gap-3">
          <button className=" flex items-center justify-center gap-2 w-full rounded-sm text-white py-1 bg-[#0a3d62]"><FaGithub size={20} />
            <span>Gitgub</span></button>
          <button onClick={handleSinupGoogle} className="  flex items-center justify-center gap-2 w-full rounded-sm text-white py-1 bg-[#ff6b6b]"><FaGoogle  size={20}/>
            <span>Google</span></button>
        </div> */}
        <div>
          <Link className=" btn border border-[#ccc] px-3 py-2 rounded-sm  w-full   my-6 bg-[#ff9f43]" to={'/login'}>Login with password</Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Registere;
