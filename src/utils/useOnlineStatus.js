import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlinestatus]=useState(true);

    //check if online

    useEffect(()=>{
        window.addEventListener("offline",()=>{
           setOnlinestatus(false)
        }) ;
        window.addEventListener("online",()=>{
         setOnlinestatus(true)
         })},[]); 
  

 
    return onlineStatus;
}
export default useOnlineStatus;