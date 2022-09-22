import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  count: number;
  name: string;
  price: number;
}

interface CartSliceState {
  items: Item[];
}

const initialState: CartSliceState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [
        ...state.items,
        {
          ...action.payload,
          id: state.items.length,
        },
      ];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
