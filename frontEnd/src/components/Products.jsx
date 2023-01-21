import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MintLogo from "../assets/svg/ticonwhite.svg";

const Cloting = () => {
  const { id } = useParams();
  let AllProducts;
  if (id === "Accessories") {
    AllProducts = useSelector((state) => state.Accessories);
  } else if (id === "Tshirts") {
    AllProducts = useSelector((state) => state.Tshirts);
  } else if (id === "Watches") {
    AllProducts = useSelector((state) => state.Watches);
  }

  const mooninkprice = 0.328;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-10 gap-3 p-5 bg-maindarkpurple/70">
      {AllProducts.map((item, index) => {
        return (
          <Link to={`${item.item}`}>
            <div
              key={index}
              className="pb-3 flex flex-col gap-2 rounded-xl ring-2 overflow-hidden ring-white/50 hover:bg-violet-600/20 duration-500"
            >
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
                  <span className="text-white/50 text-base">{`≈ $${Math.round(
                    item.price * mooninkprice
                  )}`}</span>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cloting;
