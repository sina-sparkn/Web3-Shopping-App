import { Routes, Route } from "react-router-dom";
import ShopLayout from "./ShopLayout";
import NotFound from "./NotFound";
import Clothing from "./shop/Clothing/Clothing";

const Shop = () => {
  return (
    <div className="bg-black h-auto pb-10 text-white">
      <Routes>
        <Route path="/" element={<ShopLayout />}>
          <Route index element={<div>Start</div>}></Route>
          <Route path="Clothing" element={<Clothing />}></Route>
          <Route path="Glasses" element={<div>Glasses</div>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
