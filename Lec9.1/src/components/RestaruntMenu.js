import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../components/Constant"
const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        console.log("useEffect");

        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        console.log("in getRestaurantInfo");
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=647335&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log("json",json)
        setRestaurant(json?.data?.cards[2]?.card?.card?.info); // Extracting the restaurant info from the JSON response
    }

    return (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>Restaurant name: {restaurant?.name}</h2>
            <img alt="Restaurant Image" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
    );
}

export default RestaurantMenu;
