import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/image/Accessories/1.jpg";
import img2 from "../../assets/image/Accessories/2.jpg";
import img3 from "../../assets/image/Accessories/3.jpg";
import img4 from "../../assets/image/Accessories/4.jpg";
import img5 from "../../assets/image/Accessories/5.jpg";
import img6 from "../../assets/image/Accessories/6.jpg";
import img7 from "../../assets/image/Accessories/7.jpg";
import img8 from "../../assets/image/Accessories/8.jpg";
import img9 from "../../assets/image/Accessories/9.jpg";
import img10 from "../../assets/image/Accessories/10.jpg";

const initialState = [
  {
    item: "blck",
    price: "0.0001",
    image: img1,
  },
  {
    item: "blubB",
    price: "0.0002",
    image: img2,
  },
  {
    item: "WhiteMS",
    price: "0.0003",
    image: img3,
  },
  {
    item: "brownB",
    price: "0.0004",
    image: img4,
  },
  {
    item: "yellowB",
    price: "0.0005",
    image: img5,
  },
  {
    item: "lessBlck",
    price: "0.0006",
    image: img6,
  },
  {
    item: "Monolisa",
    price: "0.0007",
    image: img7,
  },
  {
    item: "FAV",
    price: "0.0008",
    image: img8,
  },
  {
    item: "HOLY",
    price: "0.0009",
    image: img9,
  },
  {
    item: "whiteAF",
    price: "0.001",
    image: img10,
  },
];
const AccessoriesSlicer = createSlice({
  name: "AccessoriesList",
  initialState,
});

export default AccessoriesSlicer.reducer;
