import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Header=()=>{
  const provider = new GoogleAuthProvider();
  const navigate=useNavigate();
  const onlineStatus=useOnlineStatus()
  const [login,setLogin]=useState(false);
  useEffect(()=>{
    const unsubsribe=onAuthStateChanged(auth, (user) => { //event listner

      if (user) {
        setLogin(true);
        const {uid,email,displayName} =auth.currentUser;
        
        // ...
      } else {
        setLogin(false)
        navigate("/")
      }
    });
    return ()=>unsubsribe();
   },[])

  const handleSignOut=()=>{
   
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleSignin=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
   }
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
                {login && <li  className="self-center relative"><Link to="/cart"><i className="fa-solid fa-cart-shopping "></i><sup className="bg-red-600 text-white rounded-full right-[4px]  px-[5px] ">{cartitems.length}</sup></Link></li>}
                <li className="loginbutton text-white self-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg   text-center  "
                 onClick={()=>{
                  if(login){
                    handleSignOut();
                    }else{
                    handleSignin();
                    }
                  
                                                           } }>{login?"LOG OUT":"LOG IN"}</li>
               </ul>
             </div>
      </div>
    )
  }
  export default Header;