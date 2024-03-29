import React from "react";

const SearchDishShimmer = () => {
  return (
    <div className="w-full flex flex-col  sm:flex-row flex-wrap justify-around gap-4 bg-gray-50 border border-[#d3d5df] p-4">
      {Array(10)
        .fill("")
        .map((item, index) => (
          <div
            key={index}
            className="h-64 w-full sm:w-[45%] mt-4 p-2  bg-white shadow-lg border border-[#d3d5df]"
          >
            <h3 className="w-full h-16 animate  bg-gray-200 mb-7"></h3>
            <div className="flex justify-between items-center">
              <div className=" w-full h-full">
                <div className="my-5 h-6 w-3/5 bg-gray-200 animate "></div>
                <div className="w-[45%] bg-gray-200 h-6 animate my-2"></div>
              </div>
              <div className="min-h-28 min-w-32 border rounded-lg bg-gray-200 animate "></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchDishShimmer;
