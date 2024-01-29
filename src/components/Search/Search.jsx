import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { FiSearch } from "react-icons/fi";
import PopularCuisines from "./PopularCuisines";
import { useSearchParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchParams] = useSearchParams();
  let query = searchParams.get("query");
  useEffect(() => {
    // Define your API call function
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.7195687&lng=75.8577258&str=${searchText}&trackingId=undefined`
        );
        const json = await response.json();
        setSearchData(json?.data?.suggestions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // if (searchText !== "") {
    fetchData();
    // }
  }, [searchText]);

  useEffect(() => {
    query && setSearchText(query);
  }, [query]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  console.log(searchData);

  return (
    <div className="w-2/3 m-auto mt-10">
      <div className="relative">
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
          placeholder="Search for restaurants and food"
        />
      </div>
      {/* Render response data from API */}

      {!searchData ? (
        <PopularCuisines />
      ) : (
        searchData?.map((restaurant, i) => (
          <SearchCard restaurant={restaurant} key={restaurant?.cloudinaryId} />
        ))
      )}
    </div>
  );
};

export default Search;
