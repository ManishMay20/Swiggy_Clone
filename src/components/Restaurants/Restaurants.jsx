import React from "react";
import RestaurantCard from "./RestaurantCard";
import useData from "../../helper/useData";

const Restaurants = () => {
  const apiInfo = useData();
  if (!apiInfo) return null;
  const restaurantType = apiInfo.data.cards[1].card.card;
  const restaurants =
    apiInfo.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-bold my-4">{restaurantType.header.title}</h1>
      <div className="flex flex-wrap gap-5">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
