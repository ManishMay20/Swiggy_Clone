import React from "react";

const RestaurantCard = ({ restaurant }) => {
  if (!restaurant?.info) return null;
  return (
    <div className=" w-72 cursor-pointer transition-transform duration-300 transform   hover:scale-95 p-2">
      <div className=" h-44 ">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restaurant?.info?.cloudinaryImageId
          }
          alt="restaurant card"
        />
      </div>
      <div className="p-2 relative">
        {restaurant?.info?.aggregatedDiscountInfoV3?.header && (
          <p className="absolute text-white font-extrabold text-xl bg-gradient-to-t pl-3 from-black p-1 w-full z-10 -top-8 -left-0">
            {restaurant?.info?.aggregatedDiscountInfoV3?.header}
            {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}
          </p>
        )}
        <p className="font-semibold text-lg leading-6 truncate text-gray-800">
          {restaurant?.info?.name}
        </p>
        <div className="font-semibold flex items-center gap-1  text-gray-700">
          <img className="h-5" src="/images/rating.png" />
          <h3 className=" ">{restaurant?.info?.avgRating}</h3>
          <p> . {restaurant?.info?.sla?.slaString}</p>
        </div>
        <p className="text-gray-500 truncate">
          {restaurant?.info?.cuisines.join(", ")}
        </p>
        <p className="text-gray-500">{restaurant?.info?.areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
