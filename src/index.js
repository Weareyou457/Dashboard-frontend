      import ReactDOM from 'react-dom/client'
      import React from 'react'
      import './index.css'
    

      import "./App.css"
      import { RouterProvider, createBrowserRouter } from 'react-router-dom'
      import Login from './Component/LoginSignup/Login'
      import SignUp from './Component/LoginSignup/SignUp'
    
      import Vendor from './Component/Dashboard/Vendor'
      import TechPack from './Component/Dashboard/TechPack'
import Sidebar from './Component/Dashboard/Sidebar'
import VendorData from './Component/Dashboard/VendorData'
import TechPackData from './Component/Dashboard/TechPackData'


      const router = createBrowserRouter([
            {
                  path: '',
                  element: <Login />,
                },
                {
                  path: '/SignUp',
                  element: <SignUp />,
                },
                
                    {
                      path: "/main",
                      element: <Sidebar />,
                      children: [
                        {
                          path: "Vendor",
                          element: <Vendor />
                        },
                        {
                          path: "TechPack",
                          element: <TechPack />
                        },
                        {
                          path:"datavendor",
                          element:<VendorData/>
                        },
                        {
                          path:"dataTechPack",
                          element:<TechPackData/>
                        }
                      ]
                    }
                 
            ])
            



      ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
            <RouterProvider router={router} />
            </React.StrictMode>,
      )