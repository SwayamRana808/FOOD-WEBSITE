import { useEffect } from "react";
import { RES_IMG } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {name,cuisines,avgRating,cloudinaryImageId}=props.resObj?.info;
    const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
   
    return (
      <div className="res-card ">
        <img className="res-img" src={url}/>
        <h4 className="name">{name}</h4>
        <h4 className="cuisine max-w-[90%]">{cuisines}</h4>
        <span className="avgRating">{avgRating}⭐</span>
      </div>
    ) 
  } 
  export default RestaurantCard;