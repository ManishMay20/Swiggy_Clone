import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerCard from "../Shimmers/ShimmerCard";

const OnlineRestaurant = () => {
  // const apiInfo = useData();
  // if (!apiInfo) return null;
  // console.log(apiInfo);
  // const restaurantType = apiInfo.data.cards[3].card.card;
  // const restaurants =
  //   apiInfo?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
  //     ?.restaurants;
  // console.log(restaurants);
  // if (!restaurants) return null;

  const restaurants = useSelector(
    (store) => store.restaurants.onlineRestaurants
  );

  if (!restaurants) return;
  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold mb-4">
        {/* {restaurantType?.header?.title} */}
        Restaurants with online food delivery in Indore
      </h1>
      <div className="flex flex-wrap gap-5">
        {restaurants &&
          restaurants[0]?.map((restaurant) => (
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
