import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Restaurants from "./Restaurants/Restaurants";
import OnlineRestaurant from "./Restaurants/OnlineRestaurant";

import { useDispatch, useSelector } from "react-redux";
import {
  addBanner,
  addOnlineRestaurants,
  addTopRestaurants,
} from "../ReduxStore/restaurantsSlice";
import { API_URL } from "../constans";
import ShimmerUI from "./Shimmers/ShimmerUI";

const Body = () => {
  const [apiData, setApiData] = useState(null);
  const dispatch = useDispatch();
  const topRestaurants = useSelector(
    (store) => store.restaurants.topRestaurants
  );
  const onlineRestaurants = useSelector(
    (store) => store.restaurants.onlineRestaurants
  );
  const banner = useSelector((store) => store.restaurants.banner);

  const data = topRestaurants && onlineRestaurants && banner;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (banner.length !== 0) return;
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        console.log(json);
        setApiData(json);
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            const id = await json?.data?.cards[i]?.card?.card?.id;

            if (id === "whats_on_your_mind") {
              dispatch(
                addBanner(
                  json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                    ?.info
                )
              );
            }
            if (id === "top_brands_for_you") {
              dispatch(
                addTopRestaurants(
                  json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
                )
              );
            }
            if (id === "restaurant_grid_listing") {
              dispatch(
                addOnlineRestaurants(
                  json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
                )
              );
            }
          }
        }
        checkJsonData(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !data ? (
    <ShimmerUI />
  ) : (
    <div>
      <Banner />
      <Restaurants />
      <OnlineRestaurant />
    </div>
  );
};

export default Body;
