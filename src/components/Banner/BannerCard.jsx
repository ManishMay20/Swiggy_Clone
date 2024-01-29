import React from "react";
import { IMG_URL } from "../../constans";

const BannerCard = ({ data }) => {
  return (
    <div className="min-w-36">
      <img
        className=" mx-3"
        width="144px"
        height="180px"
        src={IMG_URL + data.imageId}
      />
    </div>
  );
};

export default BannerCard;
