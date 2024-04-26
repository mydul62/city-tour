import AllTourism from "../pages/AllTourism";
import Login from "../pages/Login";
import Root from "../root/Root";
import Register from "../pages/Register"
import {
  createBrowserRouter,
} from "react-router-dom";
import AddTourism from "../pages/AddTourism";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
        path:'/',
        element:<Home></Home>
    },
      {
      path:'/alltourism',
      element:<AllTourism></AllTourism>
      },
      {
      path:'/login',
      element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Register></Register>
      },
      {
      path:'/addtourism',
      element:<AddTourism></AddTourism>
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