import React, { useEffect, useRef, useState } from "react";
import BannerCard from "./BannerCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LeftRightArrowBtn from "../Buttons/LeftRightArrowBtn";

const extractCollectionId = (url) => {
  const regex = /collection_id=(\d+)/;
  const match = url.match(regex);
  return match && match[1];
};
const Banner = () => {
  const bannerCardData = useSelector((store) => store.restaurants.banner);
  const containerRef = useRef(null);

  if (!bannerCardData) return;

  return (
    <div className="border-b-2 pb-2 sm:pb-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl mt-3 sm:mt-5">
          {/* {bannerData?.header?.title} */}
          What's on your mind?
        </h1>
        <div className="">
          <LeftRightArrowBtn containerRef={containerRef} />
        </div>
      </div>
      <div className="flex overflow-x-hidden" ref={containerRef}>
        {bannerCardData &&
          bannerCardData[0]?.map((card) => (
            <Link
              to={`/collections/${
                extractCollectionId(card.entityId) || card.entityId
              }`}
              key={card.id}
            >
              <BannerCard data={card} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Banner;
