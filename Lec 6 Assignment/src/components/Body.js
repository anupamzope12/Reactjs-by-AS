import { RestaruntCard } from "./RestaruntCard";
import { Restaruntlist } from "../components/Constant";
import { useState } from "react";
// import React, { useState } from "react"; // Correct import

function filterData(searchText,restaurants){
  const filterData=restaurants.filter((restaurant)=>
    restaurant.action.text.toLowerCase().includes(searchText.toLowerCase()),
  )
  return filterData;
}

const Body = ()=>{
  const [searchText,setSearchText]=useState("");
const [restaurants,setRestaurants]=useState(Restaruntlist);

    return(
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
          const data=filterData(searchText,restaurants)
          setRestaurants(data);
        }}>search</button>
      </div>

      <div className="restarunt-list">
              {restaurants.map((restaurant) => {
                  return <RestaruntCard {...restaurant} key={restaurant.imageId} />;
              })}
      </div>
        </>
        )
}

export default Body;