import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
  };

  const restaurantInfo = menuData?.data?.cards[0]?.card?.card?.info;
  const restaurantCategories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!restaurantCategories) return;
  console.log(restaurantCategories);
  return (
    <div className="w-2/3 m-auto">
      <div className="flex justify-between mt-10 p-2 border-b-2 pb-6 ">
        <div className="">
          <h2 className="text-2xl font-bold">{restaurantInfo?.name}</h2>
          <p>{restaurantInfo?.cuisines?.join(", ")}</p>
          <p>{restaurantInfo?.areaName}</p>
        </div>
        <div className="flex flex-col items-center border border-gray-200 hover:border-gray-300 rounded justify-evenly p-2 cursor-pointer">
          <div className="flex items-center gap-1 pb-2 border-b w-full justify-center">
            <FcRating />
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
