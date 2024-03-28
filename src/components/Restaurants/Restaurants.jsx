import React, { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LeftRightArrowBtn from "../Buttons/LeftRightArrowBtn";

const Restaurants = () => {
  const containerRef = useRef(null);
  const title = useSelector((store) => store.restaurants.topResTitle);

  const restaurants = useSelector((store) => store.restaurants.topRestaurants);

  if (!restaurants || restaurants.length === 0) {
    return null;
  }

  return (
    <div className="py-2 md:py-4 border-b-2">
      <div className="flex justify-between items-center">
        {restaurants[0] && (
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold my-2 sm:my-4">
            {title}
          </h1>
        )}
        <LeftRightArrowBtn containerRef={containerRef} />
      </div>

      <div className="flex overflow-hidden gap-2" ref={containerRef}>
        {restaurants[0].map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <div className="w-72">
              <RestaurantCard restaurant={restaurant} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
