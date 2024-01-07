import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{
  
  const [btnNameReact,setbtnName]=useState("LOGIN")
  const onlineStatus=useOnlineStatus()

   //subscribing to our store-------------
   const cartitems=useSelector((store)=>store.cart.items)
    return (
      <div className="flex justify-between items-center  h-[50px] sm:h-[70px]   bg-white fixed w-[100%] top-[0px] z-50">
             <div className="logo-container h-[90%] ml-[5px] shrink-0 ">
               <img className="logo h-[100%] rounded-[100%]" src={LOGO_URL}/>
             </div>
             <div className="nav-items">
               <ul>
                <li>Status:{onlineStatus?"🟢":"🔴" }</li>
                <li className="self-center"><Link to="/" className="text-[15px] sm:text-[20px]">Home</Link></li>
                <li className="self-center"><Link to="/about" className="text-[15px]    sm:text-[20px]">About</Link></li>
                <li className="self-center"><Link to="/contact" className="text-[15px]  sm:text-[20px]">Contact</Link></li>
                <li className="self-center"><Link to="/grocerystore" className="text-[15px]   sm:text-[20px]">Grocery</Link></li>
                <li  className="self-center relative"><Link to="/cart"><i className="fa-solid fa-cart-shopping "></i><sup className="bg-red-600 text-white rounded-full right-[4px]  px-[5px] ">{cartitems.length}</sup></Link></li>
                <li className="loginbutton text-white self-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg   text-center  " onClick={()=>{btnNameReact== 'LOGIN'?setbtnName("LOGOUT"):setbtnName("LOGIN");
                                                           } }>{btnNameReact}</li>
               </ul>
             </div>
      </div>
    )
  }
  export default Header;