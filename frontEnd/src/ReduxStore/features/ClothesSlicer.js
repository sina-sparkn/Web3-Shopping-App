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
    price: "18",
    image: img1,
  },
  {
    item: "PORANGE",
    price: "23",
    image: img2,
  },
  {
    item: "CHAOS",
    price: "67",
    image: img3,
  },
  {
    item: "SPLASH!",
    price: "41",
    image: img4,
  },
  {
    item: "WTF",
    price: "48",
    image: img5,
  },
  {
    item: "LilNasX",
    price: "117",
    image: img6,
  },
  {
    item: "Painter",
    price: "85",
    image: img7,
  },
  {
    item: "DOODLE",
    price: "69",
    image: img8,
  },
  {
    item: "WAVYBOB",
    price: "152",
    image: img9,
  },
  {
    item: "BBFINGER",
    price: "78",
    image: img10,
  },
];
const ClothesSlicer = createSlice({
  name: "ClothesList",
  initialState,
});

export default ClothesSlicer.reducer;
