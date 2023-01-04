import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
          <div
            key={index}
            className="ring ring-violet-600 rounded-xl p-3  cursor-pointer relative "
          >
            <img src={item.image} className="mb-5 rounded-xl " />
            <div className="flex justify-between">
              <p>{item.item}</p>
              <p className="hover:bg-white hover:text-black px-1 rounded-lg duration-200">
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
