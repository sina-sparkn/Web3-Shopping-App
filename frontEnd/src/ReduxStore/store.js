import { configureStore } from "@reduxjs/toolkit";
import disconnectSlicer from "./features/disconnectSlicer";
import ClothesSlicer from "./features/ClothesSlicer";

export default configureStore({
  reducer: {
    Disconnect: disconnectSlicer,
    Clothes: ClothesSlicer,
  },
});
