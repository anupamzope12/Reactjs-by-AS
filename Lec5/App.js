  /*
        * Header 
        *      Logo (Title)
        *      Nav Items (rightside)
        *      Cart
        * Body
        *     Search Bar
        *     Restarunt List
        *       Restarunt Card (many cards)
        *           Image
        *           Name
        *           Rating
        *           Cusines
        * Footer
        *     Reference Lisks
        *     CopyRights
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

  const restaruntList =[
    {
      "id": "750644",
      "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
        "text": "Idli",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for idly",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750231",
      "imageId": "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Poha.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80374?collection_id=80374&tags=layout_CCS_Poha&type=rcv2",
        "text": "Poha",
        "type": "WEBLINK"
      },
      "entityType": "HINGEWADI",
      "accessibility": {
        "altText": "restaurants curated for poha",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750132",
      "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
        "text": "Dosa",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for dosa",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750235",
      "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
        "text": "Sandwich",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for sandwich",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750203",
      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
        "text": "Paratha",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for paratha",
        "altTextCta": "open"
      },
      "entityId": "80476",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750237",
      "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
        "text": "Poori",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for poori",
        "altTextCta": "open"
      },
      "entityId": "80378",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749806",
      "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80353?collection_id=80353&tags=layout_BAU_Contextual%2Cappam%2Clayout_ux4&type=rcv2",
        "text": "Appam",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for appam",
        "altTextCta": "open"
      },
      "entityId": "80353",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750562",
      "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
        "text": "Vada",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for vada",
        "altTextCta": "open"
      },
      "entityId": "80427",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749874",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
        "text": "Cakes",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for cakes",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750230",
      "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
        "text": "Samosa",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for samosa",
        "altTextCta": "open"
      },
      "entityId": "80397",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750233",
      "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80376?collection_id=80376&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
        "text": "Pongal",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for pongal",
        "altTextCta": "open"
      },
      "entityId": "80376",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749789",
      "imageId": "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80468?collection_id=80468&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
        "text": "Omelette",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for omelette",
        "altTextCta": "open"
      },
      "entityId": "80468",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750640",
      "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
        "text": "Kachori",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for kachori",
        "altTextCta": "open"
      },
      "entityId": "80450",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750123",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
        "text": "Dhokla",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for dhokla",
        "altTextCta": "open"
      },
      "entityId": "80423",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750544",
      "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Upma.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80412?collection_id=80412&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
        "text": "Upma",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for upma",
        "altTextCta": "open"
      },
      "entityId": "80412",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749879",
      "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
        "text": "Chole Bhature",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chhole bhatoore",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "749761",
      "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
        "text": "Khichdi",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for khicdhi",
        "altTextCta": "open"
      },
      "entityId": "80456",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750605",
      "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
      "action": {
        "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
        "text": "Tea",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for tea",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750226",
      "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
        "text": "Salad",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for salad",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
      "frequencyCapping": {
        
      }
    },
    {
      "id": "750217",
      "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
        "text": "Pav Bhaji",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for pav bhaji",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
      "frequencyCapping": {
        
      }
    }

  ]

  /*
  const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

  */
    const RestraunCard = ({ restaurant })=>{
      const { text,entityType,imageId,altText}=restaurant;
      console.log(restaurant.action.text);
      console.log(entityType)
      return(
        <div className="card">
          <img alt="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+ imageId}/>
          <h2>{restaurant.action?.text}</h2>
          <h3>{entityType}</h3>
          <h4>{restaurant.accessibility?.altText}</h4>
        </div>  
      )
    }
    const Body= ()=>{
      return(
        <div className="restarunt-list">
              <RestraunCard restaurant={restaruntList[0]} />
              <RestraunCard restaurant={restaruntList[1]} />
              <RestraunCard restaurant={restaruntList[2]} />
              <RestraunCard restaurant={restaruntList[3]} />
              <RestraunCard restaurant={restaruntList[4]} />
              <RestraunCard restaurant={restaruntList[5]} />
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