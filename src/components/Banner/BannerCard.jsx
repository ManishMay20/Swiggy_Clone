import React, { useState } from "react";
import { IMG_URL } from "../../constans";

const BannerCard = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className=" min-w-24 sm:min-w-28 md:min-w-36">
      {!isLoaded && (
        <div
          className="w-[144px] h-[180px] mx-1 sm:mx-3 "
          style={{ backgroundColor: "#f0f0f0" }}
        ></div>
      )}
      <img
        className="mx-1  sm:mx-3"
        width="144px"
        height="180px"
        src={IMG_URL + data.imageId}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
};

export default BannerCard;
