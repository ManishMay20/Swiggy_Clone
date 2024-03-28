import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "../Shimmers/ShimmerUI";
import { COLLECTION_API_URL } from "../../constans";
import { LocationContext } from "../../App";

const Collections = () => {
  const { id } = useParams();
  const { location, setLocation } = useContext(LocationContext);
  const [collections, setCollections] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${COLLECTION_API_URL}${id}&lat=${location.latitude}&lng=${location.longitude}`
      );
      const json = await response.json();
      setCollections(json?.data?.cards);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  if (!collections) return <ShimmerUI />;
  const resInfo = collections[0]?.card?.card;

  return (
    <div className="mt-3 p-2 md:mt-8 lg:mt-12">
      <div className="my-3 md:my-5 lg:my-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-800 ">
          {resInfo?.title}
        </h1>
        <p className=" text-gray-700">{resInfo?.description}</p>
      </div>
      <h1 className="text-lg sm:text-xl  lg:text-2xl font-semibold text-gray-800 ">
        Restaurants to explore
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {collections.map((data, i) => {
          return data?.card?.card?.info ? (
            <Link
              to={"/restaurants/" + data?.card?.card?.info?.id}
              key={data?.card?.card?.info?.id}
            >
              <RestaurantCard restaurant={data?.card?.card} />
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Collections;
