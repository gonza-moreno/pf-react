import React, { useContext, useState } from "react";
import { CartContext } from "../../context/ShoppingCartProvider";
import Swal from "sweetalert2";

import deleteIcon from "../../assets/svg/delete.svg";

const ItemCart = ({ producto }) => {
  const { eliminarProducto, modificarCantidad } = useContext(CartContext);

  const { titulo, precio, id, cantidad, img, marca, stock } = producto;

  const [cant, setCant] = useState(cantidad);

  const swalEliminar = (action) => {
    Swal.fire({
      title: "Deseas eliminar el producto?",
      text: "Puedes volver a agregarlo desde el catálogo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Estoy seguro!",
    }).then((result) => {
      if (result.isConfirmed) {
        action();
      }
    });
  };

  return (
    <div
      key={id}
      className="mx-8 my-4 p-4 bg-[#e1e6e1] flex justify-between shadow-2xl"
    >
      <div className="flex">
        <img
          src={img}
          alt="product image"
          className="max-h-[120px] rounded-lg"
        />
        <h2 className="text-xl font-semibold mx-4 self-start">
          {titulo} - {marca}
        </h2>
      </div>
      <div className="text-lg font-semibold flex">
        <div className="mx-4 flex flex-col justify-center">
          <span className="my-2">
            ${precio} X {cant}
          </span>
          <h3>Subtotal: ${precio * cant}</h3>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <button
              className="text-4xl leading-none text-bold p-2 px-4 bg-[#7a28cb] hover:bg-[#eb5e28] rounded-l-xl border-r-2 border-black duration-300"
              onClick={() => {
                modificarCantidad(producto, "+");

                if (cantidad < stock) {
                  setCant(cant + 1);
                }
              }}
            >
              +
            </button>
            <button
              className="text-4xl leading-none text-bold p-2 px-4 bg-[#7a28cb] hover:bg-[#eb5e28] rounded-r-xl duration-300"
              onClick={() => {
                if (cantidad > 1) {
                  modificarCantidad(producto, "-");
                  setCant(cant - 1);
                } else {
                  swalEliminar(() => {
                    modificarCantidad(producto, "-"), setCant(cant - 1);
                  });
                }
              }}
            >
              -
            </button>
          </div>
          <button
            onClick={() =>
              swalEliminar(() => {
                eliminarProducto(producto);
              })
            }
            className="my-2 flex p-2 hover:bg-red-700 duration-300 rounded-xl"
          >
            <img src={deleteIcon} alt="delete icon" className="max-w-[20px]" />
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
