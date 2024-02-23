import { IMG_CDN_URL } from "../components/Constant"

export const RestaruntCard = ({ 
    imageId,
    action: { text },
    entityType,
    accessibility: { altText }
       })=>{
      return(
        <div className="card">
            <img alt="Restaurant Image" src={IMG_CDN_URL+`${imageId}`}></img>
            <h2>{text}</h2>
            <h3>{entityType}</h3>
            <h4>{altText}</h4>
        </div>
    )
}

export default RestaruntCard;