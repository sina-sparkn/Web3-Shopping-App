import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const IsAccountSlicer = createSlice({
  name: "IsAccount",
  initialState,

  reducers: {
    ChangeAccountTrue(state, action) {
      if (action.payload) {
        return true;
      } else if (!action.payload) {
        return false;
      }
    },
  },
});

export const { ChangeAccountTrue } = IsAccountSlicer.actions;
export default IsAccountSlicer.reducer;
