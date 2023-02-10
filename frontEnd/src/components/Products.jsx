import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MintLogo from "../assets/svg/ticonwhite.svg";
import NotFound from "./NotFound";

const Cloting = () => {
  const { id } = useParams();
  let AllProducts;
  if (id === "Accessories") {
    AllProducts = useSelector((state) => state.Accessories);
  } else if (id === "Tshirts") {
    AllProducts = useSelector((state) => state.Tshirts);
  } else if (id === "Watches") {
    AllProducts = useSelector((state) => state.Watches);
  } else {
    return <NotFound />;
  }

  const mooninkprice = 0.328;

  const counter = AllProducts.length;

  return (
    <>
      <h6 className="mx-5 mt-5 py-1.5 text-3xl flex items-center justify-between bg-violet-500/40 rounded-xl px-3">
        <div className="flex items-center gap-1">{id}</div>
        <span className="text-3xl">{counter}</span>
      </h6>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-10 gap-3 px-5 pb-5 mt-5 bg-gradient-to-b from-maindarkpurple/20 to-maindarkpurple">
        {AllProducts.map((item, index) => {
          return (
            <Link key={index} to={`${item.item}`}>
              <div className="pb-3 flex flex-col gap-2 rounded-xl ring-2 overflow-hidden ring-white/10 hover:bg-violet-600/20 duration-500">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="mb-3 hover:scale-110 delay-500 rounded-t-xl w-full duration-700"
                  />
                </div>

                <div className="px-3 flex gap-4 flex-col h-1/4">
                  <p className="text-xl font-semibold">{item.item}</p>
                  <span className="flex items-center text-xl gap-2">
                    {item.price}
                    <img className="w-5" src={MintLogo} alt="MintLogo" />
                    <span className="text-white/50 text-base">{`≈ $${Math.floor(
                      item.price * mooninkprice
                    )}`}</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cloting;
