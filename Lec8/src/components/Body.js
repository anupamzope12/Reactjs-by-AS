import { Restaruntlist } from "./Constant"
import { RestaruntCard } from "./RestaruntCard";
import {  useState,useEffect} from "react";
import Shimmer from "./Shimmer";

// What is state
// What is React hooks?-functions
// What is useState

function  filterData(searchText,restaurants){
        
        const filterData = restaurants.filter((restaurant)=>
        // restaurant.action.text.includes(searchText)
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),       
        );
        return filterData;
}

const Body = ()=>{
    //How do I keep a acopy of All restaurants
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState(""); // returns=[state varailbe name,function to update the variable]
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);
    // empty dependency array => once after render
    // dep array [serahcText] => pnce after initialk render and every time after re rdenr when my searchtext is changes
    
    useEffect(()=>{ 
        getRestaurants();
    },[])
    
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)

        //optional chaining 
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
    }
    console.log("render()")

    //Conditional Rendering
    //if restarunt is empty => shimmer UI
    //if restaurant has data => actual Data UI 

    //Early return
    if(!allRestaurants) return null;

    if(filterdRestaurants?.length===0) return <h1>No restarunt match your filter!!!!!!!!!</h1>
    return (allRestaurants.length === 0) ? <Shimmer/>: (
        <>
        <div className="search-container">
           <input type="text" 
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e)=> { 
                //e.target.value => Whatever you write in input
                setSearchText(e.target.value)  }}/>

            <button type="submit" className="search-btn"
                onClick={()=>{
                    //need to filter the data
                    const data=filterData(searchText,allRestaurants);
                    //update the state - restaurants
                    setFilterdRestaurants(data);
                }}
                >Search</button>
        </div>

        <div className="restarunt-list">
              {filterdRestaurants.map((restaurant) => {
                 return <RestaruntCard {...restaurant} key={restaurant.info.cloudinaryImageId} />;
            })}
        </div>
        </>
    )
}

export default  Body;