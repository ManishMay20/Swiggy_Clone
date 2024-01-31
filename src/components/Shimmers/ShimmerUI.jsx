import BannerShimmer from "./BannerShimmer";
import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className=" w-full m-auto mt-6 ">
      <div className="flex overflow-x-hidden gap-5 my-6">
        {Array(8)
          .fill()
          .map((e, i) => (
            <BannerShimmer key={i} />
          ))}
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
