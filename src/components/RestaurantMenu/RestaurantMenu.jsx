import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";
import { MENU_API_URL } from "../../constans";

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
  {
    for (let i = 0; i < menuData.data.cards.length; i++) {
      if (menuData?.data?.cards[i]?.card?.card?.info) {
        restaurantInfo = menuData?.data?.cards[0]?.card?.card?.info;
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
          <h2 className="text-lg font-semibold text-gray-900">
            {restaurantInfo?.name}
          </h2>
          <p className="text-xs text-gray-500">
            {restaurantInfo?.cuisines?.join(", ")}
          </p>
          <p className="text-xs text-gray-500">{restaurantInfo?.areaName}</p>
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
      {restaurantCategories.map((category, i) => (
        <RestaurantMenuCategory restaurantCategories={category} key={i} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
