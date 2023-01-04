import { configureStore } from "@reduxjs/toolkit";
import disconnectSlicer from "./features/disconnectSlicer";
import ClothesSlicer from "./features/ClothesSlicer";
import AccessoriesSlicer from "./features/AccessoriesSlicer";

export default configureStore({
  reducer: {
    Disconnect: disconnectSlicer,
    Clothing: ClothesSlicer,
    Accessories: AccessoriesSlicer,
  },
});
