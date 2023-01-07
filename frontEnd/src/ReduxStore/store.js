import { configureStore } from "@reduxjs/toolkit";
import disconnectSlicer from "./features/disconnectSlicer";
import ClothesSlicer from "./features/ClothesSlicer";
import AccessoriesSlicer from "./features/AccessoriesSlicer";
import WatchesSlicer from "./features/WatchesSlicer";
import CartSlicer from "./features/CartSlicer";
import CartCounterSlicer from "./features/CartCounterSlicer";
import IsAccountSlicer from "./features/IsAccountSlicer";

export default configureStore({
  reducer: {
    Disconnect: disconnectSlicer,
    Tshirts: ClothesSlicer,
    Accessories: AccessoriesSlicer,
    Watches: WatchesSlicer,
    Cart: CartSlicer,
    CartCounter: CartCounterSlicer,
    Account: IsAccountSlicer,
  },
});
