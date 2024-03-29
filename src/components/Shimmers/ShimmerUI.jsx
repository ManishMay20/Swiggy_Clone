import { useEffect } from "react";
import BannerShimmer from "./BannerShimmer";
import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-full  m-auto mt-6 ">
      <div className="flex bg-white rounded-sm border border-[#d3d5df] shadow-lg p-4 py-6  overflow-x-hidden gap-5 my-6">
        {Array(8)
          .fill()
          .map((e, i) => (
            <BannerShimmer key={i} />
          ))}
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

export default ShimmerUI;
