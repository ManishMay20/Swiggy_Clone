import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./restaurantsSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    cart: cartSlice,
  },
});

export default appStore;
