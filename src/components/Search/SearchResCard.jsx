import React from "react";
import { IoIosStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";
const Image_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

const SearchResCard = ({ restaurant, resCost }) => {
  let costForTwo = restaurant?.info?.costForTwoMessage;

  restaurant = restaurant?.info;
  return (
    <div className="flex cursor-pointer gap-3 items-center w-full my-3 p-2 border bg-white mx-1 ">
      <div className=" w-24 h-[88px]">
        <img
          className="h-full w-full min-w-fit object-cover rounded-lg"
          src={Image_url + restaurant?.cloudinaryImageId}
        />
      </div>
      <div className="w-2/3 sm:w-3/4">
        <h1 className="text-base font-medium  sm:font-semibold text-gray-800">
          {restaurant?.name}
        </h1>
        <div className="flex text-gray-700 items-center gap-1 text-xs sm:text-sm font-medium">
          <div className="flex  ">
            <IoIosStar />
            <p className="pl-[2px]">{restaurant?.avgRating}</p>
          </div>
          <span className="flex items-center justify-center">
            <LuDot />
          </span>
          <div>
            {restaurant?.sla?.minDeliveryTime}-
            {restaurant?.sla?.maxDeliveryTime} MINS
          </div>
          <span>
            <LuDot />
          </span>
          <div>{costForTwo}</div>
        </div>
        <p className="text-sm text-gray-400 truncate">
          {restaurant?.cuisines?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SearchResCard;
