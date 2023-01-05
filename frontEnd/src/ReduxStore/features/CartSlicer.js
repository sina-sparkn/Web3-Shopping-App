import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlicer = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    AddtoCart(state, action) {
      state.push({
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
      });
    },
    RemovefromCart(state, action) {
      // return state.filter((item) => e.item != action.payload);
    },
  },
});

export const { AddtoCart, RemovefromCart, CartCounterFunc } =
  CartSlicer.actions;
export default CartSlicer.reducer;
