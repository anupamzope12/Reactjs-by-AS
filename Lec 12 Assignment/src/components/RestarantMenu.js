import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = ()=>{

    const {id} =useParams();
    const restaurant=useRestaurant()

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