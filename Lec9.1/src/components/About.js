// import Header from "./Header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const About = ()=>{

    return(
        <div>
            {/* <Header/> */}
            <h1>About Us Page</h1>
            <p>This is a Namaste React Live Course Chapter 07 - Finding the Path</p>
            {/* <Footer/> */}
            <Outlet/>
        </div>
    )
}

export default About;