import { ethers } from "ethers";
import { useState, useEffect } from "react";
import MINKabi from "../utils/MINKtoken.json";
import firstyfirst from "../assets/svg/achievement/ff.svg";
import brightway from "../assets/svg/achievement/bw.svg";
import ko from "../assets/svg/achievement/ko.svg";
import master from "../assets/svg/achievement/master.svg";
import legend from "../assets/svg/achievement/legend.svg";
import { useSelector } from "react-redux";
import NFTAbi from "../utils/TestOneFile.json";

const Bonus = () => {
  const account = useSelector((state) => state.Account);
  const disconnectStatus = useSelector((state) => state.Disconnect);
  const MINKcontractAddress = "0xD763400f38E83fFc2641631bAAb4238f7B08Ce2b";
  const contractABI = MINKabi.abi;
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [minted, setMinted] = useState({});

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

  const SoulBoundsContract = "0xc99BF3717E39A5AA642A12bCc577C28c90E5AFBB";
  const SoulBoundsContractAbi = NFTAbi.abi;

  const Mint = async (id) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const SoulBound = new ethers.Contract(
          SoulBoundsContract,
          SoulBoundsContractAbi,
          signer
        );

        const mint = await SoulBound.mintReward(id);
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

  const getMinted = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const SoulBound = new ethers.Contract(
          SoulBoundsContract,
          SoulBoundsContractAbi,
          signer
        );

        let mintStatus;
        let mintedResults = [];

        for (let i = 1; i <= 5; i++) {
          mintStatus = await SoulBound.getminted(ethereum.selectedAddress, i);
          mintedResults.push(mintStatus);
        }

        return mintedResults;
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
      const Minted = await getMinted();

      const mintedStatus = {
        ff: Minted[0],
        bw: Minted[1],
        ko: Minted[2],
        mr: Minted[3],
        ld: Minted[4],
      };

      if (
        Minted[0] ||
        Minted[1] ||
        Minted[2] ||
        Minted[3] ||
        Minted[4] !== null
      ) {
        setMinted((minted) => ({
          ...minted,
          ...mintedStatus,
        }));
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
              {!minted.ff ? (
                <button
                  onClick={() => Mint(1)}
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
              {!minted.bw ? (
                <button
                  onClick={() => Mint(2)}
                  className="px-4 py-4 bg-achblue rounded-full hover:bg-white hover:text-black duration-200 "
                >
                  MINT BRIGHTWAY
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

          {SumofAllPurchaes >= achievement.KO && (
            <div className="flex flex-col gap-5 ">
              <img src={ko} alt="FIRSTYFIRST" className="w-full" />
              {!minted.ko ? (
                <button
                  onClick={() => Mint(3)}
                  className="px-4 py-4 bg-achpink rounded-full hover:bg-white hover:text-black duration-200"
                >
                  MINT KO!
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

          {SumofAllPurchaes >= achievement.Master && (
            <div className="flex flex-col gap-5 ">
              <img src={master} alt="FIRSTYFIRST" className="w-full" />
              {!minted.mr ? (
                <button
                  onClick={() => Mint(4)}
                  className="px-4 py-4 bg-achred rounded-full hover:bg-white hover:text-black duration-200"
                >
                  MINT MASTER
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

          {SumofAllPurchaes >= achievement.Legend && (
            <div className="flex flex-col gap-5 ">
              <img src={legend} alt="FIRSTYFIRST" className="w-full" />
              {!minted.ld ? (
                <button
                  onClick={() => Mint(5)}
                  className="px-4 py-4 bg-achgold rounded-full hover:bg-white hover:text-black duration-200"
                >
                  MINT LEGEND
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
