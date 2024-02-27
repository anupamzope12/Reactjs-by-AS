import { RestaruntCard } from "./RestaruntCard";
import {  useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ()=>{
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [searchText,setSearchText]=useState(""); // returns=[state varailbe name,function to update the variable]
    const [filterdRestaurants, setFilterdRestaurants] = useState([]);

    useEffect(()=>{ 
        getRestaurants();
    },[])
     
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
    }

    const isOnline =useOnline();

    if(!isOnline){
        return<h1>offline ,please check your internate connection!!</h1>;
    }

    if(!allRestaurants) return null;

    return (allRestaurants.length === 0) ? <Shimmer/>: (
        <>
        <div className="search-container p-5 bg-pink-50 my-5">
           <input type="text" 
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e)=> { 
                setSearchText(e.target.value)  }}/>

            <button className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
                onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    setFilterdRestaurants(data);
                }}
                >Search</button>
        </div>

        <div className="flex flex-wrap ">
              {filterdRestaurants.map((restaurant) => {
                 return <RestaruntCard {...restaurant} key={restaurant.info.cloudinaryImageId} />;
            })}
        </div>
        </>
    )
}

export default  Body; 