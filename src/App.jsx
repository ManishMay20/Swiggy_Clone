import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";

function App() {
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
