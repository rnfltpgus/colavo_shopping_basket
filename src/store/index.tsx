import { configureStore } from "@reduxjs/toolkit";
import * as reduxThunk from "redux-thunk/extend-redux";

import cartSlice from "./cartSlice";
import colavoSlice from "./colavoScilce";
import { Items } from "../types/colavo.types";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    colavo: colavoSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectItems = (state: RootState): Items => state.colavo.data.items;

export default store;