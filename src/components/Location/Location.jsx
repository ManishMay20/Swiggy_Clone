import React, { useState, useEffect } from "react";

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);

  const fetchLocation = async () => {
    try {
      // Get current position
      const position = await getCurrentPosition();
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      // Fetch city using latitude and longitude
      const city = await fetchCity(
        position.coords.latitude,
        position.coords.longitude
      );
      setCity(city);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  // Function to get current position
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  // Function to fetch city using latitude and longitude
  const fetchCity = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      return (
        data.address.city ||
        data.address.town ||
        data.address.village ||
        data.address.county ||
        "City not found"
      );
    } catch (error) {
      console.error("Error fetching city:", error);
      return "City not found";
    }
  };

  // Call the function to fetch location

  return (
    <div className="cursor-pointer" onClick={() => fetchLocation()}>
      locate me
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          {city && <p>City: {city}</p>}
        </div>
      )}
    </div>
  );
};

export default Location;
