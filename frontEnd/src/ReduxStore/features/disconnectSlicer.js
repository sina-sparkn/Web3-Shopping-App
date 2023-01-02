import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const disconnectSlicer = createSlice({
  name: "disconnection",
  initialState,

  reducers: {
    DisconnectToggled(state, action) {
      if (action.payload) {
        return true;
      } else if (!action.payload) {
        return false;
      }
    },
  },
});

export const { DisconnectToggled } = disconnectSlicer.actions;
export default disconnectSlicer.reducer;
