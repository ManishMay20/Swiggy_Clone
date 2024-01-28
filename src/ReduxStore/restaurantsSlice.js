import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    topRestaurants: [],
    onlineRestaurants: [],
    banner: [],
  },
  reducers: {
    addTopRestaurants: (state, action) => {
      state.topRestaurants.push(action.payload);
    },
    addOnlineRestaurants: (state, action) => {
      state.onlineRestaurants.push(action.payload);
    },
    addBanner: (state, action) => {
      state.banner.push(action.payload);
    },
  },
});

export const { addBanner, addTopRestaurants, addOnlineRestaurants } =
  restaurantsSlice.actions;

export default restaurantsSlice.reducer;
