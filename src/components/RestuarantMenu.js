import { ShimmerCard3 } from "./ShimmerCard";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuList from "./MenuList";
import { useState } from "react";
 const RestuarantMenu = () => {
   
   const [showIndex,setshowIndex]=useState(-1)
    const params=useParams();
    console.log(params) // it returns :resId object like {resId:234cdj}
    const {resid}=params;
    const resinfo=useRestaurantMenu(resid)//custom hook
  
    
  
   const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const { name, locality, areaName, city, cuisines,costForTwoMessage    } = resinfo?.cards[0].card.card.info || {};
    
   const {cards}=resinfo?.cards[2].groupedCard.cardGroupMap.REGULAR ||{};
    
    return (resinfo==null)?<ShimmerCard3/>:(
    <div className="menu text-white"> 
    <div><div className="alert-box success">ITEM ADDED TO CART!!!</div>
     <div className="alert-box failure">Removed!!!</div></div>
       <div className="bg-[url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg')]"><div className="backdrop-blur-[5px]"><h1 className="z-10 text-[50px] text-center">{name}</h1>
       <p className="text-center z-10"><b>{locality},{areaName},{city}</b></p>
       <h2 className="text-[30px] text-center ">Menu</h2></div></div>
       <ul className=" text-white flex flex-col" >
        <li className="text-white w-[30%] self-center mt-[10px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{cuisines.join(',')}---{costForTwoMessage}<br/></li>
        {cards.map((res,index)=>{
          return (<div key={res?.card?.card?.info?.name} style={{ display: res?.card?.card?.title==undefined  ? 'none' : '' }} className="w-[90%] mx-auto ">
            <MenuList Res={res} showItems={index==showIndex?"true":"false"} setshowIndex={()=>(setshowIndex(index))}/>
          <br/><br/>
          </div>)
        })}
        
       </ul>
    </div>

  )
}

export default RestuarantMenu;