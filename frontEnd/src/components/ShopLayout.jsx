import { useDispatch, useSelector } from "react-redux";
import { DisconnectToggled } from "../ReduxStore/features/disconnectSlicer";
import { ChangeAccountTrue } from "../ReduxStore/features/IsAccountSlicer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mooninklogo from "../assets/svg/ticonwhite.svg";
import mooninklogoType from "../assets/svg/typefacewhite.svg";
import { useParams } from "react-router-dom";
import {
  faBagShopping,
  faStar,
  faXmark,
  faAngleRight,
  faFaucet,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import EtherscanIcon from "../assets/svg/etherscan-logo-light-circle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";
import { useAccount } from "wagmi";

const ShopLayout = () => {
  const { id } = useParams();
  const { address, isConnected } = useAccount();

  const dispatch = useDispatch();
  const CartCounted = useSelector((state) => state.CartCounter);

  const [menuOpen, setMenuOpen] = useState(true);

  if (isConnected) {
    dispatch(ChangeAccountTrue(true));
    dispatch(DisconnectToggled(false));
  } else {
    dispatch(DisconnectToggled(true));
    dispatch(ChangeAccountTrue(false));
  }

  useEffect(() => {
    const getAccount = async () => {
      if (address) {
        dispatch(ChangeAccountTrue(true));
        dispatch(DisconnectToggled(false));
      } else if (address === undefined) {
        dispatch(DisconnectToggled(true));
        dispatch(ChangeAccountTrue(false));
      }
    };

    getAccount().catch(console.error);
  }, []);

  let classClose;
  let classDiv;

  if (menuOpen) {
    classClose =
      "duration-200 ease-in-out translate-x-full flex overflow-hidden flex-col items-end gap-7 h-full p-5 ";
    classDiv =
      "fixed top-0 right-0 bg-black z-50 w-0 h-screen overflow-hidden ease-in-out duration-200";
  } else {
    classClose =
      "duration-200 ease-in-out translate-x-0 flex flex-col items-end gap-7 top-0 right-0 h-screen p-5 ";
    classDiv =
      "fixed top-0 right-0 bg-black/90 backdrop-blur-xl w-full h-screen z-50 ease-in-out overflow-hidden duration-200";
  }

  const menuClicked = () => {
    setMenuOpen(!menuOpen);
  };

  const { setTheme } = useWeb3ModalTheme();
  setTheme({
    themeColor: "purple",
    themeMode: "dark",
    themeBackground: "themeColor",
  });

  return (
    <>
      <header className="w-full bg-black relative px-5 py-3.5 flex justify-between items-center">
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
              {id === undefined ? (
                <Link
                  to="/Shop"
                  onClick={menuClicked}
                  className="text-slate-300 bg-violet-500/30 rounded-xl flex items-center justify-center gap-2 py-5 hover:text-white duration-200"
                >
                  Start
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              ) : (
                <Link
                  to="/Shop"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 py-5 hover:text-white duration-200"
                >
                  Start
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )}
              <hr className="border-0 my-1" />
              {id === "Tshirts" ? (
                <Link
                  to="Tshirts"
                  onClick={menuClicked}
                  className="text-slate-300 bg-violet-500/30 rounded-xl flex items-center justify-center gap-2 text-center py-5 hover:text-white duration-200"
                >
                  Tshirts
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              ) : (
                <Link
                  to="Tshirts"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5  hover:text-white duration-200"
                >
                  Tshirts
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )}
              <hr className="border-0 my-1" />
              {id === "Accessories" ? (
                <Link
                  to="Accessories"
                  onClick={menuClicked}
                  className="text-slate-300 bg-violet-500/30 rounded-xl flex items-center justify-center gap-2 text-center py-5 hover:text-white duration-200"
                >
                  Accessories
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              ) : (
                <Link
                  to="Accessories"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5  hover:text-white duration-200"
                >
                  Accessories
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )}
              <hr className="border-0 my-1" />
              {id === "Watches" ? (
                <Link
                  to="Watches"
                  onClick={menuClicked}
                  className="text-slate-300 bg-violet-500/30 rounded-xl flex items-center justify-center gap-2 text-center py-5 hover:text-white duration-200"
                >
                  Watches
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              ) : (
                <Link
                  to="Watches"
                  onClick={menuClicked}
                  className="text-slate-300 flex items-center justify-center gap-2 text-center py-5 hover:text-white duration-200"
                >
                  Watches
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )}
            </div>
            <br />
            <p className="flex items-center justify-center gap-2 w-full text-lg">
              Smart Contracts
            </p>
            <hr className="w-full border-white/20" />
            <div className="w-full text-gray-200 text-sm flex justify-between">
              <a
                target="_blank"
                className="flex items-center gap-1.5"
                href="https://goerli.etherscan.io/address/0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"
              >
                MINK TOKEN
                <FontAwesomeIcon
                  className="text-xs"
                  icon={faUpRightFromSquare}
                />
              </a>
              <a
                target="_blank"
                className="flex items-center gap-1.5"
                href="https://goerli.etherscan.io/address/0x260dd84D026479Ec5cF7b218796e668aA0f84f97"
              >
                MINK MEDALS
                <FontAwesomeIcon
                  className="text-xs"
                  icon={faUpRightFromSquare}
                />
              </a>
            </div>
            <hr className="w-full border-white/20" />
          </nav>
        </section>

        <section className="items-center gap-4 hidden sm:flex z-10">
          <div className="flex items-center gap-4">
            <div className="relative tooltip cursor-pointer">
              <Link to="Cart">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="text-2xl text-white p-2.5 rounded-xl hover:bg-violet-500 duration-200"
                />
              </Link>
              <span className="tooltiptext bagpositioning">Bag</span>
              <div className="text-black bg-white px-1 ring ring-violet-500 font-bold text-xs rounded-full absolute top-4 left-7">
                {CartCounted}
              </div>
            </div>

            <div className="relative tooltip cursor-pointer">
              <Link to="Bonus">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-2xl text-white p-2.5 rounded-xl hover:bg-violet-500 duration-200"
                />

                <span className="tooltiptext bonuspositioning">
                  Achievements
                </span>
              </Link>
            </div>
            <div className="tooltip">
              <Link to="Faucet">
                <FontAwesomeIcon
                  icon={faFaucet}
                  className="text-2xl text-white p-2.5 rounded-xl hover:bg-violet-500 duration-200"
                />
                <span className="tooltiptext Faucetpositioning">Faucet</span>
              </Link>
            </div>
          </div>

          <Web3Button icon="false" label="Connect Wallet" balance="false" />
        </section>
      </header>

      <hr className="border-0 bg-violet-600/20 sm:hidden h-0.5" />
      <section className="flex justify-between py-2 relative z-30 sm:hidden px-5">
        <div className="flex gap-x-2">
          <Link to="Cart">
            <div className="relative cursor-pointer">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-lg text-white bg-violet-500 p-2.5 rounded-lg duration-200"
              />

              <div className="text-black px-1 font-semibold text-sm bg-white rounded-md absolute top-8 left-2.5">
                {CartCounted}
              </div>
            </div>
          </Link>
          <div className="relative">
            <Link to="Bonus">
              <FontAwesomeIcon
                icon={faStar}
                className="text-lg text-white bg-violet-500 py-2.5 px-2 rounded-lg"
              />
            </Link>
          </div>

          <Link to="Faucet">
            <FontAwesomeIcon
              icon={faFaucet}
              className="text-lg text-white bg-violet-500 p-2.5 rounded-lg "
            />
          </Link>
        </div>

        <Web3Button icon="false" label="Connect Wallet" balance="false" />
      </section>
      <hr className="border-0 bg-violet-600/20 h-0.5 hidden sm:block" />
      <section className="hidden relative z-30 flex-wrap py-5 gap-10 px-5 items-center sm:flex">
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
        <img
          src={mooninklogoType}
          alt="mooninklogoType"
          className="relative z-30 w-28 "
        />
        <p className="relative z-30 text-xs text-white/50">
          Copyright © 2023 MOONINK Inc. All rights reserved.
        </p>
        <div className="flex relative z-30 flex-wrap gap-9 lg:gap-7 text-2xl">
          <a
            target="_blank"
            href="https://twitter.com/sinaproject007"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            target="_blank"
            href="https://instagram.com/sparknsina"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/ali-zare-a01550238/"
            className="text-white/80 hover:underline hover:text-white cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            target="_blank"
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
