import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartSliceState } from "../types/cart.types";
import { Item } from "../types/colavo.types";

const initialState: CartSliceState = {
  items: [],
  discounts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      if (state.items.some((item) => item.id === action.payload.id)) {
        return;
      }

      state.items.push({
        ...action.payload,
        totalPrice: 0,
        discount: 0,
      });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
