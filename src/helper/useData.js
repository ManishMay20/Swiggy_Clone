// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addBanner,
//   addOnlineRestaurants,
//   addTopRestaurants,
// } from "../ReduxStore/restaurantsSlice";

// const useData = () => {
//   const dispatch = useDispatch();
//   const restaurant = useSelector((store) => store.restaurants.banner);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();

//     // if (restaurant) return;
//     dispatch(
//       addTopRestaurants(
//         json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       )
//     );

//     dispatch(
//       addOnlineRestaurants(
//         json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants
//       )
//     );

//     dispatch(
//       addBanner(
//         json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
//       )
//     );
//   };
// };
// export default useData;
