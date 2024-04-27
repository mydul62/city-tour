import AllTourism from "../pages/AllTourism";
import Login from "../pages/Login";
import Root from "../root/Root";
import Register from "../pages/Register"
import {
  createBrowserRouter,
} from "react-router-dom";
import AddTourism from "../pages/AddTourism";
import Home from "../pages/Home";
import ViewDetails from "../components/ViewDetails";
import Mylist from "../pages/Mylist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/tourisms')
    },
      {
      path:'/alltourism',
      element:<AllTourism></AllTourism>,
      loader:()=>fetch('http://localhost:5000/tourisms')
      },
      {
      path:'/login',
      element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
      path:'/addtourism',
      element:<AddTourism></AddTourism>
      },
      {
        path:'viewdetails/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/tourisms/${params.id}`)
        
      },
      {
      path:'/mylist',
      element:<Mylist></Mylist>
      }
    ]
  },
]);

const Routes = () => {
  return (
    <div>
      
    </div>
  );
};

export default Routes;