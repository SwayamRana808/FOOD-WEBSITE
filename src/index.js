import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import ShimmerCard from "./components/ShimmerCard";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *        -img
 *        -name of res ,star rating
 * Footer
 *  -CopyRight
 *  -Links
 *  -Address
 *  -Contact
 */
 
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
  
  return (
      <Provider store={appStore}>
         <div className="app">
         <Header/>
         <Outlet/> 
         </div>
      </Provider>

  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[ 
    {
        path:"/",
        element :<Body/>,
       
    },
    {
      path:"/About",
      element :<About/>,
     
    },
    {
      path:"/Contact",
      element:<ContactUs />
    },
  {
    path:"/restuarants/:resid",
    element:<RestuarantMenu />
  },
  {
    path:"/grocerystore",
    element:<Suspense fallback={<div><h1>Loading...</h1><ShimmerCard/></div>}><Grocery /></Suspense>
  },
  {
    path:"/cart",
    element:<Cart/>
  }]
  },
  {
        path:"/test",
        element :<Header/>,
  }

])
const rootitem=ReactDOM.createRoot(document.getElementById("root"))
rootitem.render( <RouterProvider router={appRouter}/>)
