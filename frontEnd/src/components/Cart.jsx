import { useSelector } from "react-redux";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);

  return (
    <div className="px-16">
      {AddedProducts.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
