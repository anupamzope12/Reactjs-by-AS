import React from "react";
import ReactDOM  from "react-dom/client";

// const h1=React.createElement(
//     "h1",
//     {
//         id : "h1",
//     },
//     "inside h1 tag",
// );

// const h2=React.createElement(
//     "h2",
//     {
//         id : "h2",
//     },
//     "inside h2 tag",
// );

// const h3=React.createElement(
//     "h3",
//     {
//         id : "h3",
//     },
//     "inside h3 tag",
// );

// const heading = React.createElement(
//     "div",
//     {
//       className: "title",
//     },
//     [h1,h2,h3]
// );


// const heading = (
//     <div className="title">
       
//         <h3>Inside h3 tag</h3>
//         <h1>inside H1 tag</h1>
//         <h2>Inside h2 tag</h2>
//     </div>
// )

// const Heading = () =>{
//     return(
//     <div className="title">

//        <h2>Inside h2 tag</h2>
//         <h3>Inside h3 tag</h3>
//         <h1>inside H1 tag</h1>
//     </div>
//     )
// }


const Heading = () =>{
    <div className="title">

       <h2>Inside h2 tag</h2>
        <h3>Inside h3 tag</h3>
        <h1>inside H1 tag</h1>
    </div>
    
}

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<Heading/>);