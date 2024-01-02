import {useEffect,useState} from "react";
import { url } from "./constants";
const useRestaurantMenu=(resid)=>{
    const [resinfo,setresinfo]=useState(null);
    // fetchdata
    useEffect(()=>{
        fetchMenu();
     },[]);
      const fetchMenu=async()=>{
          const url2=url+resid//"771299"
          const data=await fetch(url2);
          const json=await data.json();
          setresinfo(json.data)
      }
    return resinfo;

}
export default useRestaurantMenu;