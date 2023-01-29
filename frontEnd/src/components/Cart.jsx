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
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from "wagmi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);
  const account = useSelector((state) => state.Account);
  const DisconnectStatus = useSelector((state) => state.Disconnect);

  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);
  const [lastPurchaseDetails, setLastPurchaseDetails] = useState({});

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

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: "purchase",
    args: [to, AllItems, TotalPrice * 1000],
  });
  const contractWrite = useContractWrite(config);

  const WaitForTransaction = useWaitForTransaction({
    hash: contractWrite.data?.hash,
  });

  useContractEvent({
    address: contractAddress,
    abi: contractABI,
    eventName: "purchaseDetails",
    listener(purchases, from, to, purchaseStatus) {
      const details = {
        Purchases: purchases,
        From: from,
        To: to,
        PurchaseStatus: purchaseStatus,
      };
      setLastPurchaseDetails((lastPurchaseDetails) => ({
        ...lastPurchaseDetails,
        ...details,
      }));
    },
  });

  // const Checkout = async () => {
  //   try {
  //     const { ethereum } = window;
  //     setLoading(true);
  //     if (ethereum && ethereum.networkVersion === "5") {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner();
  //       const minkToken = new ethers.Contract(
  //         contractAddress,
  //         contractABI,
  //         signer
  //       );
  //       const PayOut = await minkToken.purchase(
  //         to,
  //         AllItems,
  //         TotalPrice * 1000
  //       );
  //       console.log("paying...");
  //       await PayOut.wait();
  //       console.log("Done!--", PayOut.hash);

  //       setLoading(false);
  //       dispatch(RemoveAllCart());
  //       dispatch(CleanCart());
  //     } else {
  //       console.error(
  //         "Ethereum object does not found! or the test network you are connected with is not goerli!"
  //       );
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    checkResults();
  }, [lastPurchaseDetails]);

  const checkOut = async () => {
    contractWrite.writeAsync().catch(() => {
      if (contractWrite.isError) {
        console.log(contractWrite.error);
      }
    });
  };

  const checkResults = () => {
    if (Object.keys(lastPurchaseDetails).length === 0) {
      window.setTimeout(checkResults, 1000);
    } else {
      dispatch(RemoveAllCart());
      dispatch(CleanCart());
      testSleep();
    }
  };

  const removeItem = (ItemName) => {
    dispatch(CartDecremented(1));
    dispatch(RemoveFromCart({ name: ItemName }));
  };

  const mooninkprice = 0.328;

  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  const testSleep = async () => {
    setSuccess(true);
    for (let i = 0; i < 5; i++) {
      await sleep(1000);
    }
    setSuccess(false);
  };

  let mainbodyClass = "";
  if (TotalPrice === 0) {
    mainbodyClass =
      "p-5 flex h-full bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple flex-col";
  } else {
    mainbodyClass =
      "p-5 flex bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple flex-col";
  }

  if (success) {
    return (
      <div className="absolute w-screen h-full bg-black flex flex-col gap-5 items-center justify-center">
        <div className="py-7 px-12 bg-green-500 text-2xl rounded-2xl font-semibold">
          purchase done!
        </div>
        <div>{contractWrite.data.hash}</div>
      </div>
    );
  } else {
    return (
      <div className={mainbodyClass}>
        <div className="flex justify-between gap-5 pb-5 font-semibold text-lg md:text-2xl">
          <h2>YOUR SHOPPING BAG</h2>
          <span className="bg-violet-500/40 text-center rounded-full px-3">{`${AddedProducts.length}`}</span>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full">
          {TotalPrice === 0 && (
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex items-center justify-start">
                <p className="text-base">Your Shopping bag is empty</p>
              </div>
              <Link to="../../Tshirts">
                <button className="rounded-xl text-sm p-2.5 bg-violet-600">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
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
              if (TotalPrice === 0) {
                return (
                  <button
                    disabled
                    className="px-7 text-xl py-3 capitalize rounded-xl text-black bg-gray-600 cursor-not-allowed"
                  >
                    Your Shopping Bag is Empty!
                  </button>
                );
              }
              if (contractWrite.isLoading) {
                return (
                  <button
                    disabled
                    className="px-7 py-3 flex justify-center items-center gap-3 capitalize rounded-xl text-xl text-center font-semibold text-white bg-violet-600 ring-4 ring-violet-500/40"
                  >
                    confirm transaction on your wallet
                    <span className="loader"></span>
                  </button>
                );
              } else if (WaitForTransaction.isLoading) {
                return (
                  <button
                    disabled
                    className="px-7 py-3 flex justify-center items-center gap-3 capitalize rounded-xl text-xl text-center font-semibold text-white bg-violet-600 ring-4 ring-violet-500/40"
                  >
                    wait for transaction
                    <span className="loader"></span>
                  </button>
                );
              } else if (WaitForTransaction.isSuccess) {
                return (
                  <button
                    disabled
                    className="px-7 py-3 flex justify-center items-center gap-3 capitalize rounded-xl text-xl text-center font-semibold text-white bg-green-500 ring-4 ring-green-500/50"
                  >
                    success!
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={checkOut}
                    className="px-7 py-3 capitalize rounded-xl text-xl text-center font-semibold text-white bg-violet-600 ring-4 ring-violet-500/40 hover:bg-violet-500 active:ring-0 duration-200"
                  >
                    Checkout with your wallet
                  </button>
                );
              }
            } else {
              return (
                <button
                  disabled
                  className="px-7 text-xl py-3 capitalize rounded-xl text-black bg-gray-600 cursor-not-allowed"
                >
                  Connect your Wallet
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
