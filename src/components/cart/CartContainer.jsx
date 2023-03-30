import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/ShoppingCartProvider";
import { Link, useNavigate } from "react-router-dom";

import ItemCart from "./ItemCart";
import CheckoutContainer from "../checkout/CheckoutContainer";

import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/catalogo");
    }
  }, [cart]);

  return (
    <div className="min-h-screen bg-[#8f95d3] py-4">
      {cart.map((producto) => {
        return <ItemCart producto={producto} key={producto.id} />;
      })}

      <section className="my-4 flex justify-evenly text-xl font-semibold border-y-2 border-black mx-8 p-2 bg-[#1C1C1C] text-white">
        <Link
          to={"/catalogo"}
          className="rounded-xl hover:bg-green-700 duration-300 p-2"
        >
          Seguir comprando
        </Link>
        <button
          className="rounded-xl hover:bg-red-700 duration-300 p-2"
          onClick={() => {
            Swal.fire({
              title: "Desea limpiar el carrito?",
              text: "Puedes volver a agregar los productos!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Estoy seguro",
              confirmButtonColor: "#3085d6",
            }).then((result) => {
              if (result.isConfirmed) {
                setCart([]);
              }
            });
          }}
        >
          Limpiar carrito
        </button>
      </section>

      <section className="flex justify-evenly text-2xl font-semibold border-y-2 border-black mx-8 p-4 bg-[#E1E6E1]">
        <h2 className="">Total:</h2>
        <span className="">
          ${cart.reduce((acc, curr) => (acc += curr.precio * curr.cantidad), 0)}
        </span>
      </section>

      <CheckoutContainer />
    </div>
  );
};

export default CartContainer;
