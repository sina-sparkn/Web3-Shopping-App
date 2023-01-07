import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

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

  return (
    <div className="grid grid-cols-4 px-14 gap-10 justify-items-center">
      {AllProducts.map((item, index) => {
        return (
          <div key={index} className=" rounded-xl p-3 relative ">
            <Link to={`${item.item}`}>
              <img
                loading="lazy"
                src={item.image}
                className="ring ring-transparent mb-5 rounded-xl cursor-pointer hover:ring-violet-600 duration-200"
              />
            </Link>
            <div className="flex justify-between">
              <p className="font-bold cursor-default">{item.item}</p>
              <Link to={`${item.item}`}>
                <p className="hover:bg-violet-700 px-2 cursor-pointer rounded-lg duration-200">
                  {item.price} ETH
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cloting;
