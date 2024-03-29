const ShimmerCard = () => {
  return (
    <div className=" flex justify-center items-center flex-col border border-[#d3d5df] rounded-sm bg-white shadow-lg p-2">
      <div className="w-full aspect-video bg-gray-200 rounded-lg animate"></div>

      <div className="flex gap-2 mt-3  flex-col w-full">
        <div className="w-4/5 h-6 bg-gray-200 rounded-sm animate "></div>

        <div className="flex justify-start items-start gap-2 h-6 flex-row w-full">
          <div className="w-1/5 h-6 bg-gray-200 rounded-sm  animate"></div>
          <div className="w-2/5 h-6 bg-gray-200 rounded-sm  animate "></div>
        </div>

        <div className="w-full h-6 my-2 bg-gray-200 rounded-sm animate "></div>
      </div>
    </div>
  );
};
export default ShimmerCard;
