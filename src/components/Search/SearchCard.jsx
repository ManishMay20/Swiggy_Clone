import React, { useState } from "react";
import { IMG_URL } from "../../constans";

const SearchCard = ({ restaurant }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="flex items-center cursor-pointer gap-3 my-3 hover:bg-gray-200">
      <div className="h-16 w-16 m-2">
        {!isLoaded && (
          <div
            className="h-full w-full object-cover rounded-lg"
            style={{ backgroundColor: "#f0f0f0" }}
          ></div>
        )}
        <img
          className="h-full w-full object-cover rounded-lg"
          src={IMG_URL + restaurant?.cloudinaryId}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
      <div>
        <h1 className="text-sm text-gray-700">{restaurant?.text}</h1>
        <p className="text-xs text-gray-500">{restaurant?.tagToDisplay}</p>
      </div>
    </div>
  );
};

export default SearchCard;
