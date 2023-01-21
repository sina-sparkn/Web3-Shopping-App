import { useDispatch, useSelector } from "react-redux";
import { DisconnectToggled } from "../ReduxStore/features/disconnectSlicer";
import { ChangeAccountTrue } from "../ReduxStore/features/IsAccountSlicer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mooninklogo from "../assets/svg/ticonwhite.svg";
import mooninklogoType from "../assets/svg/typefacewhite.svg";
import {
  faBagShopping,
  faPowerOff,
  faHeart,
  faBars,
  faXmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getEthereumObject = () => window.ethereum;

const ShopLayout = () => {
  const dispatch = useDispatch();
  const disconncectStatus = useSelector((state) => state.Disconnect);
  const CartCounted = useSelector((state) => state.CartCounter);
  const [Account, setAccount] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
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
      dispatch(ChangeAccountTrue(true));

      console.log(`connected to account : ${accounts[0]}`);
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      const account = await findMetaMaskAccounts();
      dispatch(ChangeAccountTrue(account));
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

  let classClose;
  let classDiv;
  if (menuOpen) {
    classClose =
      "absolute transition duration-400 transform ease-out translate-x-full flex flex-col items-end gap-7 top-0 right-0 h-full p-5 ";
    classDiv =
      "absolute top-0 right-0 backdrop-blur bg-black/80 h-full overflow-hidden ease-out w-full duration-300";
  } else {
    classClose =
      "absolute transition transform duration-300 ease-out translate-x-0 z-20 flex flex-col items-end gap-7 top-0 right-0 bg-black h-full w-full p-5 ";
    classDiv =
      "absolute bg-black/80 backdrop-blur top-0 right-0 h-256 z-20 ease-out overflow-hidden w-full duration-700 ";
  }

  const menuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full relative p-5 flex justify-between items-center">
        <Link to="/" className="z-10 flex gap-2">
          <img src={mooninklogo} alt="mooninklogo" className="w-7" />
          <img src={mooninklogoType} alt="mooninklogoType" className="w-28" />
        </Link>

        <FontAwesomeIcon
          onClick={menuClicked}
          icon={faBars}
          className="text-2xl cursor-pointer z-10 sm:hidden"
        />
        <div className={classDiv}>
          <nav className={classClose}>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-3xl px-2.5 cursor-pointer"
              onClick={menuClicked}
            />
            <div className="w-full mt-3">
              {!Account || disconncectStatus ? (
                <button
                  onClick={connectToMetaMask}
                  className="font-bold text-white ring-2 ring-white rounded-full py-2 px-4 hover:text-black hover:bg-white active:ring-0 duration-150"
                >
                  Connect MetaMask
                </button>
              ) : (
                <div className="flex items-center justify-between gap-4">
                  <button className="w-full font-bold bg-white text-black ring-2 ring-white rounded-full py-2 px-4 active:ring-0 cursor-default duration-150">
                    {displayAddress}
                  </button>
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    className="p-2 ring-2 ring-red-500 text-2xl rounded-full bg-red-500 text-white cursor-pointer duration-200"
                    onClick={disconnectFunc}
                  />
                </div>
              )}
              <hr className="border-0 w-full bg-white mt-10 h-0.5 " />
              <div className="flex mt-7 gap-5 justify-end">
                <div onClick={menuClicked} className="relative cursor-pointer">
                  <Link to="Cart">
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className="text-2xl text-white p-4  rounded-full hover:bg-white hover:text-black duration-200"
                    />
                  </Link>
                  <div className="bg-white text-black ring ring-black px-2 py-0.5 font-bold text-base rounded-full absolute top-0 -right-2">
                    {CartCounted}
                  </div>
                </div>
                <div onClick={menuClicked} className="relative cursor-pointer">
                  <Link to="Bonus">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-2xl text-white p-4 rounded-full hover:bg-white hover:text-black duration-200"
                    />
                  </Link>
                  <div className="blob bg-red-500 w-3 h-3 absolute top-3 right-2 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col mt-7">
                <Link
                  to="/Shop"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2  py-5 border border-x-0 hover:text-white duration-200"
                >
                  Start
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link
                  to="Tshirts"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5 border border-x-0 border-t-0 hover:text-white duration-200"
                >
                  Tshirts
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link
                  to="Accessories"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5 border border-x-0 border-t-0 hover:text-white duration-200"
                >
                  Accessories
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link
                  to="Watches"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5 border border-x-0 border-t-0 hover:text-white duration-200"
                >
                  Watches
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="items-center gap-4 hidden sm:flex z-10">
          <div className="flex items-center gap-4">
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

            <div className="relative cursor-pointer">
              <Link to="Bonus">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl text-white p-2 rounded-full hover:bg-white hover:text-black duration-200"
                />
              </Link>
              <div className="blob bg-red-500 w-2.5 h-2.5 absolute top-1.5 right-0.5 rounded-full"></div>
            </div>
          </div>
          {!Account || disconncectStatus ? (
            <button
              onClick={connectToMetaMask}
              className="font-bold text-white ring-2 ring-white rounded-full py-2 px-4 hover:text-black hover:bg-white active:ring-0 duration-150"
            >
              Connect with MetaMask
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 font-bold text-white ring-2 ring-white rounded-full py-2 px-4 hover:text-black hover:bg-white active:ring-0 cursor-default duration-150">
                {displayAddress}
              </button>
              <FontAwesomeIcon
                icon={faPowerOff}
                className="text-red-500 p-2 ring-2 ring-red-500 text-2xl rounded-full cursor-pointer hover:bg-red-500 hover:text-white duration-200"
                onClick={disconnectFunc}
              />
            </div>
          )}
        </div>
      </header>
      <hr className="border-0 bg-white/10 h-0.5 hidden sm:block" />
      <section className="hidden flex-wrap py-5 gap-10 px-16 items-center sm:flex">
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

      <hr className="border-0 bg-white/10 h-0.5 mb-5" />

      <footer className="flex flex-col gap-7 items-center md:flex-row justify-between px-5 pb-7 pt-3">
        <img src={mooninklogoType} alt="mooninklogoType" className="w-28 " />
        <p className="text-xs text-white/50">
          Copyright © 2023 MOONINK Inc. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-10 lg:gap-5 text-2xl">
          <a
            href="https://twitter.com/sinaproject007"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="https://instagram.com/sparknsina"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-zare-a01550238/"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://github.com/ssparknt/Web3-Shopping-App"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default ShopLayout;
