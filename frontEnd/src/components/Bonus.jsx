import { ethers } from "ethers";
import { useState, useEffect } from "react";
import MINKabi from "../utils/MINKtoken.json";
import firstyfirst from "../assets/svg/achievement/ff.svg";
import brightway from "../assets/svg/achievement/bw.svg";
import ko from "../assets/svg/achievement/ko.svg";
import master from "../assets/svg/achievement/master.svg";
import legend from "../assets/svg/achievement/legend.svg";
import { useSelector } from "react-redux";

import reward1abi from "../utils/rewardOne.json";
import reward2abi from "../utils/rewardTwo.json";
import reward3abi from "../utils/rewardThree.json";
import reward4abi from "../utils/rewardFour.json";
import reward5abi from "../utils/rewardFive.json";

const Bonus = () => {
  const account = useSelector((state) => state.Account);
  const disconnectStatus = useSelector((state) => state.Disconnect);
  const MINKcontractAddress = "0xD763400f38E83fFc2641631bAAb4238f7B08Ce2b";
  const contractABI = MINKabi.abi;
  const [totalPurchase, setTotalPurchase] = useState(0);

  const TotalPurchase = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const minkToken = new ethers.Contract(
          MINKcontractAddress,
          contractABI,
          signer
        );

        const total = await minkToken.getTotalPurchasePerUser(
          ethereum.selectedAddress
        );

        return total;
      } else {
        console.log("Ethereum object does not found!");
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  let SumofAllPurchaes = Number(totalPurchase) / 1000;

  const achievement = {
    FirstyFirst: 0,
    BrightWay: 100,
    KO: 500,
    Master: 1000,
    Legend: 1700,
  };

  const SoulBoundsContract = {
    firstyfirst: {
      contract: "0xF7aAC7cD74f17fC7784Fd85FcDfA9e796E403223",
      abi: reward1abi.abi,
      minted: false,
    },
    brightway: {
      contract: "",
      abi: reward2abi.abi,
      minted: false,
    },
    KOC: {
      contract: "",
      abi: reward3abi.abi,
      minted: false,
    },
    master: {
      contract: "",
      abi: reward4abi.abi,
      minted: false,
    },
    legend: {
      contract: "",
      abi: reward5abi.abi,
      minted: false,
    },
  };

  //*mint first Award
  const [minted1, setMinted1] = useState(false);
  const MintFirstyFirst = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const SoulBound = new ethers.Contract(
          SoulBoundsContract.firstyfirst.contract,
          SoulBoundsContract.firstyfirst.abi,
          signer
        );

        const mint = await SoulBound.mintReward();
        console.log("minting...");
        await mint.wait();
        console.log("minted--");
      } else {
        console.log("Ethereum object does not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  //*get the first award minted Status
  const getFirstyFirst = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const SoulBound = new ethers.Contract(
          SoulBoundsContract.firstyfirst.contract,
          SoulBoundsContract.firstyfirst.abi,
          signer
        );
        const mintStatus = await SoulBound.getminted(ethereum.selectedAddress);
        return mintStatus;
      } else {
        console.log("Ethereum object does not found!");
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const gettotal = async () => {
      const total = await TotalPurchase();
      if (total !== null) {
        setTotalPurchase(total);
      }
    };

    const updateminted = async () => {
      const Minted1 = await getFirstyFirst();
      if (Minted1 !== null) {
        setMinted1(Minted1);
      }
    };

    updateminted().catch(console.error);
    gettotal().catch(console.error);
  }, []);

  if (account && !disconnectStatus) {
    return (
      <main className="px-16 mb-5 flex flex-col gap-12">
        <h1 className="font-bold text-3xl">Achievements :</h1>
        <div className="flex flex-wrap justify-center gap-16 mb-12">
          {SumofAllPurchaes > achievement.FirstyFirst && (
            <div className="flex flex-col gap-5">
              <img src={firstyfirst} alt="FIRSTYFIRST" className="w-full" />
              {!minted1 ? (
                <button
                  onClick={MintFirstyFirst}
                  className="px-4 py-4 bg-achpurple rounded-full hover:bg-white hover:text-black duration-200 "
                >
                  MINT FIRSTYFIRST
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 py-4 bg-gray-600 text-black rounded-full cursor-not-allowed "
                >
                  You've Claimed it!
                </button>
              )}
            </div>
          )}
          {SumofAllPurchaes >= achievement.BrightWay && (
            <div className="flex flex-col gap-5">
              <img src={brightway} alt="FIRSTYFIRST" className="w-full" />
              <button className="px-4 py-4 bg-achblue rounded-full hover:bg-white hover:text-black duration-200">
                MINT BRIGHTWAY
              </button>
            </div>
          )}

          {SumofAllPurchaes >= achievement.KO && (
            <div className="flex flex-col gap-5 ">
              <img src={ko} alt="FIRSTYFIRST" className="w-full" />
              <button className="px-4 py-4 bg-achpink rounded-full hover:bg-white hover:text-black duration-200">
                MINT KO!
              </button>
            </div>
          )}

          {SumofAllPurchaes >= achievement.Master && (
            <div className="flex flex-col gap-5 ">
              <img src={master} alt="FIRSTYFIRST" className="w-full" />
              <button className="px-4 py-4 bg-achred rounded-full hover:bg-white hover:text-black duration-200">
                MINT MASTER
              </button>
            </div>
          )}

          {SumofAllPurchaes >= achievement.Legend && (
            <div className="flex flex-col gap-5 ">
              <img src={legend} alt="FIRSTYFIRST" className="w-full" />
              <button className="px-4 py-4 bg-achgold rounded-full hover:bg-white hover:text-black duration-200">
                MINT LEGEND
              </button>
            </div>
          )}
        </div>
      </main>
    );
  } else {
    return (
      <section className="h-full flex items-center justify-center text-4xl font-semibold">
        connect your metamask
      </section>
    );
  }
};

export default Bonus;
