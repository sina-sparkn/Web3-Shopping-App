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
    RemoveAllCart(state, action) {
      state = state.splice(0, state.length);
    },
    RemoveFromCart(state, action) {
      state = state.filter((item) => {});
    },
  },
});

export const { AddtoCart, RemoveAllCart, RemoveFromCart } = CartSlicer.actions;
export default CartSlicer.reducer;
