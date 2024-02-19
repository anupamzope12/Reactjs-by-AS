/*
*
*
*
* Created Server
* HRM = Hot Module Replacing // parcel will keep a track of all file updating
* File Watcher Algorithm - C++  
* BUNDLING
* MINIFY
* CLEANINIG OUR CODE
* Dev and Production Build
* Super Fast build algorithm
* Image Optimization
* Caching while development 
* Compresssion
* Compatiable with older version of browser
* HTTPS on dev
* PORT Number
* Consistent Hashing Algorithm
* Zero Config
* 
* Transitive Dependencies
*
*
*/


import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1 from parcel"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );

  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(container);

