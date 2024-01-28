import React from "react";
import { IMG_URL } from "../../constans";

const SearchCard = ({ restaurant }) => {
  return (
    <div className="flex items-center cursor-pointer gap-3 my-3 hover:bg-gray-200">
      <div className="h-16 w-16 m-2">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={IMG_URL + restaurant?.cloudinaryId}
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
