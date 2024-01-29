import React, { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";

const RestaurantMenuCategory = ({ restaurantCategories }) => {
  const [isShow, setIsShow] = useState(true);
  const category = restaurantCategories?.card?.card;
  const items = category?.itemCards;

  if (!items) return;
  return (
    <div className="my-6 border-b-8">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          {category.title}
          {` (${category?.itemCards?.length})`}
        </h2>
        <div className="m-2" onClick={() => setIsShow(!isShow)}>
          {isShow ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
        </div>
      </div>
      {isShow &&
        items?.map((item) => (
          <RestaurantMenuCard
            data={item?.card?.info}
            key={item?.card?.info?.id}
          />
        ))}
    </div>
  );
};

export default RestaurantMenuCategory;
