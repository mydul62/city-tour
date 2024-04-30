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
import PrivateRouter from "./PrivateRouter";
import Errorpage from "../pages/Errorpage";
import UpdateDetails from "../pages/UpdateDetails";
import CetegoryCardDetails from "../pages/CetegoryCardDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
    {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://tourism-server-liard.vercel.app/tourisms')
    },
      {
      path:'/alltourism',
      element:<AllTourism></AllTourism>,
      loader:()=>fetch('https://tourism-server-liard.vercel.app/tourisms')
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
      element: <PrivateRouter><AddTourism></AddTourism></PrivateRouter> 
      },
      {
        path:'viewdetails/:id',
        element:<PrivateRouter><ViewDetails></ViewDetails></PrivateRouter> ,
        loader:({params})=>fetch(`https://tourism-server-liard.vercel.app/tourisms/${params.id}`)
        
      },
      {
      path:'/mylist',
      element:<PrivateRouter><Mylist></Mylist></PrivateRouter> 
      },
      {
      path:"/updatedetails/:id",
      element:<PrivateRouter><UpdateDetails></UpdateDetails></PrivateRouter>,
      loader:({params})=>fetch(`https://tourism-server-liard.vercel.app/tourisms/${params.id}`)
      },
      {
      path:'/categorycarddetails/:countryname',
      element:<PrivateRouter><CetegoryCardDetails></CetegoryCardDetails></PrivateRouter>,
      loader:({params})=>fetch(`https://tourism-server-liard.vercel.app/tourisms/email/country/${params.countryname}`)

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