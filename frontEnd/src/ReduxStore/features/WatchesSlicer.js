import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/image/Watches/1.webp";
import img2 from "../../assets/image/Watches/2.webp";
import img3 from "../../assets/image/Watches/3.webp";
import img4 from "../../assets/image/Watches/4.webp";
import img5 from "../../assets/image/Watches/5.webp";
import img6 from "../../assets/image/Watches/6.jpg";
import img7 from "../../assets/image/Watches/7.webp";

const initialState = [
  {
    item: "ANN",
    price: "17",
    image: img1,
  },
  {
    item: "CHRO",
    price: "77",
    image: img2,
  },
  {
    item: "OUTDOOR",
    price: "84",
    image: img3,
  },
  {
    item: "ECLIPS",
    price: "34",
    image: img4,
  },
  {
    item: "MOONDT",
    price: "59",
    image: img5,
  },
  {
    item: "SLIMBLCK",
    price: "49",
    image: img6,
  },
  {
    item: "DIVER",
    price: "690",
    image: img7,
  },
];
const WatchesSlicer = createSlice({
  name: "WatchesList",
  initialState,
});

export default WatchesSlicer.reducer;
