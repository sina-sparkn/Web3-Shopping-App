import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faLinkedin,
  faInstagram,
  faGithubAlt,
  faGithub,
  faInstagramSquare,
  faGitAlt,
  faGitkraken,
} from "@fortawesome/free-brands-svg-icons";
import mooninkicon from "../assets/svg/ticonwhite.svg";
import mooninktypeface from "../assets/svg/typefacewhite.svg";
import bg from "../assets/svg/bg.svg";
import { Link } from "react-router-dom";
import PurchaseAstro from "../assets/svg/illustrations/purchase.svg";
import ReceivedAstro from "../assets/svg/illustrations/received.svg";
import AwardedAstro from "../assets/svg/illustrations/awarded.svg";
import { useState } from "react";

const Home = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const Accordion1 = () => {
    setClicked1(!clicked1);
  };
  const Accordion2 = () => {
    setClicked2(!clicked2);
  };
  const Accordion3 = () => {
    setClicked3(!clicked3);
  };

  return (
    <div className="bg-maindarkpurple/70 h-auto text-white px-6 ">
      <header className="flex items-center justify-between py-6">
        <div className="flex gap-3">
          <img src={mooninkicon} alt="mooninklogo" className="w-9 rota" />
          <img
            src={mooninktypeface}
            alt="mooninktypeface"
            className="w-32 hidden sm:block"
          ></img>
        </div>
        <div className="text-red-500 flex items-center gap-2 font-bold  rounded-full">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-lg" />
          Goerli testnet version
        </div>
      </header>
      <hr className="border-0 h-0.5 bg-white/10" />
      <main className="h-auto flex relative flex-col items-center justify-center gap-10">
        <h1 className="font-bold mt-20 text-5xl sm:text-7xl text-center z-10">
          THE FIRST WEB3 <br />
          SHOPPING EXPERIENCE
        </h1>
        <h2 className="text-2xl text-center font-semibold text-white/90 z-10">
          Order and get rewarded in web3 Space!
        </h2>

        <Link to="/Shop">
          <button className="button-77">Launch The App</button>
        </Link>
        <img
          src={bg}
          draggable="false"
          className="z-0 absolute top-0 hidden sm:block"
        />
        <h3 className="font-bold text-4xl mt-20 z-10 text-center">
          What you can do with Moonink ?
        </h3>
        <hr className="border-0 w-full lmd:w-10/12 h-0.5 z-10 bg-white/10" />

        <section className="z-10 text-3xl font-bold grid gap-10 md:grid-cols-3 lmd:w-10/12">
          <div
            className="py-8 px-3 border-2 border-violet-600/30 flex flex-col 
            items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl "
          >
            <img
              className="w-4/5"
              src={PurchaseAstro}
              alt="astronaut making purchase"
            />
            <h4 className="text-center">Make a purchase</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              Easier than ever with{" "}
              <a
                href="https://goerli.etherscan.io/address/0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"
                className="text-white font-bold underline underline-offset-2"
              >
                $MINK
              </a>{" "}
              token use the{" "}
              <a
                href="#"
                className="text-white font-bold underline underline-offset-2"
              >
                Faucet
              </a>{" "}
              to get Started.
            </p>
          </div>

          <div
            className="py-8 px-3 border-2 border-violet-600/30 flex flex-col 
            items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl "
          >
            <img
              className="w-4/5"
              src={ReceivedAstro}
              alt="astronaut receiving purchases"
            />
            <h4 className="text-center">Receive your orders</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              You will receive your orders as fast as possible
            </p>
          </div>

          <div
            className="py-8 px-3 border-2 border-violet-600/30 flex flex-col 
            items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl"
          >
            <img
              className="w-4/5"
              src={AwardedAstro}
              alt="astronaut receiving purchases"
            />
            <h4 className="text-center">SBT Award</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              You can reach a new <strong>tier</strong> and
              <strong> mint </strong>the <strong>Soulbound</strong> token of
              that tier.
            </p>
          </div>
        </section>
      </main>
      <hr className="border-0 w-full lmd:w-10/12 h-0.5 bg-white/10 m-auto mt-10" />
      <h4 className="text-4xl leading-snug md:px-32 mt-10 font-bold text-center">
        Frequently asked qustions :
      </h4>
      <section className="mt-10 flex flex-col items-center gap-5 md:px-32">
        <div className="flex w-full flex-col gap-5 md:w-3/4 rounded-xl">
          <button
            onClick={Accordion1}
            className="text-start bg-violet-600/20 text-2xl font-bold border-2
            border-violet-600/40 px-5 py-3 flex items-center justify-between gap-3 rounded-xl 
            hover:bg-violet-600/30 duration-100"
          >
            What are SoulBound Tokens
            {clicked1 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} className="rotate-180" />
            )}
          </button>
          {clicked1 && (
            <p className="px-5 pb-5 leading-8 antialiased max-w-xl text-lg  rounded-xl">
              • Soulbound Tokens (SBTs) are digital identity tokens that
              represent the traits, features, and achievements that make up a
              person or entity. SBTs are issued by “Souls”.
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-5 md:w-3/4 rounded-xl">
          <button
            onClick={Accordion2}
            className="text-start bg-violet-600/20 text-2xl font-bold px-5 py-3 border-2
            border-violet-600/40 flex items-center justify-between gap-3 rounded-xl 
            hover:bg-violet-600/30 duration-100"
          >
            What is MINK Token
            {clicked2 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} className="rotate-180" />
            )}
          </button>
          {clicked2 && (
            <p className="px-5 pb-5 leading-8 antialiased max-w-xl text-lg rounded-xl">
              • MINK token is an <strong>ERC20 token</strong> currently running
              on Ethereum testnetwork <strong>"Goerli"</strong>. MINK token
              contract grab the purchases details and store them in Ethereum
              blockchain for
              <strong> better security</strong> and more
              <strong> decentralization</strong>.
            </p>
          )}
        </div>
        <div className="flex w-full flex-col gap-5 md:w-3/4 rounded-xl">
          <button
            onClick={Accordion3}
            className="text-start bg-violet-600/20 text-2xl font-bold px-5 py-3 border-2 
            border-violet-600/40 flex items-center justify-between gap-3 rounded-xl
            hover:bg-violet-600/30 duration-100"
          >
            What is MINK token Contract
            {clicked3 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} className="rotate-180" />
            )}
          </button>
          {clicked3 && (
            <p className="px-5 pb-5 leading-8 antialiased max-w-xl text-lg rounded-xl truncate">
              • Contract Address on Goerli: <br />
              <a
                href="https://goerli.etherscan.io/address/0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42"
                className="text-base underline underline-offset-2"
              >
                0x2B8C1DCdc986e50e3Fb1c29F6c118535a5Cc4e42
              </a>
            </p>
          )}
        </div>
      </section>
      <hr className="border-0 mt-10 w-full h-0.5 z-10 bg-white/10" />
      <div className="flex justify-center items-baseline sm:items-center text-red-500 gap-3 mt-5 ">
        <FontAwesomeIcon icon={faCircleExclamation} />
        <p>
          note that this is a testnet product and sending products is not
          available !
        </p>
      </div>
      <hr className="border-0 mt-5 w-full h-0.5 z-10 bg-white/10" />
      <footer className="flex flex-col lg:flex-row items-center gap-8 justify-between py-10 ">
        <p className="text-sm">
          Made with <FontAwesomeIcon className="text-red-600" icon={faHeart} />{" "}
          by{" "}
          <a
            className="hover:text-violet-400 duration-100"
            href="https://github.com/ssparknt"
          >
            sinasparkn
          </a>
        </p>

        <span className="text-xs text-white/50 text-center">
          Copyright © 2023 MOONINK Inc. All rights reserved.
        </span>

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
    </div>
  );
};

export default Home;
