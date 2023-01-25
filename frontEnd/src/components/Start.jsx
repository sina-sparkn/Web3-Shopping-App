import { useState } from "react";

const Start = () => {
  const [copied, setCopied] = useState(false);

  const minkaddr = "0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42";
  const copy = async () => {
    testSleep();
    await navigator.clipboard.writeText(minkaddr);
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
    <main className="h-full p-5 flex flex-col items-center gap-7 bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <h1 className="text-3xl">start page!</h1>
    </main>
  );
};

export default Start;
