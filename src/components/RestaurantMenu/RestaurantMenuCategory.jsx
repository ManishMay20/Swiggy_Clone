import React, { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantMenuCategory = ({ restaurantCategories }) => {
  const [isShow, setIsShow] = useState(true);
  const category = restaurantCategories?.card?.card;
  const items = category?.itemCards;

  if (!items) return;
  return (
    <div className="my-6 border-b-8">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{category.title}</h2>
        <div className="m-2" onClick={() => setIsShow(!isShow)}>
          {isShow ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
        </div>
      </div>
      {isShow &&
        items?.map((item) => (
          <RestaurantMenuCard items={item} key={item?.card?.info?.id} />
        ))}
    </div>
  );
};

export default RestaurantMenuCategory;
