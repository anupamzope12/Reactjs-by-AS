import { useState,useEffect } from "react";

const useRestaurant = () =>{
    const [restaurant,setRestaurant]=useState(null);
  
    //get data from API
        
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=647335&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log("json",json)
        setRestaurant(json?.data?.cards[2]?.card?.card?.info); // Extracting the restaurant info from the JSON response
    } 

    //resturn resta data
    return restaurant;
};

export default useRestaurant;