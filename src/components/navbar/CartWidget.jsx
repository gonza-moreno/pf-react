import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/ShoppingCartProvider";

import cartIcon from "../../assets/svg/cart.svg";

const CartWidget = () => {
  const { cart, cantidadTotal } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <Link className="flex items-center" to="/cart">
          <img src={cartIcon} alt="cart icon" className="max-h-10" />
          <p className="text-3xl ">{cantidadTotal}</p>
        </Link>
      ) : (
        <div className="flex items-center">
          <img src={cartIcon} alt="cart icon" className="max-h-10" />
          <p className="text-3xl ">{cantidadTotal}</p>
        </div>
      )}
    </>
  );
};

export default CartWidget;
