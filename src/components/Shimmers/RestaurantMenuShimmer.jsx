import React from "react";

const RestaurantMenuShimmer = () => {
  window.scrollTo(0, 0);
  return (
    <div className=" md:w-4/5 lg:w-2/3 m-auto ">
      <div className="h-52 w-full my-6 mb-8  p-2 flex justify-between items-center  bg-white shadow-lg border border-[#d3d5df] ">
        <div className="w-full h-full">
          <div className="h-3 w-1/3 animate bg-gray-200"></div>
          <div className="mt-12 h-7 w-3/5 bg-gray-200 animate "></div>
          <div className="w-1/3 bg-gray-200 h-5 animate mt-4"></div>
          <div className="w-1/3 bg-gray-200 h-5 animate my-2"></div>
          <div className="h-3 w-4/5 animate bg-gray-200 mt-4"></div>
        </div>
        <div className="h-32 w-28 border rounded-lg bg-gray-200 animate "></div>
      </div>
      {Array(10)
        .fill()
        .map((e, i) => (
          <div
            className="h-36 w-full mt-4 p-2 flex justify-between items-center bg-white shadow-lg border border-[#d3d5df]"
            key={i}
          >
            <div className=" w-full h-full">
              <div className="my-5 h-6 w-3/5 bg-gray-200 animate "></div>
              <div className="w-1/2 bg-gray-200 h-6 animate my-2"></div>
            </div>
            <div className="h-28 w-32 border rounded-lg bg-gray-200 animate "></div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenuShimmer;
