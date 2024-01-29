import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
  };

  if (!menuData) return;
  const restaurantInfo = menuData?.data?.cards[0]?.card?.card?.info;
  const restaurantCategories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!restaurantCategories) return <RestaurantMenuShimmer />;
  return (
    <div className="w-2/3 m-auto">
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
      <div className="flex justify-between mt-10 border-b-2 pb-6 ">
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
            <img className="h-5" src="/images/rating.png" />
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
