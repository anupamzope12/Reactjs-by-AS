import React, { lazy,Suspense } from "react"
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaruntMenu";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
// import Inst amart from "./src/components/Instamart";

//chunk9ing
//dynamic bundling
//lazy loading
//code splitting
//on demand loading
//Dynamic import

const Instamart = lazy(()=> import("./src/components/Instamart"))
const About = lazy(()=>import("./src/components/About"))
const AppLayout = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const appRouter = createBrowserRouter([
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
                element: 
                <Suspense fallback={<h1>Loading....</h1>}>
                    <About/>
                </Suspense> ,
                children:[
                    {
                        path:"profile", //localhost : 1234/about/profile
                        element:<Profile/>
                    },
                ]
            },
            {
                path:"/contact",
                element:<Contact/> ,
            }, 
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/instamart",
                element:<Suspense fallback ={<Shimmer/>}><Instamart/> </Suspense>
            }
        ]
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)