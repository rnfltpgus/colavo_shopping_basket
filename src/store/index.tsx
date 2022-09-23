import { configureStore } from "@reduxjs/toolkit";
import * as reduxThunk from "redux-thunk/extend-redux";

import cartSlice from "./cartSlice";
import colavoSlice from "./colavoScilce";
import { Discounts, Items } from "../types/colavo.types";
import { CartDiscount, CartItem, CartSliceState } from "../types/cart.types";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    colavo: colavoSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCart = (state: RootState): CartSliceState => state.cart;
export const selectCartItems = (state: RootState): CartItem[] =>
  state.cart.items;
export const selectCartDiscounts = (state: RootState): CartDiscount[] =>
  state.cart.discounts;
export const selectItems = (state: RootState): Items => state.colavo.data.items;
export const selectDiscounts = (state: RootState): Discounts =>
  state.colavo.data.discounts;

export default store;
