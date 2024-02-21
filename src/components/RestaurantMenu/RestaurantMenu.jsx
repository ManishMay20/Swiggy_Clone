import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";
import { MENU_API_URL } from "../../constans";
import OfferCard from "./OfferCard";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        const response = await fetch(MENU_API_URL + id);
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const json = await response.json();
        setMenuData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurantMenu();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!menuData) {
    return <RestaurantMenuShimmer />;
  }
  let restaurantInfo;
  let restaurantCategories;
  let offers;
  {
    for (let i = 0; i < menuData.data.cards.length; i++) {
      if (menuData?.data?.cards[i]?.card?.card?.info) {
        restaurantInfo = menuData?.data?.cards[i]?.card?.card?.info;
      } else if (
        menuData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.offers
      ) {
        offers =
          menuData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.offers;
      } else if (
        menuData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ) {
        restaurantCategories =
          menuData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      }
    }
  }

  return (
    <div className="md:w-4/5 lg:w-2/3 m-auto p-2">
      <div className="text-[10px] my-6">
        <Link to={"/"}>
          <span className="text-gray-500 cursor-pointer hover:text-gray-950">
            Home /{" "}
          </span>
        </Link>
        <span className="text-gray-500 cursor-pointer hover:text-gray-950">
          Indore /{" "}
        </span>
        <span className="text-gray-900">{restaurantInfo?.name}</span>
      </div>
      <div className="flex justify-between mt-10 border-b-2 pb-6">
        <div className="">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {restaurantInfo?.name}
          </h2>
          <p className="text-xs text-gray-500">
            {restaurantInfo?.cuisines?.join(", ")}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {restaurantInfo?.areaName}{" "}
            {restaurantInfo?.sla?.lastMileTravelString}
          </p>
          <div className="mt-4 flex gap-1 text-xs text-gray-500">
            <img
              className="h-4 w-4"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648208530/surgecreatives/info"
              alt=" "
            />

            <p>{restaurantInfo?.feeDetails?.message}</p>
          </div>
        </div>
        <div className="flex flex-col items-center border border-gray-200 hover:border-gray-300 rounded justify-evenly p-2 cursor-pointer">
          <div className="flex items-center gap-1 pb-2 border-b w-full justify-center">
            <img className="h-5" src="/images/rating.png" alt="Rating" />
            <span className="font-bold">{restaurantInfo?.avgRating}</span>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {restaurantInfo?.totalRatingsString}
          </span>
        </div>
      </div>
      {restaurantInfo?.availability?.nextOpenTimeMessage && (
        <div className="p-2 bg-gray-200 w-full rounded-lg text-orange-600">
          {restaurantInfo?.availability?.nextOpenTimeMessage}
        </div>
      )}
      <div className="border-b-2">
        <ul className="list-none flex gap-3 py-5  text-gray-800">
          <li className="flex justify-center items-center gap-1 font-bold text-base">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                stroke="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{restaurantInfo?.sla?.slaString}</span>
          </li>
          <li className="flex justify-center items-center gap-1 font-bold text-base">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                stroke="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{restaurantInfo?.costForTwoMessage}</span>
          </li>
        </ul>
        <div className=" gap-3 mb-5 flex overflow-x-hidden">
          {offers &&
            offers?.map((item, i) => <OfferCard item={item} key={i} />)}
        </div>
      </div>

      {restaurantCategories.map((category, i) => (
        <RestaurantMenuCategory restaurantCategories={category} key={i} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
