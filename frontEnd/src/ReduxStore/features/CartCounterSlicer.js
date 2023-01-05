import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const CartCounterSlicer = createSlice({
  name: "CartCounter",
  initialState,

  reducers: {
    CartIncremented(state, action) {
      return (state = state + action.payload);
    },
  },
});

export const { CartIncremented } = CartCounterSlicer.actions;
export default CartCounterSlicer.reducer;
