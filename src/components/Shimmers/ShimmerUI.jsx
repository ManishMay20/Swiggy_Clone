import BannerShimmer from "./BannerShimmer";
import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className=" w-full m-auto mt-6 ">
      <div className="flex w-full overflow-hidden gap-5 ">
        {Array(8)
          .fill()
          .map((e, i) => (
            <BannerShimmer key={i} />
          ))}
      </div>
      <div className=" flex flex-wrap mt-10 gap-5">
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
