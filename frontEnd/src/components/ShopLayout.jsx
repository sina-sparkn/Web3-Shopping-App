import { useDispatch, useSelector } from "react-redux";
import { DisconnectToggled } from "../ReduxStore/features/disconnectSlicer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mooninklogo from "../assets/svg/Asset 2.svg";
import { faBagShopping, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blockie from "../assets/image/blockie.png";

const getEthereumObject = () => window.ethereum;

const ShopLayout = () => {
  const dispatch = useDispatch();
  const disconncectStatus = useSelector((state) => state.Disconnect);
  const CartCounted = useSelector((state) => state.CartCounter);
  const [Account, setAccount] = useState("");
  const disconnectFunc = () => {
    dispatch(DisconnectToggled(true));
  };

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

      dispatch(DisconnectToggled(false));

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

  const first6CharRegex = /^.{0,6}/;
  const last4CharRegex = /.{0,4}$/;
  const First6Char = first6CharRegex.exec(Account);
  const Last4Char = last4CharRegex.exec(Account);
  const displayAddress = First6Char[0] + "..." + Last4Char[0];

  return (
    <>
      <header className="w-full p-3 px-16 flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-4">
            <img src={mooninklogo} alt="mooninklogo" className="w-7" />
          </div>
        </Link>

        <div className="flex items-center gap-10 ">
          <div className="relative cursor-pointer">
            <Link to="Cart">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-xl text-white p-2 rounded-full hover:bg-white hover:text-black duration-200"
              />
            </Link>
            <div className="bg-white text-black ring ring-black px-1 font-bold text-xs rounded-full absolute top-1.5 left-7">
              {CartCounted}
            </div>
          </div>

          {!Account || disconncectStatus ? (
            <button
              onClick={connectToMetaMask}
              className="font-bold text-white rounded-full p-2 px-10 bg-violet-700 hover:text-black hover:bg-white active:bg-violet-500 duration-200"
            >
              Connect MetaMask
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="font-bold text-white rounded-full p-2 px-6 cursor-default bg-violet-700 hover:text-black hover:bg-white duration-200">
                {displayAddress}
              </button>
              <img
                src={blockie}
                className="w-9 h-9 bg-white rounded-full"
              ></img>
              <FontAwesomeIcon
                icon={faPowerOff}
                className="text-red-600 bg-red-500/30 p-2 text-2xl rounded-full cursor-pointer hover:bg-red-500/40 duration-200"
                onClick={disconnectFunc}
              />
            </div>
          )}
        </div>
      </header>
      <hr className="border-0 bg-white/10 h-0.5" />
      <section className="flex py-5 gap-10 px-16 items-center">
        <Link
          to="/Shop"
          className="text-slate-300 hover:text-white duration-200"
        >
          Start
        </Link>
        <Link
          to="Tshirts"
          className="text-slate-300 hover:text-white duration-200"
        >
          Tshirts
        </Link>
        <Link
          to="Accessories"
          className="text-slate-300 hover:text-white duration-200"
        >
          Accessories
        </Link>
        <Link
          to="Watches"
          className="text-slate-300 hover:text-white duration-200"
        >
          Watches
        </Link>
      </section>
      <hr className="border-0 bg-white/10 h-0.5 mb-5" />
      <Outlet />
    </>
  );
};

export default ShopLayout;
