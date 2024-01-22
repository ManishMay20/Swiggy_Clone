import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className=" w-72 cursor-pointer shadow-2xl hover:shadow-md p-2">
      <div className="  h-44 ">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restaurant.info.cloudinaryImageId
          }
          alt="restaurant card"
        />
      </div>
      <div className="p-3 relative">
        <p className="absolute text-white font-extrabold text-xl z-10 -top-8">
          {restaurant.info.aggregatedDiscountInfoV3.header}
          {restaurant.info.aggregatedDiscountInfoV3.subHeader}
        </p>
        <p className="font-semibold text-lg leading-6 truncate">
          {restaurant.info.name}
        </p>
        <p className="font-semibold text-lg">
          Rating: {restaurant.info.avgRating}
        </p>
        <p className="text-gray-500 truncate">
          {restaurant.info.cuisines.join(", ")}
        </p>
        <p className="text-gray-500">{restaurant.info.areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
