import { restrauntList } from "../contants";
import RestrauntCard  from "./RetrurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,restaurants){
 const filterData= restaurants.filter((restaurant) => 
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

 return filterData;
}

const Body= () => {
    //  searchText is a local variable
    const [allResturants,setAllResturants]= useState([]);
    const [searchText,setSearchText] = useState([]); //To create state variable
    const [filteredRestaurants,setFilteredRestaurants]=useState("");

    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
  
    if (!allResturants) return null;

        return (allResturants.length == 0) ? <Shimmer/> : (
        <React.Fragment>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText}
            onChange= {(e) => {
               setSearchText(e.target.value);
            }}
            />
            <button className="search-btn" onClick={()=>{
              //need to filter the data
              const data = filterData(searchText,allResturants);
              //update ths state - restaurants
              setFilteredRestaurants(data);

            }}>Search</button>
        </div>
        <div className="resturant-list">
          {
            filteredRestaurants.map(restaurant =>{
              return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            })
          }
        </div>
        </React.Fragment>
    )
}
 export default Body;