import { Restaruntlist } from "./Constant"
import { RestaruntCard } from "./RestaruntCard";
import {  useState } from "react";

// What is state
// What is React hooks?-functions
// What is useState


function filterData(searchText,restaurants){

    console.log(searchText);
    // console.log(restaurants.action.text)
        const filterData = restaurants.filter((restaurant)=>
        // restaurant.action.text.includes(searchText)
        restaurant.action.text.toLowerCase().includes(searchText.toLowerCase()),
        console.log("in filter function"),

        );
        console.log("Filtered Data:", filterData);
    console.log("after the filter function")
    return filterData;
}

const Body = ()=>{
    // const searchtext="kfc";

    //searchText is a local state variable
    //this is normal javaScript destrucutuing happening
    const [searchText,setSearchText]=useState(""); // returns=[state varailbe name,function to update the variable]
    const [restaurants, setRestaurants] = useState(Restaruntlist);

    return(
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
                    const data=filterData(searchText,restaurants);
                    console.log("after onclick")
                    console.log("after onclick filterData",data)

                    //update the state - restaurants
                    setRestaurants(data);
                }}
                >Search</button>
        </div>


        <div className="restarunt-list">
             {restaurants.map((restaurant) => {
                 return <RestaruntCard {...restaurant} key={restaurant.imageId} />;
            })}
        </div>
        </>

        )
}

export default  Body;