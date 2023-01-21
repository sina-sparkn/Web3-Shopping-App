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
    <div className="grid grid-cols-2 gap-3 px-5 py-7 bg-maindarkpurple/70">
      {AllProducts.map((item, index) => {
        return (
          <Link to={`${item.item}`}>
            <div key={index} className="pb-3 rounded-xl ring-2 ring-white/50">
              <img src={item.image} className="mb-3 rounded-t-xl" />

              <div className="px-3 flex gap-5 flex-col">
                <p className="text-xl">{item.item}</p>
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
