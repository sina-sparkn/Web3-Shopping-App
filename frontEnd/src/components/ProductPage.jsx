import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart } from "../ReduxStore/features/CartSlicer";
import { CartIncremented } from "../ReduxStore/features/CartCounterSlicer";
import MinkLogo from "../assets/svg/ticonwhite.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id, id2 } = useParams();

  let productDetails;
  if (id === "Tshirts") {
    productDetails = useSelector((state) =>
      state.Tshirts.find((key) => key.item === id2)
    );
  } else if (id === "Accessories") {
    productDetails = useSelector((state) =>
      state.Accessories.find((key) => key.item === id2)
    );
  } else if (id === "Watches") {
    productDetails = useSelector((state) =>
      state.Watches.find((key) => key.item === id2)
    );
  }

  const [addedtobag, setAddedtobag] = useState(false);

  const dispatch = useDispatch();

  const AddItemToCart = () => {
    dispatch(
      AddtoCart({
        name: productDetails.item,
        price: productDetails.price,
        image: productDetails.image,
        category: id,
        count: 1,
      })
    );
    testSleep();
  };

  const CartAddCounter = () => {
    dispatch(CartIncremented(1));
  };

  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  const testSleep = async () => {
    setAddedtobag(true);
    for (let i = 0; i < 1; i++) {
      await sleep(1000);
    }
    setAddedtobag(false);
  };

  const mooninkprice = 0.328;

  return (
    <div className="p-5 flex flex-col md:flex-row bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <img
        src={productDetails.image}
        alt={id2}
        className="rounded-2xl md:w-1/2 "
      />
      <div className="pt-7 pb-2 flex flex-col grow md:pl-10 md:pr-5 gap-7">
        <div className="flex md:flex-col md:gap-7 justify-between text-xl md:text-3xl">
          <p className="font-semibold">{`${productDetails.item}`}</p>
          <p className="flex items-center gap-4">
            {productDetails.price}
            <img className="w-7" src={MinkLogo} alt="MinkLogo" />
            <span className="text-slate-400">
              {`≈ $${Math.floor(productDetails.price * mooninkprice)}`}
            </span>
          </p>
        </div>

        {!addedtobag ? (
          <button
            onClick={() => {
              AddItemToCart();
              CartAddCounter();
            }}
            className="w-full py-3 rounded-2xl ring-4 ring-violet-400/40 bg-violet-600 font-semibold hover:bg-violet-500 text-white text-xl active:ring-0 duration-200"
          >
            <span>Add to Bag</span>
          </button>
        ) : (
          <button className="w-full ping py-3 rounded-2xl ring-4 ring-green-500/40 bg-green-600 hover:bg-green-500 font-semibold text-white text-xl duration-200">
            <div className="flex items-center justify-center gap-2.5">
              <span>Item Added to your bag</span>
              <FontAwesomeIcon icon={faCheckCircle} className="rounded-full" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
