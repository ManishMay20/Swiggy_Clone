import React, { useEffect, useState } from "react";
import { IMG_URL, SEARCH_LANDING_API_URL } from "../../constans";
import { Link } from "react-router-dom";

const extractCuisinesName = (url) => {
  const regex = /query=([a-zA-Z]+)/;
  const match = url.match(regex);
  return match && match[1];
};

const PopularCuisines = () => {
  const [cuisines, setCuisines] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SEARCH_LANDING_API_URL);
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
        {cuisines?.map((items) => (
          <Link
            to={`/search?query=${extractCuisinesName(items?.entityId)}`}
            key={items?.id}
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
        {!cuisines && <p>No popular cuisines available</p>}
      </div>
    </div>
  );
};

export default PopularCuisines;
