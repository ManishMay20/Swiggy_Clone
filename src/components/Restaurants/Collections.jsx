import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "../Shimmers/ShimmerUI";

const Collections = () => {
  const { id } = useParams();
  const [collections, setCollections] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&collection=${id}&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      const json = await response.json();
      setCollections(json?.data?.cards);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!collections) return <ShimmerUI />;
  const resInfo = collections[0]?.card?.card;

  return (
    <div className="mt-14">
      <div className="my-6">
        <h1 className="text-4xl font-semibold text-gray-800 ">
          {resInfo?.title}
        </h1>
        <p className=" text-gray-700">{resInfo?.description}</p>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 ">
        Restaurants to explore
      </h1>
      <div className="flex flex-wrap gap-4">
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
