import "../dist/output.css";
import "./otherStyles.css";
import { useState, useEffect } from "react";
import items from "./items.json";
import IMG from "./components/images";
import heroImg from "./assets/svg/Asset 6.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import mooninklogo1 from "./assets/svg/Asset 2.svg";
import mooninklogo2 from "./assets/svg/Asset 3.svg";
import mooninklogo3 from "./assets/svg/Asset 4.svg";

const getEthereumObject = () => window.ethereum;

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

function App() {
  const [Account, setAccount] = useState("");

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

  return (
    <div className="w-full h-auto bg-black ">
      <div className="w-full h-auto text-white bg-black">
        <section className="w-full h-auto flex justify-between py-5 px-10 mb-20">
          {/* <div className="text-2xl font-extrabold">MOONINK</div> */}
          <a className="flex gap-5" href="#">
            <img src={mooninklogo1} alt="mooninklogo" className="w-8" />
            <img src={mooninklogo2} alt="moonink-typeface" className="w-44" />
          </a>

          <div className="flex items-center gap-16">
            <div className="flex gap-5 items-center text-lg">
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="hover:text-violet-400 duration-200"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-violet-400 duration-200"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="hover:text-violet-400 duration-200"
                />
              </a>
              <a href="https://github.com/ssparknt">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="hover:text-violet-400 duration-200"
                />
              </a>
            </div>
            <a href="#">Q&A</a>
            <button className="bg-violet-700 font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-black duration-200">
              ENTER
            </button>
          </div>
        </section>
        <section className="pl-10 flex">
          <div className="w-1/2 flex flex-col pt-16 gap-12">
            <h1 className=" font-extrabold text-7xl">
              THE FIRST WEB3 <br /> SHOPPING EXPERIENCE
            </h1>
            <button className="bg-violet-700 font-bold text-xl max-w-xs py-4 rounded-lg hover:bg-white hover:text-black duration-200">
              ENTER THE APP
            </button>
          </div>
          <img src={heroImg} alt="heroImg" className="w-1/2" />
        </section>
        <section className="px-10 -mt-40">
          <h2 className="text-4xl font-bold">What is MOONINK ?</h2>
          <br />
          <p className="text-lg">
            MOONINK is the first Web3 onlineShop. <br /> it means you can buy
            products or sell your own products.
            <br />
            you can buy using <strong>$MINK</strong> Token and get rewarded by
            completing different Tasks.
          </p>
        </section>
        <hr className="mx-40 mt-20" />
        <footer className="mt-12 px-10 pb-10 flex justify-between items-center">
          <p>sina is back baby!</p>
          <img src={mooninklogo3} alt="moonink-fullogo" className="w-24" />
          <div className="flex gap-5 items-center text-lg">
            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-violet-400 duration-200"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-violet-400 duration-200"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faTelegram}
                className="hover:text-violet-400 duration-200"
              />
            </a>
            <a href="https://github.com/ssparknt">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-violet-400 duration-200"
              />
            </a>
          </div>
        </footer>
        <div className="bg-violet-600 h-5"></div>
      </div>
    </div>
  );
}

export default App;
