import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;
      state.items[newItem.id] = { ...newItem, count: 1 };
    },
    incrementItemCount: (state, action) => {
      const id = action.payload;
      state.items[id].count++;
    },
    decrementItemCount: (state, action) => {
      const id = action.payload;
      if (state.items[id]?.count == 1) {
        delete state.items[id];
      } else {
        state.items[id].count--;
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItems, incrementItemCount, decrementItemCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
