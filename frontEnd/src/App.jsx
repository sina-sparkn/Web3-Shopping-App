import "../dist/output.css";
import { useState } from "react";
import { useEffect } from "react";

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

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl">
        Worlds first Web3 Shopping App
      </h1>
      <div className="w-1/5 h-1/3 rounded-lg flex flex-col items-center justify-center">
        {!Account && (
          <button
            onClick={connectToMetaMask}
            className="bg-blue-400 p-4 px-5 rounded-xl text-xl font-bold text-white hover:bg-blue-500 duration-200"
          >
            connect with metamask
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
