import RestaurantCard from "./RestuarantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useState,useEffect} from "react";
import {ShimmerCard2} from "./ShimmerCard";
import {Link} from "react-router-dom";

const Body=()=>{
   //state variable;
   
   const [listOfRestuarant,setlistOfRestuarant]=useState([]);
   const [searchtext,setsearchtext]=useState("");
   const [filteredlistOfRestuarant,setfilteredlistOfRestuarant]=useState([]);
 

  useEffect(()=>{
   console.log("useeffect inside body")
   fetchdata()
  },[])
 

   async function fetchdata(){
      try{
      const url = 'https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const data2 =await fetch(url);
      const json2=await data2.json();
      setlistOfRestuarant(json2?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredlistOfRestuarant(json2?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}
      catch(e){
         console.log(e)
      }
   }
   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false){
      return (<h1>looks like u are offline!!!</h1>)
     }
     const handleSearch = () => {
      const filterList = listOfRestuarant.filter((res) =>
        res.info.name.toUpperCase().includes(searchtext.toUpperCase())
      );
      setfilteredlistOfRestuarant(filterList);
    };
    return ( !listOfRestuarant||listOfRestuarant.length==0)?<ShimmerCard2 />:(<div><div className="body flex mt-[10px] ">
            <div className="filter flex flex-col h-[200px] w-[300px] bg-white order-2 mr-[20px]  items-center justify-center rounded-lg">
                  <div className="searchContainer border-2 border-gray-300 bg-white h-10  rounded-lg text-sm focus:outline-none  flex  w-[80%] ">
                  <input type="text" id="searchbox" onKeyDown={(event) => {
                     if (event.key === 'Enter') {
                     handleSearch();
                     }
                  }} placeholder="Search Restaurants" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value);}} className="pl-[10px] min-w-[100px]  rounded-lg focus:outline-none"></input>
                  <button  
                             onClick={handleSearch}
          
                                        className="text-white min-w-[35px] grow bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg   text-center "><i className="fa fa-search"></i></button>
                </div>
                <button className="filter-btn mt-[20px] text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{cursor:"pointer"}} onClick={()=>{
                        const filter2=listOfRestuarant.filter((res)=>{
                           console.log(parseFloat(res.info.avgRating))
                           return (parseFloat(res.info.avgRating))>4.2;
                        })
                        setfilteredlistOfRestuarant(filter2)
                       
                        console.log(ListData)
                }}>Top-Rated Restaurant</button>
            </div>
            <div className="res-container order-1">
              {filteredlistOfRestuarant?.map((res,INDEX)=>{
                 return <Link style={{textDecoration:'none'}}key={INDEX} to={"/restuarants/"+res.info.id}><RestaurantCard  resObj={res}/></Link>
              })}
            </div>
      </div>
           
    </div>)
 }
 export default Body; 
  