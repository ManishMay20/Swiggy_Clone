import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./restaurantsSlice";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    cart: cartSlice,
    search: searchSlice,
  },
});

export default appStore;
