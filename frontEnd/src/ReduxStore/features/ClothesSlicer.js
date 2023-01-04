import { createSlice } from "@reduxjs/toolkit";
import img1 from "../../assets/image/Clothing/1.jpg";
import img2 from "../../assets/image/Clothing/2.jpg";
import img3 from "../../assets/image/Clothing/3.jpg";
import img4 from "../../assets/image/Clothing/4.jpg";
import img5 from "../../assets/image/Clothing/5.jpg";
import img6 from "../../assets/image/Clothing/6.jpg";
import img7 from "../../assets/image/Clothing/7.jpg";
import img8 from "../../assets/image/Clothing/8.jpg";
import img9 from "../../assets/image/Clothing/9.jpg";
import img10 from "../../assets/image/Clothing/10.jpg";

const initialState = [
  {
    item: "WAVYBABY!",
    price: "0.0001",
    image: img1,
  },
  {
    item: "PORANGE",
    price: "0.0002",
    image: img2,
  },
  {
    item: "CHAOS",
    price: "0.0003",
    image: img3,
  },
  {
    item: "SPLASH!",
    price: "0.0004",
    image: img4,
  },
  {
    item: "WTF",
    price: "0.0005",
    image: img5,
  },
  {
    item: "LilNasX",
    price: "0.0006",
    image: img6,
  },
  {
    item: "Painter",
    price: "0.0007",
    image: img7,
  },
  {
    item: "DOODLE",
    price: "0.0008",
    image: img8,
  },
  {
    item: "WAVYBOB",
    price: "0.0009",
    image: img9,
  },
  {
    item: "BBFINGER",
    price: "0.001",
    image: img10,
  },
];
const ClothesSlicer = createSlice({
  name: "ClothesList",
  initialState,
});

export default ClothesSlicer.reducer;
