import { useSelector, useDispatch } from "react-redux";
import { ethers } from "ethers";
import { useState } from "react";
import abi from "../utils/MINKtoken.json";
import {
  RemoveAllCart,
  RemoveFromCart,
} from "../ReduxStore/features/CartSlicer";
import {
  CleanCart,
  CartDecremented,
} from "../ReduxStore/features/CartCounterSlicer";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);
  const DisconnectStatus = useSelector((state) => state.Disconnect);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const account = useSelector((state) => state.Account);

  let TotalPrice = 0;
  let AllItems = "";

  AddedProducts.map((item) => {
    TotalPrice += parseInt(item.price);
    AllItems += ` (${item.name} ${item.price}MINK) , `;
  });

  AllItems = AllItems.slice(0, AllItems.length - 3);

  const contractAddress = "0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42";
  const contractABI = abi.abi;
  const to = "0x465DEA85d09025A97a44eCd49e5DcA469c0ef723";

  const Checkout = async () => {
    try {
      const { ethereum } = window;
      setLoading(true);
      if (ethereum && ethereum.networkVersion === "5") {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const minkToken = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const PayOut = await minkToken.purchase(
          to,
          AllItems,
          TotalPrice * 1000
        );
        console.log("paying...");
        await PayOut.wait();
        console.log("Done!--", PayOut.hash);

        setLoading(false);
        dispatch(RemoveAllCart());
        dispatch(CleanCart());
      } else {
        console.error(
          "Ethereum object does not found! or the test network you are connected with is not goerli!"
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const removeItem = (ItemName) => {
    dispatch(CartDecremented(1));
    dispatch(RemoveFromCart({ name: ItemName }));
  };

  const mooninkprice = 0.328;

  if (TotalPrice === 0) {
    return (
      <div className="flex capitalize text-center h-full text-3xl items-center justify-center">
        your shopping bag is empty!
      </div>
    );
  } else {
    return (
      <div className="p-5 flex bg-maindarkpurple/70 flex-col">
        <div className="flex justify-between pb-5 font-semibold text-lg md:text-2xl">
          <h2>YOUR SHOPPING BAG</h2>
          <span>{`[ ${AddedProducts.length} ]`}</span>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full">
          {AddedProducts.map((item, index) => {
            return (
              <div key={index} className="w-full flex flex-col overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full rounded-lg"
                />
                <div className="py-5 flex flex-col gap-3">
                  <p>{item.name}</p>
                  <p className="flex items-center gap-2">
                    {item.price} MINK
                    <span className="text-slate-300">{`≈ $${Math.floor(
                      item.price * mooninkprice
                    )}`}</span>
                  </p>

                  <span
                    className="cursor-pointer underline sm:w-min underline-offset-2 text-base hover:no-underline"
                    onClick={() => removeItem(item.name)}
                  >
                    remove
                  </span>
                </div>
              </div>
            );
          })}
        </section>
        <hr className="border-0 h-0.5 bg-white/10 mt-5" />
        <section className="flex gap-9 pt-10 flex-col">
          <p className="text-xl font-semibold">YOUR ORDER SUMMARY</p>

          <section className="flex flex-col tracking-wide gap-2.5 text-sm">
            <div className="flex justify-between">
              <p>SUBTOTAL</p>
              <p>{`${TotalPrice} MINK ≈ $${Math.floor(
                TotalPrice * mooninkprice
              )}`}</p>
            </div>
            <div className="flex justify-between">
              <p>SHIPPING</p>
              <p>FREE</p>
            </div>
            <div className="flex justify-between">
              <p>TOTAL (VAT INCLUDED)</p>
              <p>{`${TotalPrice - 0} MINK ≈ $${Math.floor(
                TotalPrice * mooninkprice - 0
              )}`}</p>
            </div>
          </section>

          {(() => {
            if (!DisconnectStatus && account) {
              if (loading) {
                return (
                  <button className="px-7 flex text-center text-xl font-semibold items-center justify-center gap-3 py-3 rounded-full bg-violet-600 ">
                    Pending
                    <span className="loader"></span>
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={Checkout}
                    className="px-7 py-3 capitalize rounded-full text-xl text-center font-semibold text-white bg-violet-600 ring-4 ring-violet-500/40 hover:bg-white hover:text-black active:ring-0 duration-200"
                  >
                    Checkout with metaMask
                  </button>
                );
              }
            } else {
              return (
                <button
                  disabled
                  className="px-7 py-3 capitalize rounded-full text-black bg-gray-600 cursor-not-allowed"
                >
                  Connect your MetaMask to procced
                </button>
              );
            }
          })()}
        </section>
      </div>
    );
  }
};

export default Cart;
