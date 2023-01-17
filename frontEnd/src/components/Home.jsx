import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faArrowDown,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import mooninkicon from "../assets/svg/iconwhite.svg";
import mooninktypeface from "../assets/svg/typefacewhite.svg";
import bg from "../assets/svg/bg.svg";
import { Link } from "react-router-dom";
import PurchaseAstro from "../assets/svg/illustrations/purchase.svg";
import ReceivedAstro from "../assets/svg/illustrations/received.svg";
import AwardedAstro from "../assets/svg/illustrations/awarded.svg";

const Home = () => {
  return (
    <div className="bg-maindarkpurple/70 h-auto text-white px-6">
      <header className="flex items-center justify-between py-6">
        <div className="flex gap-3">
          <img src={mooninkicon} alt="mooninklogo" className="w-9" />
          <img
            src={mooninktypeface}
            alt="mooninktypeface"
            className="w-32 hidden sm:block"
          ></img>
        </div>
        <div className="border-2 border-red-500 text-red-500 px-5 flex items-center gap-2 font-bold py-2.5 rounded-full">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-lg" />
          Goerli testnet version
        </div>

        <button className="bg-violet-600 font-bold rounded-full hover:bg-white hover:text-black duration-200 hidden sm:block">
          <Link to="/Shop">
            <div className="w-full h-full px-5 py-3">Launch The App</div>
          </Link>
        </button>
      </header>
      <hr className="border-0 h-0.5 bg-white/10" />
      <main className="h-auto flex relative flex-col items-center justify-center gap-10">
        <h1 className="font-extrabold mt-20 text-4xl sm:text-7xl text-center z-10">
          THE FIRST WEB3 <br />
          SHOPPING EXPERIENCE
        </h1>
        <h2 className="text-2xl text-center text-white/80 z-10">
          Buy stuff and get Rewarded in web3 space.
        </h2>
        <button className="bg-violet-600 z-10 px-10 font-bold text-base sm:text-xl rounded-full hover:bg-white hover:text-black duration-200">
          <Link to="/Shop">
            <div className="w-full h-full py-4">Launch The App</div>
          </Link>
        </button>
        <img
          src={bg}
          draggable="false"
          className="z-0 absolute top-0 hidden sm:block"
        />
        <h3 className="font-bold text-4xl mt-32 z-10 text-center">
          What you can do with Moonink ?
        </h3>
        <hr className="border-0 w-full lmd:w-10/12 h-1 z-10 bg-white/10" />

        <section className="z-10 p-5 text-3xl font-bold grid gap-10 md:grid-cols-3 lmd:w-10/12">
          <div className="p-5 flex flex-col items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl ">
            <img
              className="w-4/5"
              src={PurchaseAstro}
              alt="astronaut making purchase"
            />
            <h4 className="text-center">Make a purchase</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              Easier than ever with just one click! just use the{" "}
              <a href="#" className="text-white underline">
                Faucet
              </a>{" "}
              to get Started.
            </p>
          </div>

          <div className="p-5 flex flex-col items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl ">
            <img
              className="w-4/5"
              src={ReceivedAstro}
              alt="astronaut receiving purchases"
            />
            <h4 className="text-center">Receive your orders</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              You will receive your orders but you won't this is a
              <span className="text-white font-bold"> testnet version</span>.
            </p>
          </div>

          <div className="p-5 flex flex-col items-center gap-10 bg-gradient-to-br from-maindarkpurple to-violet-600/20 rounded-3xl">
            <img
              className="w-4/5"
              src={AwardedAstro}
              alt="astronaut receiving purchases"
            />
            <h4 className="text-center">SB awarde token</h4>
            <p className="text-lg font-normal text-white/80 text-center">
              Every time you <strong>reach a new tier</strong> and
              <strong> mint </strong>a <strong>Soulbound</strong> token of that
              tier.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
