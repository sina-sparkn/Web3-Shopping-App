import "../dist/output.css";
import { useState, useEffect } from "react";
import items from "./items.json";
import IMG from "./components/images";

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

function App() {
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

  if (Account) {
    return (
      <div className="w-full h-auto pb-10 bg-slate-200">
        <div className="w-full h-20 text-white fixed bg-black/90 backdrop-blur-xl flex items-center px-64">
          <p className="clashBold text-2xl">MoonShop</p>
          <div className="grow"></div>
          <div className="flex gap-20">
            <a href="#" className="cursor-pointer hover:underline">
              Q&A
            </a>
            <a href="#" className="cursor-pointer hover:underline">
              EtherScan
            </a>
            <a href="#" className="cursor-pointer hover:underline">
              CART!
            </a>
          </div>
        </div>
        <div className="pt-32 px-10 grid grid-cols-4 gap-16 justify-items-center">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 ">
                <img src={IMG(index)} className=" ring ring-black" />
                <div className="flex gap-10 text-black text-xl font-bold">
                  <p>{item.item}</p>
                  <p>{item.price} ETH</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg1 w-full h-full flex flex-col gap-10 justify-center items-center bg-black bg-gradient-to-br from-pink-600/50 to-black">
        <h1 className="font-extrabold text-3xl text-white">
          Worlds first Web3 Shopping App
        </h1>

        <button
          onClick={connectToMetaMask}
          className="clashSemiBold bg-transparent text-white border text-2xl px-5 py-3 rounded-lg hover:bg-pink-600/30 focus:ring focus:ring-white duration-200"
        >
          connect with metamask
        </button>
      </div>
    );
  }
}

export default App;
