import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import wallets from "../assets/image/start/wallets.png";

const Start = () => {
  return (
    <main className="h-full p-5 flex flex-col items-center gap-7 bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
      <h2 className="w-full text-xl flex justify-start items-center gap-2 font-semibold">
        MOONINK Features
        <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
      </h2>
      <section className="grid lg:grid-cols-2 gap-5 w-full">
        <div className="h-52 flex flex-col gap-14 ring-2 ring-violet-400/30 p-5 bg-violet-500/5 relative overflow-hidden rounded-lg ">
          <div className="flex z-30 flex-col gap-2">
            <p className="font-extrabold text-3xl relative ">No Email needed</p>
            <p className="text-white/80 text-lg relative">
              Just use your Preferred Wallet
            </p>
          </div>
          <a
            target="_blank"
            href="https://explorer.walletconnect.com/?type=wallet"
            className="flex items-center p-2 z-30 bg-violet-500/50 hover:ring-2 hover:ring-violet-500/70 max-w-max rounded-lg duration-300"
          >
            Explore all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-up-right"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 7l-10 10"></path>
              <path d="M8 7l9 0l0 9"></path>
            </svg>
          </a>
          <img
            src={wallets}
            alt="wallets"
            className="absolute z-0 top-0 -right-16 sm:right-0 h-full"
          />
        </div>
        {/* <div className="bg-red-500 px-5 py-10">Easy to use</div> */}
      </section>
    </main>
  );
};

export default Start;
