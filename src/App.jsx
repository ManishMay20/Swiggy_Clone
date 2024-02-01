import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Provider, useDispatch } from "react-redux";
import appStore from "./ReduxStore/appStore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://swiggy-api-00sh.onrender.com");
      const json = await data.json();
      console.log(json);
    };
    fetchData();
    console.log("hello welcome i am calling api");
  }, []);
  return (
    <Provider store={appStore}>
      <Header />
      <div className="w-full p-1 sm:w-11/12 md:w-4/5 m-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
