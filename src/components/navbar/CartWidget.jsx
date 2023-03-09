import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link className="flex items-center" to="/cart">
      <img src="src/assets/svg/cart.svg" alt="cart icon" className="max-h-10" />
      <p className="text-3xl ">{4}</p>
    </Link>
  );
};

export default CartWidget;
