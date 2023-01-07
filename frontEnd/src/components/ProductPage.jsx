import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart } from "../ReduxStore/features/CartSlicer";
import { CartIncremented } from "../ReduxStore/features/CartCounterSlicer";
import MinkLogo from "../assets/svg/Asset 2.svg";

const ProductPage = () => {
  const disconnectStatus = useSelector((state) => state.Disconnect);
  const AccountStatus = useSelector((state) => state.Account);

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

  const dispatch = useDispatch();

  const AddItemToCart = () => {
    dispatch(
      AddtoCart({
        name: productDetails.item,
        price: productDetails.price,
        image: productDetails.image,
      })
    );
  };

  const CartAddCounter = () => {
    dispatch(CartIncremented(1));
  };

  return (
    <div className="px-16 flex justify-between mb-10 mt-10">
      <img
        src={productDetails.image}
        alt={`${id2} in ${id}`}
        className="w-1/4 rounded-xl"
      />
      <div className="w-3/4 flex flex-col justify-between items-center">
        <p className="text-5xl font-semibold">{productDetails.item}</p>
        <p className="text-3xl flex items-center gap-4">
          {productDetails.price}
          <img className="w-7" src={MinkLogo} alt="MinkLogo" />
        </p>
        <div className="flex w-1/2">
          {!disconnectStatus && AccountStatus ? (
            <button
              onClick={() => {
                AddItemToCart();
                CartAddCounter();
              }}
              className="flex-grow py-4 rounded-full bg-white text-black text-lg hover:bg-violet-700 hover:text-white active:bg-violet-600 duration-200"
            >
              Add To Cart
            </button>
          ) : (
            <button
              disabled
              className="flex-grow py-4 rounded-full bg-gray-600 text-black text-lg cursor-not-allowed"
            >
              Connect your MetaMask to procced
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
