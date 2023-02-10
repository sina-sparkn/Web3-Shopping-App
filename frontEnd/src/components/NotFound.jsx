import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gradient-to-b from-black to-maindarkpurple h-screen">
      <div className="flex flex-col gap-10 text-white pt-80 px-5 items-center justify-center ">
        <h6 className="text-5xl">404 page not found</h6>
        <div className="flex w-full items-center justify-center gap-10">
          <Link to="/">
            <button className="hover:bg-violet-500/30 outline outline-violet-500 p-3 px-5 rounded-lg font-semibold duration-200">
              Return to Home
            </button>
          </Link>
          <Link to="/Shop">
            <button className="hover:bg-violet-500/30 outline outline-violet-500 p-3 px-5 rounded-lg font-semibold duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
