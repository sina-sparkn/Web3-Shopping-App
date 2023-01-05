import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart } from "../ReduxStore/features/CartSlicer";
import { CartIncremented } from "../ReduxStore/features/CartCounterSlicer";

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
    <div className="px-16 flex justify-between">
      <img
        src={productDetails.image}
        alt={`${id2} in ${id}`}
        className="w-1/4 rounded-xl"
      />
      <div className="w-3/4 flex flex-col justify-between items-center">
        <p className="text-5xl font-semibold">{productDetails.item}</p>
        <p>{productDetails.price} ETH</p>
        <div className="flex w-1/2">
          <button
            onClick={() => {
              AddItemToCart();
              CartAddCounter();
            }}
            className="flex-grow py-4 rounded-full bg-white text-black text-lg hover:bg-violet-700 hover:text-white active:bg-violet-600 duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
