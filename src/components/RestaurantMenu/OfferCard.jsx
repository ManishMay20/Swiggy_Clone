import React from "react";

const OfferCard = ({ item }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/";
  return (
    <div className="border p-2 min-w-52 max-w-52 text-gray-800 hover:border-2 cursor-pointer rounded-lg">
      <div className="flex">
        <img
          className="h-5 w-5 mr-2"
          src={IMG_URL + item?.info?.offerLogo}
          alt=""
        />
        <h1 className="font-semibold text-sm">{item?.info?.header}</h1>
      </div>
      <p className="font-semibold mt-1 text-gray-600 text-xs tracking-tight">
        {item?.info?.couponCode}
        {item?.info?.description && " | " + item?.info?.description}
      </p>
    </div>
  );
};

export default OfferCard;
