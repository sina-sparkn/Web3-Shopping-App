import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import wallets from "../assets/image/start/wallets.png";
import click from "../assets/image/start/click.png";
import bg from "../assets/image/start/bg.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main className="p-5 md:p-20 relative flex overflow-hidden flex-col items-center gap-5 bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <img className="fixed z-0 top-28 left-0 blur-xl opacity-40" src={bg} />
      <h2 className="w-full z-30 text-xl flex justify-start items-center gap-2 font-semibold">
        MOONINK Features
        <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
      </h2>
      <hr className="w-full border-0 h-0.5 bg-violet-500/20" />
      <div className="flex flex-col gap-16 z-30 w-full">
        <section className="flex flex-col gap-5 sm:flex-row">
          <div className="w-full flex flex-col gap-3">
            <p className="text-3xl font-semibold">No Signup Email needed</p>
            <p className="text-white/70 text-lg">
              Just use your Preferred Wallet and thats pretty much it.
            </p>
          </div>
          <div className="h-52 w-full flex flex-col gap-14 ring-2 ring-violet-400/30 p-5 bg-violet-500/5 relative overflow-hidden rounded-xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center z-30">
                <span className="text-4xl font-extrabold">170</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
              </div>
              <p className="text-white/60">Wallets Supported</p>
            </div>
            <a
              target="_blank"
              href="https://explorer.walletconnect.com/?type=wallet"
              className="flex items-center p-2 z-30 bg-violet-500/50 hover:ring-2 hover:ring-white max-w-max rounded-lg duration-300"
            >
              Explore all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-up-right"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 7l-10 10"></path>
                <path d="M8 7l9 0l0 9"></path>
              </svg>
            </a>
            <img
              src={wallets}
              alt="wallets"
              className="absolute z-0 top-0 scale-125 right-0 h-full"
            />
          </div>
        </section>
        <section className="flex flex-col gap-5 sm:flex-row">
          <div className="w-full flex flex-col gap-3">
            <p className="text-3xl font-semibold">
              Easiest Shopping Experience
            </p>
            <p className="text-white/70 text-lg">
              It can't be easir you can purchse your orders with just one click.
              no Credit or debit card needed. $MINK token is all it takes.
            </p>
          </div>
          <div className="h-52 w-full flex flex-col gap-14 ring-2 ring-violet-400/30 p-5 bg-violet-500/5 relative overflow-hidden rounded-xl ">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-bold">it's done.</p>
              <p className="text-white/70 text-lg z-30">Just One Click.</p>
            </div>

            <Link to="Tshirts" className="max-w-max">
              <button className="flex items-center gap-1.5 p-2 z-30 bg-violet-500 hover:ring-2 hover:ring-white max-w-max rounded-lg duration-300">
                Get Started
                <FontAwesomeIcon className="text-sm" icon={faAngleRight} />
              </button>
            </Link>
            <img
              src={click}
              alt="wallets"
              className="absolute z-0 top-0 right-0 h-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Start;
