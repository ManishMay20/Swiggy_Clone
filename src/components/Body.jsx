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
import Unserviceable from "./Unserviceable";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const topRestaurants = useSelector(
    (store) => store.restaurants.topRestaurants
  );
  const onlineRestaurants = useSelector(
    (store) => store.restaurants.onlineRestaurants
  );
  const banner = useSelector((store) => store.restaurants.banner);

  useEffect(() => {
    const fetchData = async () => {
      if (banner.length !== 0) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const json = await response.json();
        for (const card of json?.data?.cards) {
          const id = card?.card?.card?.id;
          switch (id) {
            case "whats_on_your_mind":
              dispatch(
                addBanner(card?.card?.card?.gridElements?.infoWithStyle?.info)
              );
              break;
            case "top_brands_for_you":
              dispatch(
                addTopRestaurants(
                  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )
              );
              break;
            case "restaurant_grid_listing":
              dispatch(
                addOnlineRestaurants(
                  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )
              );
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    scrollTo(0, 0);
  }, [dispatch, banner]);

  if (loading) {
    return <ShimmerUI />;
  }

  const isAvailable =
    topRestaurants.length !== 0 ||
    onlineRestaurants.length !== 0 ||
    banner.length !== 0;

  return (
    <div>
      {!isAvailable && <Unserviceable />}
      {isAvailable && (
        <>
          <Banner />
          <Restaurants />
          <OnlineRestaurant />
        </>
      )}
    </div>
  );
};

export default Body;
