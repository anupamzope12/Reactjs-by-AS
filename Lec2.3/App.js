import React from "react";
import ReactDOM  from "react-dom/client";

  //JSX ?? 
  // JSX => react.ceateElement => Object =>HTML(DOM)
  // this conversionJSX => react.ceateElement is done by babel

  // const heading = (    // This React Element
  //   <h2 id="title" key="h2">  
  //      Namaste React 
  //   </h2> 
  //   )

  const Title = () => (  

  <h2 id="title" key="h2">  
     Namaste React 
  </h2>

  )

  
    // <h2 id="title" key="h2"> Namaste React </h2> jsx expression
    
    //React Component
    // - Functional - NEW - I will use this most of the time
    // - Class Based Component - OLD - we will lern this tool

// Name of component should be start with capital letter - it's not mandatory

const xyz=45;
    const HeaderComponent1 = () =>{    // This is a functiuonal component
      return(
        <div>
          <Title/>
          {/* { xyz } // we can write any java script code inside this curly braces */}
          {Title()}
        <h1>Namaste React Functional Component</h1>
          <h2>This is a H2 tag</h2>
        </div>
      )
    }
    const HeaderComponent2 = () =>{
        <div>
        <h1>Namaste React Functional Component</h1>
          <h2>This is a H2 tag</h2>
        </div>
    }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  
  //async defer
  // root.render(heading); // to render react element

  root.render(<HeaderComponent1/>) // to render functional component

