import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="w-4/5 m-auto">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
