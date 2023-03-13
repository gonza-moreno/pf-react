import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/shoppingCartProvider";

const CartWidget = () => {
  const { cantProductos } = useContext(CartContext);

  return (
    <Link className="flex items-center" to="/cart">
      <img src="src/assets/svg/cart.svg" alt="cart icon" className="max-h-10" />
      <p className="text-3xl ">{cantProductos}</p>
    </Link>
  );
};

export default CartWidget;
