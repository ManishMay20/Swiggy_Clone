import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchResCard from "./SearchResCard";
import SearchDish from "./SearchDish";
import { SEARCH_API_URL } from "../../constans";
import { LocationContext } from "../../App";
import SearchResShimmer from "../Shimmers/SearchResShimmer";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";
import SearchDishShimmer from "../Shimmers/SearchDishShimmer";

const SearchRes = () => {
  const [searchParams] = useSearchParams();
  const [resInfo, setResInfo] = useState([]);
  const [dishInfo, setDishInfo] = useState([]);
  const { location, setLocation } = useContext(LocationContext);

  let query = searchParams.get("query");
  let selectedPLTab = searchParams.get("selectedPLTab");

  useEffect(() => {
    fetchData();
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    let response;
    if (selectedPLTab === "DISH") {
      response = await fetch(
        `${SEARCH_API_URL}${query}&lat=${location?.latitude}&lng=${location?.longitude}&selectedPLTab=DISH`
      );
    } else {
      response = await fetch(
        `${SEARCH_API_URL}${query}&lat=${location?.latitude}&lng=${location?.longitude}&selectedPLTab=RESTAURANT`
      );
    }

    const json = await response.json();

    if (selectedPLTab === "DISH") {
      setDishInfo(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH?.cards);
    } else {
      setResInfo(
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
    }
  };

  if ((!resInfo || !resInfo.length) && (!dishInfo || !dishInfo.length)) {
    return selectedPLTab === "DISH" ? (
      <SearchDishShimmer />
    ) : (
      <SearchResShimmer />
    );
  }

  return selectedPLTab === "DISH" ? (
    <SearchDish dishInfo={dishInfo} />
  ) : (
    <div className="w-full border bg-gray-50 rounded-lg">
      <div className="w-full p-2">
        <Link
          to={`/restaurants/${resInfo[0]?.card?.card?.info?.id}`}
          key={resInfo[0]?.card?.card.info?.id}
        >
          <SearchResCard
            restaurant={resInfo[0]?.card?.card}
            resCost={resInfo[0]?.card?.card?.info?.costForTwoMessage}
          />
        </Link>
      </div>
      <h1 className="my-4 mt-10 px-3 font-semibold">More results like this</h1>
      <div className="w-full sm:p-2">
        {resInfo &&
          resInfo?.map((item) => (
            <Link
              to={`/restaurants/${item?.card?.card?.info?.id}`}
              key={item?.card?.card?.info?.id}
            >
              <SearchResCard restaurant={item?.card?.card} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchRes;
