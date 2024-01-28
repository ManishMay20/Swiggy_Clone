import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./restaurantsSlice";

const appStore = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
  },
});

export default appStore;
