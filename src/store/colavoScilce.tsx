import { createSlice } from "@reduxjs/toolkit";

import {
  CurrencyCode,
  FetchStatus,
  FetchDataState,
} from "../types/colavo.types";
import fetchData from "./FetchData";

const initialState: FetchDataState = {
  data: {
    currencyCode: CurrencyCode.KRW,
    items: {},
    discounts: {},
  },
  status: FetchStatus.IDLE,
  error: null,
};

const colavoSlice = createSlice({
  name: "colavo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = FetchStatus.LOADING;
      state.error = null;
    });

    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = FetchStatus.SUCCESS;
    });

    builder.addCase(fetchData.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }

      state.status = FetchStatus.FAIL;
    });
  },
});

export default colavoSlice.reducer;
