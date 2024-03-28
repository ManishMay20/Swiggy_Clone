import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import { createContext, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const LocationContext = createContext();
export const CityContext = createContext();

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [location, setLocation] = useState({
    latitude: 22.7268923,
    longitude: 75.9448725,
  });

  const [city, setCity] = useState("Indore");

  useEffect(() => {
    const successCallback = (position) => {
      const { latitude, longitude } = position?.coords;
      setLocation({
        latitude: latitude,
        longitude: longitude,
      });
    };
    const errorCallback = (error) => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <Provider store={appStore}>
      <LocationContext.Provider
        value={{ location: location, setLocation: setLocation }}
      >
        <CityContext.Provider value={{ city: city, setCity: setCity }}>
          <Header />
          <div className="w-full p-1 sm:w-11/12 md:w-4/5 m-auto min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </CityContext.Provider>
      </LocationContext.Provider>
    </Provider>
  );
}

export default App;
