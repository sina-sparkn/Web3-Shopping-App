import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Cloting = () => {
  const { id } = useParams();
  let AllProducts;
  if (id == "Accessories") {
    AllProducts = useSelector((state) => state.Accessories);
  } else if (id == "Clothing") {
    AllProducts = useSelector((state) => state.Clothing);
  }

  return (
    <div className="grid grid-cols-5 px-16 gap-10 justify-items-center">
      {AllProducts.map((item, index) => {
        return (
          <div key={index} className=" rounded-xl p-3 cursor-pointer relative">
            <Link to={`${item.item}`}>
              <img
                src={item.image}
                className="ring ring-transparent mb-5 rounded-xl hover:ring-violet-600 duration-200"
              />
            </Link>
            <div className="flex justify-between">
              <p>{item.item}</p>
              <p className="hover:bg-violet-700 px-2 rounded-lg duration-200">
                {item.price} ETH
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cloting;
