import { useSelector, useDispatch } from "react-redux";
import { ethers } from "ethers";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  RemoveAllCart,
  RemoveFromCart,
} from "../ReduxStore/features/CartSlicer";
import {
  CleanCart,
  CartDecremented,
} from "../ReduxStore/features/CartCounterSlicer";

import { useState } from "react";

import abi from "../utils/MINKtoken.json";
const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);
  const DisconnectStatus = useSelector((state) => state.Disconnect);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  let TotalPrice = 0;
  let AllItems = "";

  AddedProducts.map((item) => {
    TotalPrice += parseInt(item.price);
    AllItems += ` (${item.name} ${item.price}MINK) , `;
  });

  AllItems = AllItems.slice(0, AllItems.length - 3);

  const contractAddress = "0xf5980862640589eD5821ba42bfD61C577d1F0F5e";
  const contractABI = abi.abi;
  const to = "0x465DEA85d09025A97a44eCd49e5DcA469c0ef723";

  const Checkout = async () => {
    try {
      const { ethereum } = window;
      setLoading(true);
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const minkToken = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const PayOut = await minkToken.transfer(
          to,
          TotalPrice * 1000,
          AllItems
        );
        console.log("paying...");
        await PayOut.wait();
        console.log("Done!--", PayOut.hash);

        setLoading(false);
        dispatch(RemoveAllCart());
        dispatch(CleanCart());
      } else {
        console.log("Ethereum object does not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = (ItemName) => {
    console.log(ItemName);
    dispatch(CartDecremented(1));
    dispatch(RemoveFromCart({ name: ItemName }));
  };

  if (TotalPrice === 0) {
    return (
      <div className="flex h-3/4 text-3xl items-center justify-center">
        There's nothing here!
      </div>
    );
  } else {
    return (
      <div className="px-16 flex mb-10">
        <section className="w-1/4 flex flex-col gap-4 justify-items-center h-screen overflow-scroll">
          {AddedProducts.map((item, index) => {
            return (
              <div key={index} className="pr-3 relative">
                <img src={item.image} alt={item.name} />
                <div className="flex items-center justify-between relative">
                  <p>{item.name}</p>
                  <p>{item.price} ETH</p>
                </div>
                <FontAwesomeIcon
                  onClick={() => removeItem(item.name)}
                  icon={faCircleXmark}
                  className="absolute top-1.5 right-5 text-red-600 text-2xl cursor-pointer hover:text-red-500"
                ></FontAwesomeIcon>
              </div>
            );
          })}
        </section>
        <section className="w-3/4 flex items-center gap-10 flex-col">
          <p>{`Total price : ${TotalPrice} MINK`}</p>
          {/* {!DisconnectStatus ? (
            <button
              onClick={Checkout}
              className="px-7 py-3 rounded-full text-white bg-violet-600 hover:bg-white hover:text-black duration-200"
            >
              Checkout with metamask
            </button>
          ) : (
            <button
              disabled
              className="px-7 py-3 rounded-full text-black bg-gray-600 cursor-not-allowed"
            >
              Connect your MetaMask to procced
            </button>
          )} */}

          {(() => {
            if (!DisconnectStatus) {
              if (loading) {
                return (
                  <button className="px-7 flex items-center justify-center gap-3 py-3 rounded-full text-white bg-violet-600 hover:bg-white hover:text-black duration-200">
                    Pending
                    <span class="loader"></span>
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={Checkout}
                    className="px-7 py-3 rounded-full text-white bg-violet-600 hover:bg-white hover:text-black duration-200"
                  >
                    Checkout with metamask
                  </button>
                );
              }
            } else {
              return (
                <button
                  disabled
                  className="px-7 py-3 rounded-full text-black bg-gray-600 cursor-not-allowed"
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
