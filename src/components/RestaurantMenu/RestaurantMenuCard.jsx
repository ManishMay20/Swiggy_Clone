import React from "react";
import { IMG_URL } from "../../constans";

const RestaurantMenuCard = ({ items }) => {
  const data = items?.card?.info;
  const foodType = data?.itemAttribute?.vegClassifier;
  const isBestseller = data?.isBestseller;
  if (!data) return;
  return (
    <div className="flex justify-between pb-10 border-b-2 p-2 my-6">
      <div>
        <div className="flex gap-3 items-end">
          {foodType === "VEG" ? (
            <img className="w-5" src={`/images/VEG.png`} />
          ) : (
            <img className="w-5" src={`/images/NONVEG.png`} />
          )}
          {isBestseller && (
            <div className="flex items-center gap-1">
              <img className="w-3 h-3" src="/images/bestseller.png" />
              <p className="text-yellow-500 font-bold text-xs"> Best Seller</p>
            </div>
          )}
        </div>
        <h2 className="font-bold text-lg mt-2">{data?.name}</h2>
        <p>₹ {data?.price / 100}</p>
      </div>
      <div className="h-28 w-32 relative">
        {data?.imageId && (
          <img
            className="w-full h-full rounded-lg object-cover"
            src={IMG_URL + data?.imageId}
            alt="items_image"
          />
        )}
        <button className="bg-white text-xs font-bold px-6 py-2 rounded shadow-sm hover:shadow-lg absolute text-green-400 cursor-pointer border -bottom-2 left-1/2 transform -translate-x-1/2">
          ADD
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
