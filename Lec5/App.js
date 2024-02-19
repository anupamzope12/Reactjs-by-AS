  /*
        *
        *
        * Header 
        *      Logo (Title)
        *      Nav Items (rightside)
        *      Cart
        * 
        * Body
        *     Search Bar
        *     Restarunt List
        *       Restarunt Card (many cards)
        *           Image
        *           Name
        *           Rating
        *           Cusines
        * 
        * Footer
        *     Reference Lisks
        *     CopyRights
        * 
        * 
        */
       
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
    <a
     href="/">
<img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&usqp=CAU"/>
</a>
  )

  
    // <h2 id="title" key="h2"> Namaste React </h2> jsx expression
    
    //React Component
    // - Functional - NEW - I will use this most of the time
    // - Class Based Component - OLD - we will lern this tool

// Name of component shou ld be start with capital letter - it's not mandatory

    const Header = () =>{    // This is a functiuonal component
      return(
        <div className="header">
          <Title/>
            <div className="nav-items">
              <ul>
                
                <li>Home</li>
                <li>About</li> 
                <li>Contact</li>
                <li>Cart</li>

               </ul>              
            </div>          
        </div>
      )
    }
    const HeaderComponent2 = () =>{
        <div>
        <h1>Namaste React Functional Component</h1>
          <h2>This is a H2 tag</h2>
        </div>
    }

  const restaruntList =[{
    name : "Burger king",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7798d7bed74c81bc0e5ffc677a7d2eef",
    cusines : ["Burger" , "American"],
    rating : "4.2",
  },
  {
    name : "Burger king",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7798d7bed74c81bc0e5ffc677a7d2eef",
    cusines : ["Burger" , "American"],
    rating : "4.2",
  },
  {
    name : "Burger king",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7798d7bed74c81bc0e5ffc677a7d2eef",
    cusines : ["Burger" , "American"],
    rating : "4.2",
  },
  {
    name : "Burger king",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7798d7bed74c81bc0e5ffc677a7d2eef",
    cusines : ["Burger" , "American"],
    rating : "4.2",
  },
  {
    name : "Burger king",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/7798d7bed74c81bc0e5ffc677a7d2eef",
    cusines : ["Burger" , "American"],
    rating : "4.2",
  } ]

    const RestraunCard = ()=>{
      return(
        <div className="card">
          <img alt="image" src={burgerKing.image}/>
          <h2>{burgerKing.name}</h2>
          <h3>{burgerKing.cusines.join(", ")}</h3>
          <h4>{burgerKing.rating} stars</h4>
        </div> 
      )
    }
    const Body= ()=>{
      return(
        <div className="restarunt-list">
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
          <RestraunCard/>
        </div>
      )
     }

    
    const Footer= ()=>{
      return(
        <h4>Footer</h4>
      )
    }
    const AppLayout = () =>{
      return(
        <>
            <Header/>
             <Body/>
            <Footer/>
       </>
      )
    }

    // styleObj= {
    //   backgroundColor:"yellow",
    //   border:"1px solid red"
    // }
    // //Inline styling in react 
    // const jsx= (
    //   <div style={styleObj}>
    //     <h1>jsx</h1>
    //     <h1>second jsx</h1>
    //   </div>
    // )

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  
  //async defer
  // root.render(heading); // to render react element

  root.render(<AppLayout/>) // to render functional component

