import React from "react";

const CartWidget = () => {
  return (
    <a className="flex items-center" href="#">
      <img src="src/assets/svg/cart.svg" alt="cart icon" className="max-h-10" />
      <p className="text-3xl ">{4}</p>
    </a>
  );
};

export default CartWidget;
