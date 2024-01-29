import React, { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LeftRightArrowBtn from "../Buttons/LeftRightArrowBtn";

const Restaurants = () => {
  const containerRef = useRef(null);

  const restaurants = useSelector((store) => store.restaurants.topRestaurants);

  if (restaurants?.length === 0) return;

  return (
    <div className="py-4 border-b-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold my-4">
          {restaurants[0] ? "Top restaurant chains in Indore" : ""}
        </h1>
        <LeftRightArrowBtn containerRef={containerRef} />
      </div>

      <div className="flex overflow-hidden gap-4" ref={containerRef}>
        {restaurants[0]?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
