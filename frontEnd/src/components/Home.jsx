import heroImg from "../assets/svg/Asset 6.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import mooninklogo1 from "../assets/svg/Asset 2.svg";
import mooninklogo2 from "../assets/svg/Asset 3.svg";
import mooninklogo3 from "../assets/svg/Asset 4.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-auto bg-black ">
      <div className="w-full h-auto text-white bg-black">
        <section className="w-full h-auto flex justify-between py-5 px-10 mb-20">
          <Link className="flex gap-5" to="/">
            <img src={mooninklogo1} alt="mooninklogo" className="w-8" />
            <img src={mooninklogo2} alt="moonink-typeface" className="w-44" />
          </Link>

          <div className="flex items-center gap-10">
            <Link
              to="/QA"
              className="text-gray-300 hover:text-white hover:underline duration-200"
            >
              Q&A
            </Link>
            <button className="bg-violet-700 font-bold rounded-xl hover:bg-white hover:text-black duration-200">
              <Link to="/Shop">
                <div className="w-full h-full px-5 py-3">Launch The App</div>
              </Link>
            </button>
          </div>
        </section>
        <section className="pl-10 flex">
          <div className="w-1/2 flex flex-col pt-16 gap-12">
            <h1 className=" font-extrabold text-7xl">
              THE FIRST WEB3 <br /> SHOPPING EXPERIENCE
            </h1>
            <button className="bg-violet-700 font-bold text-xl max-w-xs rounded-xl hover:bg-white hover:text-black duration-200">
              <Link to="/Shop">
                <div className="w-full h-full py-4">Launch The App</div>
              </Link>
            </button>
            <div className="flex gap-4 items-center text-2xl">
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
        <hr className="mt-20 border-0 h-0.5 bg-white/10" />
        <footer className="mt-12 px-10 pb-10 flex justify-between items-center">
          <img src={mooninklogo2} alt="moonink-fullogo" className="w-28" />
          <p className="text-white/40 text-xs">
            Copyright © 2023 MOONINK Inc. All rights reserved.
          </p>

          <div className="flex gap-4 items-center text-xl">
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
};

export default Home;
