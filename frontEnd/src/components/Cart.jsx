import { useSelector } from "react-redux";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);

  return (
    <div className="px-16 w-full flex flex-col items-center justify-center">
      {AddedProducts.map((item, index) => {
        return (
          <div key={index} className="w-40">
            <img src={item.image} alt={item.name} />
            <div className="flex justify-between">
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
