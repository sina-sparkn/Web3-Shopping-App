import { ethers } from "ethers";
import MINKabi from "../utils/MINKtoken.json";
import { useState } from "react";
import { useEffect } from "react";

const Faucet = () => {
  const [receiver, SetReceiver] = useState("");
  const [loading, setLoading] = useState(false);
  const [txdetails, setTxdetails] = useState({});
  const [haveMink, SetHaveMink] = useState(false);
  const [copied, setCopied] = useState(false);

  const provider = new ethers.providers.JsonRpcProvider(
    import.meta.env.VITE_TESTNET_QUICKNODE_KEY
  );

  const MINKContractAddress = "0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42";

  const privatekey = import.meta.env.VITE_PRIVATE_KEY;
  const wallet = new ethers.Wallet(privatekey, provider);
  const contract = new ethers.Contract(
    MINKContractAddress,
    MINKabi.abi,
    wallet
  );

  const checkwalletbalance = async () => {
    try {
      balance = await contract.balanceOf(receiver);
      if (balance / 1000 >= 10) {
        SetHaveMink(true);
      } else {
        SetHaveMink(false);
      }
    } catch (error) {}
  };

  const amountToSend = "200";

  async function main() {
    try {
      setLoading(true);
      contract.transfer(receiver, amountToSend * 1000).then(function (tx) {
        setTxdetails(tx);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  }

  let balance;
  useEffect(() => {
    checkwalletbalance();
  }, [receiver]);

  const walletAddrRegex = /0x.{40}/;

  const copy = async () => {
    testSleep();
    await navigator.clipboard.writeText(MINKContractAddress);
  };

  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  const testSleep = async () => {
    setCopied(true);
    for (let i = 0; i < 1.2; i++) {
      await sleep(1000);
    }
    setCopied(false);
  };

  return (
    <main className="p-5 h-full flex flex-col gap-5 items-start bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-3xl font-semibold">
          <a
            className="underline underline-offset-4 hover:no-underline"
            href="https://goerli.etherscan.io/address/0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"
          >
            MINK
          </a>{" "}
          Faucet
        </h3>
        {!copied ? (
          <button
            onClick={copy}
            className="w-full hidden md:flex md:w-auto items-center justify-center gap-2.5 bg-violet-600/70 hover:bg-violet-600/80 px-8 py-3 rounded-2xl font-semibold active:bg-violet-600 duration-200"
          >
            MINK Contract Address
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-copy"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2zm8 -2v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          </button>
        ) : (
          <button className="hidden md:flex w-full md:w-auto items-center justify-center gap-2.5 bg-green-600 px-8 py-3 rounded-2xl font-semibold duration-200">
            Copied to Clipboard!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-check"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0m6 0l2 2l4 -4"></path>
            </svg>
          </button>
        )}
      </div>
      <hr className="w-full border-0 bg-violet-500/30 h-0.5" />
      {!copied ? (
        <button
          onClick={copy}
          className="flex w-full md:hidden items-center justify-center gap-3 bg-violet-600/60 hover:ring hover:ring-violet-500/50 py-3 rounded-2xl font-semibold active:ring-0 duration-200"
        >
          MINK Contract Address
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-copy"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2zm8 -2v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
          </svg>
        </button>
      ) : (
        <button className="flex w-full md:hidden md:max-w-min items-center justify-center gap-3 bg-green-600 px-6 py-3 rounded-2xl font-semibold duration-200">
          Copied to Clipboard!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-check"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0m6 0l2 2l4 -4"></path>
          </svg>
        </button>
      )}
      <hr className="w-full border-0 md:hidden bg-violet-500/30 h-0.5" />
      <div className="w-full flex flex-col items-start gap-5">
        <p className="text-lg md:text-2xl font-semibold tracking-wide">
          Enter your goerli wallet address :
        </p>
        <div className="flex flex-col md:flex-row w-full gap-5">
          <input
            type="text"
            placeholder="Enter Your Wallet Address (0x...)"
            className="py-4 px-5 font-base w-full rounded-2xl caret-violet-600 text-black outline-none focus:ring focus:ring-violet-500 duration-300"
            value={receiver}
            onChange={(e) => {
              SetReceiver(e.target.value);
            }}
          />
          {(() => {
            if (!walletAddrRegex.test(receiver)) {
              return (
                <button
                  disabled
                  className="py-4 sm:px-10 min-w-max font-semibold bg-gray-500 text-gray-800 rounded-2xl "
                >
                  Enter your wallet address
                </button>
              );
            } else {
              if (haveMink) {
                return (
                  <button
                    disabled
                    className="py-4 sm:px-10 min-w-max font-semibold bg-red-500 rounded-2xl duration-300"
                  >
                    You Have More Than 10 MINK!
                  </button>
                );
              } else {
                if (!loading) {
                  return (
                    <button
                      onClick={main}
                      className="py-4 sm:px-10 min-w-max font-semibold bg-violet-600 hover:ring hover:ring-violet-500/40 active:ring-0 rounded-2xl duration-300"
                    >
                      Send Testnet MINK Token
                    </button>
                  );
                } else {
                  return (
                    <button className="py-4 flex items-center gap-2 sm:px-10 min-w-max font-semibold bg-violet-500 rounded-2xl duration-200">
                      Sending
                      <span className="loader"></span>
                    </button>
                  );
                }
              }
            }
          })()}
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
