import { useState, useEffect } from "react";
import items from "../items.json";
import IMG from "./images";
import mooninklogo from "../assets/svg/Asset 2.svg";
import mooninktypeFace from "../assets/svg/Asset 3.svg";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blockie from "../assets/image/blockie.png";

const getEthereumObject = () => window.ethereum;

async function findMetaMaskAccounts() {
  try {
    const ethereum = getEthereumObject();

    if (!ethereum) {
      console.error("Install MetaMask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Shop = () => {
  const [Account, setAccount] = useState("");

  const connectToMetaMask = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(`connected to account : ${accounts[0]}`);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      const account = await findMetaMaskAccounts();
      if (account !== null) {
        setAccount(account);
      }
    };
    getAccount().catch(console.error);
  }, []);

  const first6CharRegex = /^.{0,6}/;
  const last4CharRegex = /.{0,4}$/;

  const First6Char = first6CharRegex.exec(Account);
  const Last4Char = last4CharRegex.exec(Account);

  const displayAddress = First6Char[0] + "..." + Last4Char[0];

  return (
    <div className="bg-black">
      <header className="w-full p-3 px-16 flex justify-between items-center">
        <div className="flex gap-4">
          <img src={mooninklogo} alt="mooninklogo" className="w-7" />
          <img src={mooninktypeFace} alt="mooninktypeFace" className="w-36" />
          {/* <input type="text" className="border-none rounded-full" /> */}
        </div>
        <div className="flex items-center gap-10">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl text-white cursor-pointer p-3"
          />

          {!Account ? (
            <button
              onClick={connectToMetaMask}
              className="font-bold text-white rounded-full p-2 px-10 bg-violet-700 hover:text-black hover:bg-white duration-200"
            >
              Connect MetaMask
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="font-bold text-white rounded-full p-2 px-6 bg-violet-700 hover:text-black hover:bg-white duration-200">
                {displayAddress}
              </button>
              <img
                src={blockie}
                className="w-9 h-9 bg-white rounded-full"
              ></img>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Shop;
