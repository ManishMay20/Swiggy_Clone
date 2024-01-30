import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body.jsx";
import Search from "./components/Search/Search.jsx";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu.jsx";
import Collections from "./components/Restaurants/Collections.jsx";
import Cart from "./components/Cart/Cart.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Auth from "./components/Auth/Auth.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/collections/:id",
        element: <Collections />,
      },

      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
