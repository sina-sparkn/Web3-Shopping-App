import { useSelector } from "react-redux";
import { ethers } from "ethers";
import abi from "../utils/MINKtoken.json";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);
  let TotalPrice = 0;
  AddedProducts.map((item) => {
    TotalPrice += parseFloat(item.price);
  });

  const contractAddress = "0x628AEf2404D70D33266166Ef9c26353f676f8719";
  const contractABI = abi.abi;
  const to = "0x465DEA85d09025A97a44eCd49e5DcA469c0ef723";

  const Checkout = async () => {
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

        const PayOut = await minkToken.transfer(to, 10000);
        console.log("paying...");
        await PayOut.wait();
        console.log("Done!--", PayOut.hash);
      } else {
        console.log("ethereum object does not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (TotalPrice === 0) {
    return (
      <div className="flex h-3/4 text-3xl items-center justify-center">
        There's nothing here!
      </div>
    );
  } else {
    return (
      <div className="px-16 flex mb-10">
        <section className="w-1/4 flex flex-col gap-4 justify-items-center h-screen overflow-scroll">
          {AddedProducts.map((item, index) => {
            return (
              <div key={index} className="pr-3">
                <img src={item.image} alt={item.name} />
                <div className="flex justify-between">
                  <p>{item.name}</p>
                  <p>{item.price} ETH</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-3/4 flex items-center gap-10 flex-col">
          <p>{`Total price : ${TotalPrice} ETH`}</p>
          <button
            onClick={Checkout}
            className="px-7 py-3 rounded-full text-white bg-violet-600 hover:bg-white hover:text-black duration-200"
          >
            Checkout with metamask
          </button>
        </section>
      </div>
    );
  }
};

export default Cart;
