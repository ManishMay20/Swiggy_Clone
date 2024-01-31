const ShimmerCard = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="w-full aspect-video bg-gray-200 rounded-lg animate-pulse"></div>

      <div className="flex gap-2 mt-5  flex-col w-full">
        <div className="w-3/4 h-4 bg-gray-200 rounded-lg animate-pulse "></div>

        <div className="flex justify-start items-start gap-2 h-4 flex-row w-full">
          <div className="w-4/12 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-4/12 h-4 bg-gray-200 rounded-lg animate-pulse "></div>
        </div>

        <div className="w-4/12 h-4 bg-gray-200 rounded-lg animate-pulse "></div>
      </div>
    </div>
  );
};
export default ShimmerCard;
