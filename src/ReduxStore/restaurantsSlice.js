import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    topRestaurants: [],
    onlineRestaurants: [],
    banner: [],
    topResTitle: "",
    onlineResTitle: "",
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
    addTopResTitle: (state, action) => {
      // state.topResTitle.length = 0;
      state.topResTitle = action.payload;
    },
    addOnlineResTitle: (state, action) => {
      // state.onlineResTitle.length = 0;
      state.onlineResTitle = action.payload;
    },
    clearRestaurants: (state, action) => {
      state.topRestaurants.length = 0;
      state.onlineRestaurants.length = 0;
      state.banner.length = 0;
    },
  },
});

export const {
  addBanner,
  addTopRestaurants,
  addOnlineRestaurants,
  addTopResTitle,
  addOnlineResTitle,
  clearRestaurants,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
