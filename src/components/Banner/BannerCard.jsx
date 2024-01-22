import React from "react";

const BannerCard = ({ data }) => {
  return (
    <div className="min-w-36">
      <img
        className=" mx-3"
        width="144px"
        height="180px"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          data.imageId
        }
      />
    </div>
  );
};

export default BannerCard;
