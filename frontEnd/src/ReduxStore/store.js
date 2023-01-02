import { configureStore } from "@reduxjs/toolkit";
import disconnectSlicer from "./features/disconnectSlicer";

export default configureStore({
  reducer: {
    Disconnect: disconnectSlicer,
  },
});
