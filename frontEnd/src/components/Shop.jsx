import items from "../items.json";
import IMG from "./images";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DisconnectToggled } from "../ReduxStore/features/disconnectSlicer";
import { Routes, Route } from "react-router-dom";
import ShopLayout from "./ShopLayout";
import NotFound from "./NotFound";

const Shop = () => {
  return (
    <div className="bg-black fixed w-full h-full text-white">
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<div>Start</div>}></Route>
          <Route path="Clothing" element={<div>Clothing</div>}></Route>
          <Route path="Glasses" element={<div>Glasses</div>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
