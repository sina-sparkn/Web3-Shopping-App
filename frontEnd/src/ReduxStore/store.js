import { configureStore } from "@reduxjs/toolkit";
//slices
import disconnectSlicer from "./features/disconnectSlicer";
import ClothesSlicer from "./features/ClothesSlicer";
import AccessoriesSlicer from "./features/AccessoriesSlicer";
import WatchesSlicer from "./features/WatchesSlicer";
import CartSlicer from "./features/CartSlicer";
import CartCounterSlicer from "./features/CartCounterSlicer";
import IsAccountSlicer from "./features/IsAccountSlicer";
//persist redux
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const Reducers = combineReducers({
  Disconnect: disconnectSlicer,
  Tshirts: ClothesSlicer,
  Accessories: AccessoriesSlicer,
  Watches: WatchesSlicer,
  Cart: CartSlicer,
  CartCounter: CartCounterSlicer,
  Account: IsAccountSlicer,
});

const persistedReducer = persistReducer(persistConfig, Reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
