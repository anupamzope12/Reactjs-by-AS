import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "./Constant"
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();    
  
    const restaurant=useRestaurant()
  
    return (
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>Restaurant name: {restaurant?.name}</h2>
            <img alt="Restaurant Image" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
    );
}

export default RestaurantMenu;  