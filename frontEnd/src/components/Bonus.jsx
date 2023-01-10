import { ethers } from "ethers";
import { useState, useEffect } from "react";
import abi from "../utils/MINKtoken.json";

const Bonus = () => {
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
  return (
    <div className="px-16 mb-5">{`TOTAL AMOUNT OF PURCHASES : ${
      Number(totalPurchase) / 1000
    } MINK`}</div>
  );
};

export default Bonus;
