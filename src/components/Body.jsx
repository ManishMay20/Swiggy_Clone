import React from "react";
import Banner from "./Banner/Banner";
import Restaurants from "./Restaurants/Restaurants";
import OnlineRestaurant from "./Restaurants/OnlineRestaurant";

const Body = () => {
  return (
    <div>
      <Banner /> <Restaurants /> <OnlineRestaurant />
    </div>
  );
};

export default Body;
