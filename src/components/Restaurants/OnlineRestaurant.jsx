import React from "react";
import RestaurantCard from "./RestaurantCard";
import useData from "../../helper/useData";
import { Link } from "react-router-dom";

const OnlineRestaurant = () => {
  const apiInfo = useData();
  if (!apiInfo) return null;
  console.log(apiInfo);
  const restaurantType = apiInfo.data.cards[3].card.card;
  const restaurants =
    apiInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log(restaurants);
  return (
    <div className="pt-2">
      <h1 className="text-2xl font-bold mb-4">
        {/* {restaurantType?.header?.title} */}
        Restaurants with online food delivery in Indore
      </h1>
      <div className="flex flex-wrap gap-5">
        {restaurants &&
          restaurants.map((restaurant) => (
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
