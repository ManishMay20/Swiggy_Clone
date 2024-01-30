import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchResCard from "./SearchResCard";
import SearchDish from "./SearchDish";
import { SEARCH_API_URL } from "../../constans";

const SearchRes = () => {
  const [searchParams] = useSearchParams();
  const [resInfo, setResInfo] = useState([]);
  const [dishInfo, setDishInfo] = useState([]);

  let query = searchParams.get("query");
  let selectedPLTab = searchParams.get("selectedPLTab");

  useEffect(() => {
    fetchData();
  }, [query]);
  const fetchData = async () => {
    let response;
    if (selectedPLTab === "RESTAURANT") {
      response = await fetch(SEARCH_API_URL + query);
    } else if (selectedPLTab === "DISH") {
      response = await fetch(SEARCH_API_URL + query);
    }

    const json = await response.json();

    if (selectedPLTab === "RESTAURANT") {
      setResInfo(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
    } else if (selectedPLTab === "DISH") {
      setDishInfo(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    }
  };
  if (!resInfo && !dishInfo) return;

  let restaurants = resInfo[1]?.card?.card?.restaurants;

  return selectedPLTab === "DISH" ? (
    <SearchDish dishInfo={dishInfo} />
  ) : (
    <div className="w-full border bg-gray-50 rounded-lg">
      <div className="w-full p-2">
        <Link
          to={`/restaurants/${resInfo[0]?.card?.card.info?.id}`}
          key={resInfo[0]?.card?.card.info?.id}
        >
          <SearchResCard
            restaurant={resInfo[0]?.card?.card}
            resCost={resInfo[0]?.card?.card?.info?.costForTwoMessage}
          />
        </Link>
      </div>
      <h1 className="my-4 mt-10 px-3 font-semibold">More results like this</h1>
      <div className="w-full p-2">
        {restaurants &&
          restaurants?.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <SearchResCard restaurant={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchRes;
