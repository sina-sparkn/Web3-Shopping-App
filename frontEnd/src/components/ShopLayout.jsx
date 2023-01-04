import { useDispatch, useSelector } from "react-redux";
import { DisconnectToggled } from "../ReduxStore/features/disconnectSlicer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mooninklogo from "../assets/svg/Asset 2.svg";
import { faCartShopping, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blockie from "../assets/image/blockie.png";

const getEthereumObject = () => window.ethereum;

const ShopLayout = () => {
  const dispatch = useDispatch();
  const disconncectStatus = useSelector((state) => state.Disconnect);
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
      <header className="w-full p-3 px-16 flex justify-between items-center mb-10">
        <Link to="/">
          <div className="flex gap-4">
            <img src={mooninklogo} alt="mooninklogo" className="w-7" />
          </div>
        </Link>
        {/* <input type="text" className="border-none rounded-full text-black" /> */}
        <div className="flex gap-10">
          <Link to="/Shop">Start</Link>
          <Link to="/Shop/Clothing">Clothing</Link>
          <Link to="/Shop/Accessories">Accessories</Link>
        </div>

        <div className="flex items-center gap-10">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl text-white cursor-pointer p-3 rounded-full hover:bg-white hover:text-black duration-200"
          />

          {!Account || disconncectStatus ? (
            <button
              onClick={connectToMetaMask}
              className="font-bold text-white rounded-full p-2 px-10 bg-violet-700 hover:text-black hover:bg-white duration-200"
            >
              Connect MetaMask
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="font-bold text-white rounded-full p-2 px-6 bg-violet-700 hover:text-black hover:bg-white duration-200">
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
      <Outlet />
    </>
  );
};

export default ShopLayout;
