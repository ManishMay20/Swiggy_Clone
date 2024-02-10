import React, { useState } from "react";

const RestaurantCard = ({ restaurant }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoaded = () => {
    console.log("called");
    setIsLoaded(true);
  };

  if (!restaurant?.info) {
    return <div className="bg-gray-200 p-4 rounded-lg">Data not available</div>;
  }

  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
  } = restaurant.info;

  return (
    <div className="cursor-pointer transition-transform duration-300 transform hover:scale-95 p-2">
      <div>
        {!isLoaded && (
          <div
            className="aspect-video object-cover rounded-lg"
            style={{ backgroundColor: "#f0f0f0" }}
          ></div>
        )}
        <img
          className="aspect-video object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
          onLoad={handleImageLoaded}
          alt={name}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
      <div className="p-2 relative">
        {aggregatedDiscountInfoV3?.header && (
          <p className="absolute text-white font-semibold md:font-extrabold text-base md:text-xl bg-gradient-to-t pl-3 from-black p-1 w-full z-10 -top-8 -left-0">
            {aggregatedDiscountInfoV3.header}
            {aggregatedDiscountInfoV3.subHeader}
          </p>
        )}
        <p className="font-semibold text-base md:text-lg leading-6 truncate text-gray-800">
          {name}
        </p>
        <div className="font-semibold flex items-center gap-1 text-gray-700 text-sm md:text-lg">
          <img className="h-4 sm:h-5" src="/images/rating.png" alt="Rating" />
          <h3>{avgRating}</h3>
          <p> . {sla?.slaString}</p>
        </div>
        <p className="text-gray-500 truncate text-sm md:text-lg">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-500 text-sm md:text-lg">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
