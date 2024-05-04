
import './App.css';
import SignUp from './Component/LoginSignup/SignUp';
import Login from './Component/LoginSignup/Login';
import MainDashboard from './Component/Dashboard/MainDashboard';
import { createBrowserRouter } from "react-router-dom";
import Vendor from './Component/Dashboard/Vendor';
import TechPack from './Component/Dashboard/TechPack';
import VendorData from './Component/Dashboard/VendorData';
import TechPackData from './Component/Dashboard/TechPackData';


const App =  createBrowserRouter([
  {
   path: "/",
   element: <Login/>,
  },
  { 
    path: "/SingUp",
    element: <SignUp/>,
   },
  {
    path: "/MainDashboard",
    element: <MainDashboard/>,
    children:[
      {
        path:'/',
        element:<Vendor/>
      },
      {
        path:'/TechPack',
        element:<TechPack/>
      },
      {
        path:'/datavendor',
        element:<VendorData/>
      },
      {
        path:'/datatechpack',
        element:<TechPackData/>
      },
      
    ]
   }
])
 
export default App;
