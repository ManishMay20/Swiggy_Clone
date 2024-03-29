import React, { useContext, useEffect, useState } from "react";
import { IMG_URL, SEARCH_LANDING_API_URL } from "../../constans";
import { Link } from "react-router-dom";
import { LocationContext } from "../../App";

const extractCuisinesName = (url) => {
  const regex = /query=([a-zA-Z]+)/;
  const match = url.match(regex);

  return match && match[1];
};

const PopularCuisines = () => {
  const { location, setLocation } = useContext(LocationContext);
  const [cuisines, setCuisines] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `${SEARCH_LANDING_API_URL}lat=${location?.latitude}&lng=${location?.longitude}`
      );
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();
      setCuisines(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700 my-3">Popular Cuisines</h1>
      <div className="flex gap-3 overflow-hidden">
        {cuisines?.map((items, index) => (
          <Link
            to={`/search?query=${extractCuisinesName(items?.entityId)}`}
            key={index}
          >
            <div className="min-h-20 min-w-20 max-w-20">
              <img
                className="h-full w-full object-cover"
                src={IMG_URL + items.imageId}
                alt="cuisine"
              />
            </div>
          </Link>
        ))}
        <div className="bg-gray-50 flex overflow-hidden gap-3 p-3  border border-[#d3d5df] w-full shadow-sm">
          {!cuisines &&
            Array(10)
              .fill("")
              .map((item, index) => (
                <div
                  key={index}
                  className=" min-h-20 min-w-20 max-w-20  rounded-full bg-gray-200 animate "
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCuisines;
