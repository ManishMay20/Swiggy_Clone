import React, { useContext, useState } from "react";
import { CityContext, LocationContext } from "../../App";
import { CiGps } from "react-icons/ci";
import { BsPinMap } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { clearRestaurants } from "../../ReduxStore/restaurantsSlice";
import { useDispatch } from "react-redux";

const SideBar = ({ sideBar, setSideBar }) => {
  const [searchText, setSearchText] = useState("");
  const [locationData, setLocationData] = useState(null);
  const dispatch = useDispatch();

  const { location, setLocation } = useContext(LocationContext);
  const { city, setCity } = useContext(CityContext);

  const fetchData = async (query) => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/misc/place-autocomplete?input=" + searchText
    );
    const json = await data.json();
    setLocationData(json?.data);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
    fetchData(searchText);
  };

  const fetchCity = async (place_id) => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/misc/address-recommend?place_id=" + place_id
    );
    const json = await data.json();
    const loca = json?.data[0]?.geometry?.location;
    setLocation({ latitude: loca?.lat, longitude: loca?.lng });
    dispatch(clearRestaurants());
    setCity(json?.data[0]?.formatted_address);
  };

  const handleClick = (place_id) => {
    setSideBar(false);
    fetchCity(place_id);
  };
  const successCallback = (position) => {
    const { latitude, longitude } = position?.coords;
    dispatch(clearRestaurants());
    setLocation({
      latitude: latitude,
      longitude: longitude,
    });
    fetchCurrentCity(latitude, longitude);
  };
  const fetchCurrentCity = async (latitude, longitude) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/misc/address-recommend?latlng=${latitude}%2C${longitude}`
    );
    const json = await data.json();
    setCity(json?.data[0]?.formatted_address);
  };
  const errorCallback = (error) => {
    console.log(error);
  };

  const getCurrentLocation = () => {
    setSideBar(false);
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };
  return (
    <div
      className={`h-screen w-full sm:w-[300px] md:w-[600px] bg-zinc-50 transition-transform absolute top-0 left-0  duration-500 shadow-xl ${
        sideBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="container w-full md:w-4/5 float-right p-5 px-2 md:px-20  ">
        <div onClick={() => setSideBar(false)} className="cursor-pointer my-7 ">
          <RxCross1 size={25} />
        </div>
        <div className="w-full ">
          <input
            onChange={handleChange}
            className="p-3 w-full outline-none border  border-orange-600"
            type={searchText}
            placeholder="Search for area, street name.."
          />
        </div>
        <div className="flex  justify-center border mt-5 p-2 border-gray-500 gap-4 ">
          <div className="pt-2">
            <div>
              <CiGps size={25} />
            </div>
          </div>
          <div
            onClick={() => getCurrentLocation()}
            className="w-full  pb-2 border-gray-400  cursor-pointer "
          >
            <p className="font-medium text-base pb-1">Get Current Location</p>
            <p className="text-xs font-medium text-gray-600">Using GPS</p>
          </div>
        </div>
        <div className="flex w-full flex-col  pt-5">
          {locationData?.map((item, index) => (
            <div
              key={item?.place_id}
              className="flex  justify-center gap-4 p-2"
            >
              <div className="pt-2">
                <BsPinMap />
              </div>
              <div
                onClick={() => handleClick(item?.place_id)}
                className="w-full border-b-2 pb-2 border-gray-400  cursor-pointer "
              >
                <p className="font-medium text-base ">
                  {item?.structured_formatting?.main_text}
                </p>
                <p className="text-xs font-medium text-gray-600">
                  {item?.structured_formatting?.secondary_text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
