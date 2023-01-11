import { ethers } from "ethers";
import { useState, useEffect } from "react";
import abi from "../utils/MINKtoken.json";
import firstyfirst from "../assets/svg/achievement/ff.svg";
import brightway from "../assets/svg/achievement/bw.svg";
import ko from "../assets/svg/achievement/ko.svg";
import master from "../assets/svg/achievement/master.svg";
import legend from "../assets/svg/achievement/legend.svg";
import { useSelector } from "react-redux";

const Bonus = () => {
  const account = useSelector((state) => state.Account);
  const disconnectStatus = useSelector((state) => state.Disconnect);

  const contractAddress = "0xD763400f38E83fFc2641631bAAb4238f7B08Ce2b";
  const contractABI = abi.abi;

  const [totalPurchase, setTotalPurchase] = useState(0);

  const TotalPurchase = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const minkToken = new ethers.Contract(
          contractAddress,
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

  useEffect(() => {
    const gettotal = async () => {
      const total = await TotalPurchase();
      if (total !== null) {
        setTotalPurchase(total);
      }
    };

    gettotal().catch(console.error);
  }, []);

  let SumofAllPurchaes = Number(totalPurchase) / 1000;
  console.log(SumofAllPurchaes);

  const achievement = {
    FirstyFirst: 0,
    BrightWay: 100,
    KO: 500,
    Master: 1000,
    Legend: 1700,
  };

  if (account && !disconnectStatus) {
    return (
      <main className="px-16 mb-5 flex flex-col gap-12">
        <h1 className="font-bold text-3xl">Achievements :</h1>
        <div className="flex flex-wrap justify-center gap-16 mb-12">
          {SumofAllPurchaes > achievement.FirstyFirst && (
            <div className="flex flex-col gap-5">
              <img src={firstyfirst} alt="FIRSTYFIRST" className="w-full" />
              <button className="px-4 py-4 bg-achpurple rounded-full hover:bg-white hover:text-black duration-200 ">
                MINT FIRSTYFIRST
              </button>
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
