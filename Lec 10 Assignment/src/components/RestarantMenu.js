import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    const [restaurant,setRestaurant] = useState(null);
    const {id} =useParams();

    useEffect( ()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=647335&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json)
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }

    return (!restaurant) ? <Shimmer/> :(
        <div>
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>Restaurant name: {restaurant?.name}</h2>
                <img alt="Restaurant Image" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMessage}</h3>
            </div>
        </div>
    )
}

export default RestaurantMenu;