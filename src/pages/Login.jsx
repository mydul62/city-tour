import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";

const Login = () => {
const {signInPass,googleSignIn,githubSignIn}=useContext(AuthContext)

const handleOnLogin=(e)=>{
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  signInPass(email,password)
  .then(Result=>{
    alert("logined")
    }).then(error=>{
    console.log(error.message)})
}

const handleGoogleSignin = ()=>{
  googleSignIn()
  .then(Result=>{
    alert("logined")
    }).catch(error=>{
    console.log(error.message)})
  
}
const handleGithubSignin = ()=>{
  githubSignIn()
  .then(Result=>{
    alert("logined")
    }).catch(error=>{
    console.log(error.message)})
  
}
  return (
  <div className=" bg-[url('https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-left min-h-screen">
    <div className=" max-w-7xl w-[90%] mx-auto min-h-[calc(100vh-84px)] flex  justify-center items-center  ">
    <div className=" w-full md:w-2/6 mx-auto shadow-sm ring-1 ring-black rounded-xl md:mr-4 bg-[#eaeaea2d] ring-opacity-5 p-6">
      <h2 className=" text-center text-2xl font-semibold py-4">
        Account Login
      </h2>
      <form  onSubmit={handleOnLogin} className="flex flex-col gap-6 " action="">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className=" bg-[#eaeaea] opacity-75 px-3 py-2 outline-none shadow-inner  rounded-[5px]  w-full "
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-[#eaeaea] opacity-75 px-3 py-2 outline-none shadow-inner  rounded-[5px]  w-full "
        />
        <input 
          className=" border hover:bg-slate-400 hover:text-black border-[#ccc] px-3 py-2 outline-none shadow-inner  rounded-[5px]  w-full bg-[#010101] text-white"
          type="submit"
          value={"LOGIN"}
        />
      </form>
      <h3 className="flex items-center w-full py-4">
        <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
        <span className="mx-3 text-lg font-medium">or</span>
        <span className="flex-grow bg-gray-200 rounded h-[1px]"></span>
      </h3>
      <div className=" flex justify-between gap-3">
      <button onClick={handleGithubSignin} className=" flex items-center justify-center gap-2 w-full rounded-sm text-white py-1 bg-[#0a3d62]"><FaGithub size={20} />
<span>Gitgub</span></button>
      <button onClick={handleGoogleSignin} className="  flex items-center justify-center gap-2 w-full rounded-sm text-white py-1 bg-[#ff6b6b]"><FaGoogle  size={20}/>
<span>Google</span></button>
      </div>
      
     <div>
     <h2 className="  w-full mt-6 text-center block" to={'/login'}>Don't have an account <Link to={'/register'} className=" text-green-500 underline">Resister</Link> </h2>
     </div>
    </div>
  </div>
  </div>
  );
};

export default Login;