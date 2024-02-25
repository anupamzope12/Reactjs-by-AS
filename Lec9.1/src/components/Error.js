// import Header from "./Header";
// import Footer from "./Footer";

import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(

        <div>
            {/* <Header/> */}
            <h1>Oops!!! </h1>
            <h2>Something went Wrong</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
            {/* <Footer/> */}
        </div>
    )
}
export default Error;