import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const CartCounterSlicer = createSlice({
  name: "CartCounter",
  initialState,

  reducers: {
    CartIncremented(state, action) {
      state = state + action.payload;
      return state;
    },
    CleanCart(state, action) {
      state = state * 0;
      return state;
    },
    CartDecremented(state, action) {
      state = state - action.payload;
      return state;
    },
  },
});

export const { CartIncremented, CleanCart, CartDecremented } =
  CartCounterSlicer.actions;
export default CartCounterSlicer.reducer;
