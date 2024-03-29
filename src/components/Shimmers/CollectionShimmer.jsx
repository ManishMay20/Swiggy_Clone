import React from "react";
import ShimmerCard from "./ShimmerCard";

const CollectionShimmer = () => {
  return (
    <div>
      <div className="w-full border border-[#d3d5df] m-auto mt-6 p-4 ">
        <div className="w-1/5 h-14 my-3 bg-gray-200 rounded-sm animate "></div>
        <div className="w-4/5 h-6 bg-gray-200 rounded-sm animate "></div>
      </div>
      <div className="grid mt-4 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(10)
          .fill()
          .map((e, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    </div>
  );
};

export default CollectionShimmer;
