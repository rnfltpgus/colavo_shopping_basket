import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartSliceState } from "../types/cart.types";
import { Discount, Item } from "../types/colavo.types";

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
    addDiscount: (state, action: PayloadAction<Discount>) => {
      const allItemIdsInCart = Object.values(state.items).map(
        (item) => item.id
      );

      const newDiscount = {
        ...action.payload,
        appliedItemIds: allItemIdsInCart,
        totalPrice: 0,
      };

      if (state.discounts.some((discount) => discount.id === newDiscount.id)) {
        return;
      }

      state.discounts.push(newDiscount);
    },
    removeDiscount: (state, action: PayloadAction<string>) => {
      state.discounts = state.discounts.filter(
        (discount) => discount.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem, addDiscount, removeDiscount } =
  cartSlice.actions;

export default cartSlice.reducer;
