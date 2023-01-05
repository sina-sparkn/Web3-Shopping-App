import { configureStore } from "@reduxjs/toolkit";
import disconnectSlicer from "./features/disconnectSlicer";
import ClothesSlicer from "./features/ClothesSlicer";
import AccessoriesSlicer from "./features/AccessoriesSlicer";
import WatchesSlicer from "./features/WatchesSlicer";

export default configureStore({
  reducer: {
    Disconnect: disconnectSlicer,
    Tshirts: ClothesSlicer,
    Accessories: AccessoriesSlicer,
    Watches: WatchesSlicer,
  },
});
