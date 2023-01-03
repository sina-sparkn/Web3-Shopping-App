import { useSelector } from "react-redux";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cloting = () => {
  const AllClothes = useSelector((state) => state.Clothes);
  console.log(AllClothes);
  return (
    <div className="grid grid-cols-5 px-16 gap-10 justify-items-center">
      {AllClothes.map((item, index) => {
        return (
          <div
            key={index}
            className="ring ring-violet-600 rounded-xl p-3 pb-5 cursor-pointer relative "
          >
            <img src={item.image} className="mb-5 rounded-xl " />
            {/* <FontAwesomeIcon
              icon={faEthereum}
              className="px-3 py-2.5 bg-black/30 rounded-full absolute top-7 left-7"
            /> */}
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
