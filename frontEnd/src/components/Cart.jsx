import { useSelector } from "react-redux";

const Cart = () => {
  const AddedProducts = useSelector((state) => state.Cart);
  let TotalPrice = 0;
  AddedProducts.map((item) => {
    TotalPrice += parseFloat(item.price);
  });

  TotalPrice -= 0.000000000000000001;
  if (TotalPrice === 0) {
    return (
      <div className="flex h-3/4 text-3xl items-center justify-center">
        There's nothing here!
      </div>
    );
  } else {
    return (
      <div className="px-16 flex mb-10">
        <section className="w-1/4 flex flex-col gap-4 justify-items-center h-screen overflow-scroll">
          {AddedProducts.map((item, index) => {
            return (
              <div key={index} className="pr-3">
                <img src={item.image} alt={item.name} />
                <div className="flex justify-between">
                  <p>{item.name}</p>
                  <p>{item.price} ETH</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="w-3/4 flex items-center gap-10 flex-col">
          <p>{`Total price : ${TotalPrice} ETH`}</p>
          <button className="px-7 py-3 rounded-full text-white bg-violet-600 hover:bg-white hover:text-black duration-200">
            Checkout with metamask
          </button>
        </section>
      </div>
    );
  }
};

export default Cart;
