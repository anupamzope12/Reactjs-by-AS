import { Restaruntlist } from "./Constant"
import { RestaruntCard } from "./RestaruntCard";

const Body = ()=>{
    return(
        <div className="restarunt-list">
             {Restaruntlist.map((restaurant) => {
                 return <RestaruntCard {...restaurant} key={restaurant.imageId} />;
            })}
        </div>
        )
}

export default  Body;