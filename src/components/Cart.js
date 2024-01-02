import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {clearCart,removeItem} from "../utils/cartSlice";
$( "#success-btn" ).click(function() {
    $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
  });
  
  $( "#failure-btn" ).click(function() {
    $( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
  });

const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
 
    const dispatch=useDispatch();
    const handleclearCart=()=>{
       dispatch(clearCart())
    }
    const handlesubItem=(item)=>{
        
        dispatch(removeItem(item.card.info.name));
    }
  return (
    <div className='w-[80vw] mx-auto'>
    <div className="alert-box cleared">Cleared Cart!!</div>
    <div className="alert-box failure">Item Removed!!</div>
     <button  onClick={handleclearCart} className="mt-5  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Clear All</button>
      {cartItems.map((items)=>
           <div className='border-2 border-gray-300  rounded-lg  bg-white w-[100%] shadowcss mt-5'>
             <li key={items.card.info.name} className="transitioncss text-black flex justify-between p-[10px]">
            
                                    <div className="overflow-clip w-[95%]">
                                            <b >{items.card.info.name} -- &#x20B9;{ isNaN(items.card.info?.price)?items.card.info?.defaultPrice/100:items.card.info?.price/100 }</b>
                                              
                                            <br/><p className="text-[15px] text-gray-500 single-line ">{items.card.info.description}</p>
                                    </div>
                                    <div className="relative text-center cursor-pointer" onClick={()=>handlesubItem(items)} >
                                    <img src={url+items?.card?.info?.imageId} className="h-[50px] w-[70px]" onError={(e) => e.target.src = 'https://img.freepik.com/free-vector/color-doodle-food-burger-pattern_1409-3918.jpg'}/>
                                    <div className="self-start mr-[10px] shadowcss w-[50px] text-red-500 text-center absolute bottom-[-5px] rounded-lg left-[15%]  bg-white/90" >
                                    <i class="fa-solid fa-trash"></i>
                                    </div>
                                    </div>
                                    
                 </li></div>)}
    </div>
  )
}

export default Cart;