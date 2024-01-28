import React, { useEffect, useRef, useState } from "react";
import BannerCard from "./BannerCard";
import { useSelector } from "react-redux";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import LeftRightArrowBtn from "../Buttons/LeftRightArrowBtn";

const extractCollectionId = (url) => {
  const regex = /collection_id=(\d+)/;
  const match = url.match(regex);
  return match && match[1]; // Returns the collection_id value or null if not found
};
const Banner = () => {
  const bannerCardData = useSelector((store) => store.restaurants.banner);
  const containerRef = useRef(null);

  if (!bannerCardData) return;

  console.log(bannerCardData);
  return (
    <div className="border-b-2 pb-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl mt-5">
          {/* {bannerData?.header?.title} */}
          What's on your mind?
        </h1>
        <LeftRightArrowBtn containerRef={containerRef} />
      </div>
      <div className="flex overflow-x-hidden" ref={containerRef}>
        {bannerCardData &&
          bannerCardData[0]?.map((card) => (
            <Link
              to={`/collections/${extractCollectionId(card.entityId)}`}
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
