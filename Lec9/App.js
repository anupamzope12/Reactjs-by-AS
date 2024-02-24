import React from "react"
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaruntMenu";
const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            {   /* 
            *
                */ 
            }
            <Outlet/>
            <Footer/>
        </div>
    )
}
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>, 
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element:<Body/> ,
            },

            {
                path:"/about",
                element:<About/> ,
            },
            {
                path:"/contact",
                element:<Contact/> ,
            }, 
            {
                path: "retaurant/:id",
                element: <RestaurantMenu />,
            },
            
        ]
    },
    {
        path:"/about",
        element:<About/> ,
    } 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)