import { ethers } from "ethers";
import MINKabi from "../utils/MINKtoken.json";
import { useState } from "react";
import env from "../../env.json";

const Faucet = () => {
  const [receiver, SetReceiver] = useState("");
  const [loading, setLoading] = useState(false);
  const [txdetails, setTxdetails] = useState({});

  const provider = new ethers.providers.JsonRpcProvider(
    env.REACT_APP_TESTNET_QUICKNODE_KEY
  );

  const MINKContractAddress = "0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"; //Chainlink TokenAddress

  const privatekey = env.REACT_APP_PRIVATE_KEY;
  const wallet = new ethers.Wallet(privatekey, provider);
  const contract = new ethers.Contract(
    MINKContractAddress,
    MINKabi.abi,
    wallet
  );

  const amountToSend = "1";

  async function main() {
    setLoading(true);
    contract.transfer(receiver, amountToSend * 1000).then(function (tx) {
      setTxdetails(tx);
    });
    setLoading(false);
  }
  return (
    <main className="p-5 h-full flex flex-col gap-5 items-start bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <h3 className="text-3xl font-semibold ">
        <a
          className="underline underline-offset-4 hover:no-underline"
          href="https://goerli.etherscan.io/address/0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"
        >
          MINK
        </a>{" "}
        Faucet
      </h3>
      <hr className="w-full border-0 bg-violet-500/30 h-0.5" />
      <div className="w-full flex flex-col items-start gap-5 lg:px-20">
        <p className="text-lg md:text-2xl font-semibold tracking-wide">
          Enter your goerli wallet address :
        </p>
        <div className="flex flex-col md:flex-row w-full gap-5">
          <input
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
            className="py-4 px-5 w-full rounded-full font-semibold caret-violet-600 text-black outline-none"
            value={receiver}
            onChange={(e) => {
              SetReceiver(e.target.value);
            }}
          />
          {!loading ? (
            <button
              onClick={main}
              className="py-4 sm:px-10 min-w-max font-semibold bg-violet-500 ring-4 ring-violet-500/50 hover:ring-0 rounded-full duration-200"
            >
              Send testnet MINK token
            </button>
          ) : (
            <button
              onClick={main}
              className="py-4 flex items-center gap-2 sm:px-10 min-w-max font-semibold bg-violet-500 ring-4 ring-violet-500/50 hover:ring-0 rounded-full duration-200"
            >
              Sending
              <span className="loader"></span>
            </button>
          )}
        </div>

        <hr className="w-full mt-2 border-0 bg-violet-500/30 h-0.5" />
        {txdetails.hash !== undefined && (
          <div className="w-full flex flex-col gap-4 truncate ring-2 ring-violet-500 rounded-2xl">
            <p className="text-lg p-4 bg-violet-500/20 font-semibold">
              Your Lastest Transaction :
            </p>
            <a
              className="truncate px-4 pb-4 underline underline-offset-2"
              href={`https://goerli.etherscan.io/tx/${txdetails.hash}`}
            >
              {txdetails.hash}
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default Faucet;
