import { ethers } from "ethers";
import MINKabi from "../utils/MINKtoken.json";
import { useState } from "react";

const Faucet = () => {
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
    </main>
  );
};

export default Faucet;
