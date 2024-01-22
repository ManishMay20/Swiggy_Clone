import React, { useEffect, useState } from "react";
import BannerCard from "./BannerCard";
import useData from "../../helper/useData";

const Banner = () => {
  const apiInfo = useData();
  if (!apiInfo) return null;
  const bannerData = apiInfo.data.cards[0].card.card;

  const bannerCardData = bannerData?.gridElements?.infoWithStyle?.info;
  return (
    <div className="border-b-2 pb-4">
      <h1 className="font-bold text-2xl p-2 mt-3">
        {bannerData?.header?.title}
      </h1>
      <div className="flex overflow-x-hidden">
        {bannerCardData.map((card) => (
          <BannerCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
