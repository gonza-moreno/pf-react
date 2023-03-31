import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/ShoppingCartProvider";

import Swal from "sweetalert2";

const ItemCount = ({ stock, producto }) => {
  const { handleClick, cart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="max-w-[300px] min-w-[200px] flex justify-around items-center bg-slate-800 rounded-md text-white">
        <button className="text-6xl" onClick={restar}>
          -
        </button>
        <span className="text-4xl">{count}</span>
        <button className="text-4xl" onClick={sumar}>
          +
        </button>
      </div>
      <div className="mt-2">
        <button
          className="font-bold text-xl p-4 rounded-xl text-white hover:text-black bg-[#7a28cb] hover:bg-[#eb5e28] duration-500 md:self-start"
          onClick={() => {
            const Toast = Swal.mixin({
              toast: true,
              position: "bottom-start",
              timer: 3000,
              timerProgressBar: true,
              title: "Agregado al carrito!",
              color: "black",
              icon: "success",
              background: "#7a28cb",
              iconColor: "#8f95d3",
              showConfirmButton: false,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            handleClick({ cantidad: count, product: producto });

            Toast.fire();
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
