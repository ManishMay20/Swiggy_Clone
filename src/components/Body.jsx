import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Restaurants from "./Restaurants/Restaurants";
import OnlineRestaurant from "./Restaurants/OnlineRestaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  addBanner,
  addOnlineResTitle,
  addOnlineRestaurants,
  addTopResTitle,
  addTopRestaurants,
  clearRestaurants,
} from "../ReduxStore/restaurantsSlice";
import { API_URL } from "../constans";
import ShimmerUI from "./Shimmers/ShimmerUI";
import Unserviceable from "./Unserviceable";
import { CityContext, LocationContext } from "../App";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const { location, setLocation } = useContext(LocationContext);
  const { city, setCity } = useContext(CityContext);

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
      if (banner?.length !== 0) {
        // setLoading(false);

        return;
      } else {
        setLoading(true);
      }

      try {
        const response = await fetch(
          `${API_URL}lat=${location?.latitude}&lng=${location?.longitude}`
        );
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
              dispatch(addTopResTitle(card?.card?.card?.header?.title));
              dispatch(
                addTopRestaurants(
                  card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )
              );

              break;
            case "popular_restaurants_title":
              dispatch(addOnlineResTitle(card?.card?.card?.title));
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
        console.log("finally");
        setLoading(false);
      }
    };
    fetchData();
    scrollTo(0, 0);
  }, [dispatch, location, city]);

  const isAvailable =
    topRestaurants.length !== 0 ||
    onlineRestaurants.length !== 0 ||
    banner.length !== 0;

  if (isAvailable && loading) setLoading(false);
  if (loading) {
    return <ShimmerUI />;
  }

  return (
    <div>
      {!isAvailable && <Unserviceable />}
      {isAvailable && (
        <>
          {banner.length !== 0 && <Banner />}
          {topRestaurants.length !== 0 && <Restaurants />}
          {onlineRestaurants.length !== 0 && <OnlineRestaurant />}
        </>
      )}
    </div>
  );
};

export default Body;
