import { RestaruntCard } from "./RestaruntCard";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer"
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import React, { useState } from "react"; // Correct import


const Body = ()=>{
  //To keep a copy of all restaurants
const[allRestaurants,setAllRestaurants]=useState([])
const [searchText,setSearchText]=useState("");
const [filterdRestaurants,setFilterdRestaurants]=useState([]);

  useEffect(()=>{
    getRestaurants();
  },[])
  const isOnline =useOnline();

  if(!isOnline){
      return<h1>offline ,please check your internate connection!!</h1>;
  }

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log("json ",json)
    setAllRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    setFilterdRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
}
if(!allRestaurants) return null;

// if(filterdRestaurants?.length===0) return <h1>No restarunt match your filter!!!!!!!!!</h1>
   
return( allRestaurants.length===0)?<Shimmer/> : (
      <>
      <div className="search-container">
        <input type="text"
        placeholder="search"
        className="search-input"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        ></input>
        <button type="submit"
        className="search-btn"
        onClick={()=>{
          const data=filterData(searchText,allRestaurants)
          setFilterdRestaurants(data);
        }}>search</button>
      </div>

      <div className="restarunt-list">
              {filterdRestaurants.map((restaurant) => {
                  return <RestaruntCard {...restaurant} key={restaurant.imageId} />;
              })}
      </div>
        </>
        )
}

export default Body;