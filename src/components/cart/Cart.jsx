import React, { useContext } from "react";
import { CartContext } from "../../context/ShoppingCartProvider";

const Cart = () => {
  const { cart, setCart, cantidadProds, setCantidadProds } =
    useContext(CartContext);

  return (
    <div>
      {cart.map(({ titulo, precio, id }) => {
        return (
          <div key={id}>
            <h2>{titulo}</h2>
            <p>{precio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
