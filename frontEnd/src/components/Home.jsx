import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import mooninkicon from "../assets/svg/iconwhite.svg";
import mooninktypeface from "../assets/svg/typefacewhite.svg";
import bg from "../assets/svg/bg.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-maindarkpurple/70 h-auto text-white px-6">
      <header className="flex items-center justify-between py-6">
        <div className="flex gap-3">
          <img src={mooninkicon} alt="mooninklogo" className="w-9" />
          <img
            src={mooninktypeface}
            alt="mooninktypeface"
            className="w-32"
          ></img>
        </div>

        <div className="block sm:hidden">
          <FontAwesomeIcon icon={faEllipsisV} className="text-2xl" />
        </div>

        <div className="items-center hidden sm:flex gap-10 ">
          <Link
            to="/QA"
            className="text-gray-300 hover:text-white hover:underline duration-200"
          >
            Q&A
          </Link>
          <button className="bg-violet-700 font-bold rounded-full hover:bg-white hover:text-black duration-200">
            <Link to="/Shop">
              <div className="w-full h-full px-5 py-3">Launch The App</div>
            </Link>
          </button>
        </div>
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
        <button className="bg-violet-700 z-10 px-10 font-bold text-base sm:text-xl rounded-full hover:bg-white hover:text-black duration-200">
          <Link to="/Shop">
            <div className="w-full h-full py-4">Launch The App</div>
          </Link>
        </button>
        <img
          src={bg}
          draggable="false"
          className="z-0 absolute top-0 hidden sm:block"
        />
        <div className="z-10 mt-20 text-xl w-full sm:w-3/5 px-10 py-5 flex flex-col text-center items-center gap-5 bg-white/5 sm:bg-transparent rounded-3xl">
          <h3 className="font-bold text-3xl">What you can do with Moonink</h3>
          <hr className="border-0 w-full h-1 bg-white/10" />
          <div className="py-3 flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="6" cy="19" r="2"></circle>
              <circle cx="17" cy="19" r="2"></circle>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
            <span>Make a purchase</span>
          </div>

          <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
          <div className="flex py-3 items-center  gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
              <path d="M12 12l8 -4.5"></path>
              <path d="M8.2 9.8l7.6 -4.6"></path>
              <path d="M12 12v9"></path>
              <path d="M12 12l-8 -4.5"></path>
            </svg>
            <span>Receive your orders</span>
          </div>
          <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
          <div className="flex py-3 items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="9" r="6"></circle>
              <path d="M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
              <path d="M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
            </svg>
            <span>Get awarded SB token</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
