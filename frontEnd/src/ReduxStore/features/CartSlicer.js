import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlicer = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    AddtoCart(state, action) {
      let status = false;
      let prevCount;
      state.map((item, index) => {
        if (item.name === action.payload.name) {
          prevCount = state[index].count;
          state[index] = {
            name: action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
            category: action.payload.category,
            count: prevCount + 1,
          };
          status = true;
        }
      });
      if (!status) {
        state.unshift({
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          category: action.payload.category,
          count: 1,
        });
      }
    },
    RemoveAllCart(state, action) {
      state = state.splice(0, state.length);
    },
    RemoveFromCart(state, action) {
      let morethan1 = false;
      state.map((item, index) => {
        if (item.name === action.payload.name && item.count > 1) {
          morethan1 = true;
          state[index].count = state[index].count - 1;
        }
      });
      if (!morethan1) {
        return state.filter((item) => item.name != action.payload.name);
      }
    },
  },
});

export const { AddtoCart, RemoveAllCart, RemoveFromCart } = CartSlicer.actions;
export default CartSlicer.reducer;
