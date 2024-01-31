import React from "react";

const RestaurantMenuShimmer = () => {
  return (
    <div className=" md:w-4/5 lg:w-2/3 m-auto p-2">
      <div className="h-32 w-full my-6 bg-gray-200"></div>
      {Array(10)
        .fill()
        .map((e, i) => (
          <div className="h-28 w-full my-4 bg-gray-200" key={i}></div>
        ))}
    </div>
  );
};

export default RestaurantMenuShimmer;
