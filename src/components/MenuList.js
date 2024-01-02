import {addItem} from "../utils/cartSlice"
import { useDispatch } from "react-redux";
 const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
 const MenuList = (props) => {
    const handleClick=()=>{
        props.setshowIndex()
    }
    const dispatch=useDispatch();
    const handleaddItem=(item)=>{
         dispatch(addItem(item))
    }
    return (
        <div>
        
        <h2 onClick={handleClick} className="text-[30px] cursor-pointer text-center">{props.Res?.card.card.title} {props.Res?.card?.card?.itemCards?.length==undefined?"(0)":<div>({props.Res?.card.card.itemCards.length})<i className="fa-solid fa-chevron-down "></i></div>}</h2>
        <ul className="border-2 border-gray-300  rounded-lg  bg-white w-[100%] shadowcss " >
           {props?.Res?.card?.card?.itemCards?.map((items)=>
           
           (props.showItems==='true' && <li key={items.card.info.name} className="transitioncss text-black flex justify-between m-[10px]">
            
                                    <div className="overflow-clip w-[95%]">
                                            <b >{items.card.info.name} -- &#x20B9;{ isNaN(items.card.info?.price)?items.card.info?.defaultPrice/100:items.card.info?.price/100 }</b>
                                              
                                            <br/><p className="text-[15px] text-gray-500 single-line ">{items.card.info.description}</p>
                                    </div>
                                    <div className="relative text-center cursor-pointer" onClick={()=>handleaddItem(items)} >
                                    <img src={url+items?.card?.info?.imageId} className="h-[50px] w-[70px]" onError={(e) => e.target.src = 'https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg'}/>
                                    <div className="self-start mr-[10px] shadowcss w-[50px] text-green-500 text-center absolute bottom-[-5px] rounded-lg left-[15%]  bg-white/90" >
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                    </div>
                                    
                 </li>))}
    </ul></div>
    )
}

export default MenuList;