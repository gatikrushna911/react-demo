import { useSelector } from "react-redux";
import Itemlist from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="font-bold text-center text-2xl m-5">cart</div>
      <Itemlist items={cartItems}></Itemlist>
    </>
  );
};

export default Cart;
