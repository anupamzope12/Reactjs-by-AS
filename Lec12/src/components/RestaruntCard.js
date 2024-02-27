import { IMG_CDN_URL } from "./Constant";

export const RestaruntCard = ({ info }) => {
    const { cloudinaryImageId, name, areaName, avgRating, sla } = info;
    const deliveryTime = sla.deliveryTime;

    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 " >
            <img alt="Restaurant Image" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3>{areaName}</h3>
            <h4>Delivery Time: {deliveryTime} mins</h4>
            <h4>{avgRating}</h4>

        </div>
    );  
};

export default RestaruntCard;
