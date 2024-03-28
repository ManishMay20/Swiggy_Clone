import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OnlineRestaurant = () => {
  const title = useSelector((store) => store.restaurants.onlineResTitle);
  const restaurants = useSelector(
    (store) => store.restaurants.onlineRestaurants
  );

  if (!restaurants || restaurants.length === 0) {
    return null;
  }

  return (
    <div className="py-2 sm:py-4">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {restaurants[0].map((restaurant) => (
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

export default OnlineRestaurant;
