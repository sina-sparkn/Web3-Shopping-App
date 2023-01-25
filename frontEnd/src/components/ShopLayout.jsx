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
  faStar,
  faBars,
  faXmark,
  faAngleRight,
  faFaucet,
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
  const [menuOpen, setMenuOpen] = useState(true);

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
      "duration-200 ease-out translate-x-full flex flex-col items-end gap-7 h-full p-5 ";
    classDiv =
      "absolute top-0 right-0 bg-black h-full w-full overflow-hidden ease-out duration-300";
  } else {
    classClose =
      "duration-200 ease-out translate-x-0 z-20 flex flex-col items-end gap-7 top-0 right-0 bg-black h-screen p-5 ";
    classDiv =
      "fixed top-0 right-0 h-screen w-full bg-black z-20 ease-out overflow-hidden duration-300";
  }

  const menuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full bg-maindarkpurple/70 relative px-5 py-3.5 flex justify-between items-center">
        <Link to="/" className="z-10 flex gap-2">
          <img src={mooninklogo} alt="mooninklogo" className="w-7" />
          <img src={mooninklogoType} alt="mooninklogo" className="w-28" />
        </Link>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={menuClicked}
          className="icon icon-tabler icon-tabler-menu text-2xl cursor-pointer z-10 sm:hidden"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 8l16 0m-16 8l16 0"></path>
        </svg>

        <section className={classDiv}>
          <nav className={classClose}>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-3xl cursor-pointer"
              onClick={menuClicked}
            />

            <div className="w-full flex flex-col">
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
          </nav>
        </section>

        <section className="items-center gap-4 hidden sm:flex z-10">
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <Link to="Cart">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-2xl text-white p-2.5 rounded-full hover:bg-violet-500 duration-200"
                />
              </Link>
              <div className="bg-white text-violet-900 ring ring-violet-500 px-1 font-bold text-xs rounded-full absolute top-3.5 left-7">
                {CartCounted}
              </div>
            </div>

            <div className="relative tooltip cursor-pointer">
              <Link to="Bonus">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-2xl text-white p-2.5  rounded-full hover:bg-violet-500 duration-200"
                />
                <span className="bg-green-500 ring ring-black w-2.5 h-2.5 absolute top-1 left-10 rounded-full"></span>
                <span className="tooltiptext bonuspositioning">
                  achievements
                </span>
              </Link>
            </div>
            <div className="tooltip">
              <Link to="Faucet">
                <FontAwesomeIcon
                  icon={faFaucet}
                  className="text-2xl text-white p-2.5  rounded-full hover:bg-violet-500 duration-200"
                />
                <span className="tooltiptext Faucetpositioning">Faucet</span>
              </Link>
            </div>
          </div>
          {!Account || disconncectStatus ? (
            <button
              onClick={connectToMetaMask}
              className="font-bold text-white bg-violet-500 rounded-full hover:ring hover:ring-violet-600/50 py-3 px-6 duration-200"
            >
              Connect with MetaMask
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button className="font-semibold text-white rounded-full p-3 cursor-default duration-150">
                {displayAddress}
              </button>

              <div className="tooltip ">
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="text-violet-500 relative p-2.5 text-2xl rounded-full cursor-pointer hover:bg-violet-500 hover:text-white duration-200"
                  onClick={disconnectFunc}
                />
                <span className="tooltiptext disconnetpositioning">
                  disconnect
                </span>
              </div>
            </div>
          )}
        </section>
      </header>

      <hr className="border-0 bg-violet-600/20 sm:hidden h-0.5" />
      <section className="flex justify-between pt-1.5 pb-0.5 sm:hidden px-4">
        <div className="flex gap-x-2.5">
          <Link to="Cart">
            <div className="relative cursor-pointer">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-xl text-white bg-violet-500 py-2.5 px-3 rounded-full duration-200"
              />

              <div className="bg-white text-violet-900 ring-2 ring-violet-600 px-1  font-bold text-sm rounded-full absolute top-0 -right-1.5">
                {CartCounted}
              </div>
            </div>
          </Link>
          <div className="relative">
            <Link to="Bonus">
              <FontAwesomeIcon
                icon={faStar}
                className="text-xl text-white bg-violet-500 p-2.5 rounded-full"
              />
            </Link>
          </div>

          <Link to="Faucet">
            <FontAwesomeIcon
              icon={faFaucet}
              className="text-xl text-white bg-violet-500 p-2.5 rounded-full "
            />
          </Link>
        </div>
        {!Account || disconncectStatus ? (
          <button
            onClick={connectToMetaMask}
            className="text-white bg-violet-500 rounded-full px-4"
          >
            Connect MetaMask
          </button>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <button className="w-full font-bold rounded-full py-2">
              {displayAddress}
            </button>
            <FontAwesomeIcon
              icon={faPowerOff}
              className="p-2.5 bg-violet-500 text-xl rounded-full cursor-pointer duration-200"
              onClick={disconnectFunc}
            />
          </div>
        )}
      </section>
      <hr className="border-0 bg-violet-600/20 h-0.5 hidden sm:block" />
      <section className="hidden flex-wrap py-5 gap-10 px-5 items-center sm:flex">
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

      <hr className="border-0 bg-violet-500/20 h-0.5" />

      <Outlet />

      <hr className="border-0 bg-violet-600/40 h-0.5" />

      <footer className="flex flex-col gap-7 bg-maindarkpurple items-center md:flex-row justify-between px-5 py-8">
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
