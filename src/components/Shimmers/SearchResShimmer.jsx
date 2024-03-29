import React from "react";

const SearchResShimmer = () => {
  return (
    <div className="w-full border bg-gray-50 rounded-lg">
      <div className="w-full p-2">
        <div className="flex cursor-pointer gap-3 items-center w-full my-3 p-2 border bg-white mx-1 ">
          <div className=" w-24 h-[88px]">
            <div className="h-full w-full bg-gray-200 animate rounded-lg"></div>
          </div>
          <div className="w-2/3 sm:w-3/4">
            <div className="h-5 w-1/4 my-3  font-medium bg-gray-200 animate sm:font-semibold"></div>
            <div className="h-5 w-1/3 my-3 font-medium bg-gray-200 animate sm:font-semibold"></div>
            <div className="h-5 w-1/2 my-3 font-medium bg-gray-200 animate sm:font-semibold"></div>
          </div>
        </div>
      </div>
      <h1 className="mt-10 mx-2 mb-6 w-4/5 bg-gray-200 h-6 animate"></h1>
      <div className="w-full ">
        {Array(10)
          .fill("")
          .map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer gap-3 items-center w-full my-3 p-2 border bg-white mx-1 "
            >
              <div className=" w-24 h-[88px]">
                <div className="h-full w-full bg-gray-200 animate rounded-lg"></div>
              </div>
              <div className="w-2/3 sm:w-3/4">
                <div className="h-5 w-1/4 my-3  font-medium bg-gray-200 animate sm:font-semibold"></div>
                <div className="h-5 w-1/3 my-3 font-medium bg-gray-200 animate sm:font-semibold"></div>
                <div className="h-5 w-1/2 my-3 font-medium bg-gray-200 animate sm:font-semibold"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResShimmer;
