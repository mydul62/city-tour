import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { AiFillDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Wave from "react-wavify";

const Mylist = () => {
  const { user } = useContext(AuthContext);
  const [datas, setData] = useState([]);
  const useremail = user?.email;

  useEffect(() => {
    fetch(`https://tourism-server-liard.vercel.app/tourisms/email/${useremail}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [useremail]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourism-server-liard.vercel.app/tourisms/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const updatedData = datas.filter((item) => item._id !== id);
            setData(updatedData);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  };

  return (
    <>
      <div className=" ">
      <div className=" min-h-40 bg-[#0099ff] md:hidden flex">
      
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,250.7C640,256,800,256,960,245.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
      </div>

      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Cards</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Index
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Update
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                {datas.map((data, index) => (
                  <tr key={data._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{index}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {data?.Touristsportname
                ? `${data.Touristsportname.slice(0, 30)}...`
                : "No Title available."}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {data?.shortdescription
                ? `${data.shortdescription.slice(0, 50)}...`
                : "No description available."}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={`/updatedetails/${data._id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <FaPencilAlt size={15} />
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <AiFillDelete size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mylist;
