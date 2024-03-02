import { IMG_CDN_LINK } from "../config";
import { restaurantList } from "../config";

const RestaurantCard = (props) =>{
    const {name,cloudinaryImageId,areaName,cuisines} = props;
    return(
      <div className="restaurant-card">
        <img src = {IMG_CDN_LINK + cloudinaryImageId} ></img>
        <h4>{name}</h4>
      </div>
    )
  }
  
const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((r) => (
          <RestaurantCard key={r.info.id} {...r.info}/>
        ))}
      </div>
    );
  };

export default Body;