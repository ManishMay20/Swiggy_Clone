import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { FiSearch } from "react-icons/fi";
import PopularCuisines from "./PopularCuisines";
import { Link, useSearchParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import SearchRes from "./SearchRes";
import { SEARCH_SUGGESTIONS_API_URL } from "../../constans";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../ReduxStore/searchSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchParams] = useSearchParams();
  let query = searchParams.get("query");
  const [showResDetail, setShowResDetail] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // debouncing reducing number of api calls
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchData(searchCache[searchText]);
      } else {
        fetchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  useEffect(() => {
    scrollTo(0, 0);
  }, [searchData]);

  const fetchData = async () => {
    try {
      const response = await fetch(SEARCH_SUGGESTIONS_API_URL + searchText);
      const json = await response.json();
      setSearchData(json?.data?.suggestions);
      // caching
      dispatch(
        cacheResults({
          [searchText]: json?.data?.suggestions,
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    query && setSearchText(query);
  }, [query]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="p-2 lg:w-4/5 xl:w-2/3 m-auto mt-3 md:mt-5 xl:mt-6 relative">
      <div className="sticky top-14 lg:top-16 pt-2 sm:pt-6 md:pt-10 bg-white z-10">
        <span className="absolute right-3 translate-y-1/2 cursor-pointer ">
          {!searchText ? (
            <FiSearch size={25} className="text-gray-600" />
          ) : (
            <RxCross2
              size={25}
              className="text-gray-600"
              onClick={() => setSearchText("")}
            />
          )}
        </span>

        <input
          className="w-full border mb-6 border-gray-400 text-gray-600 outline-0 font-semibold px-4 py-3"
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onClick={() => setShowResDetail(false)}
          placeholder="Search for restaurants and food"
        />
      </div>
      {/* Render response data from API */}
      {showResDetail && <SearchRes />}
      {!searchData && <PopularCuisines />}{" "}
      {!showResDetail &&
        searchData?.map((restaurant, i) => (
          <Link
            onClick={() => setShowResDetail(true)}
            to={`/search?query=${restaurant?.text}&selectedPLTab=${restaurant.type}`}
            key={`${restaurant?.cloudinaryId}-${i}`}
          >
            <SearchCard restaurant={restaurant} />
          </Link>
        ))}
    </div>
  );
};

export default Search;
