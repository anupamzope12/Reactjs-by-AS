import { RestaruntCard } from "./RestaruntCard";
import {  useState,useEffect} from "react";
import Shimmer from "./Shimmer";

function  filterData(searchText,restaurants){
        
        const filterData = restaurants.filter((restaurant)=>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()),       
        );
        return filterData;
}

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

    if(!allRestaurants) return null;

    return (allRestaurants.length === 0) ? <Shimmer/>: (
        <>
        <div className="search-container">
           <input type="text" 
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e)=> { 
                setSearchText(e.target.value)  }}/>

            <button type="submit" className="search-btn"
                onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
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