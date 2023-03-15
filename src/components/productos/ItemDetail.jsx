import React, { useContext } from "react";
import ItemCount from "./ItemCount";

import { ItemCountContext } from "../../context/ItemCountProvider";

import { CartContext } from "../../context/ShoppingCartProvider";

const ItemDetail = ({ producto }) => {
  const { descripcion, marca, precio, titulo, img, stock } = producto;

  const { count } = useContext(ItemCountContext);

  const { handleClick } = useContext(CartContext);

  return (
    <div className="bg-[#e1e6e1] rounded-lg flex flex-col md:flex-row md:pl-0 md:h-[500px] md:max-w-[1100px] ">
      <div className="max-h-[300px] w-[100%] sm:max-h-[500px] md:w-[50%] overflow-hidden">
        <img
          src={img}
          className="object-cover h-full w-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        />
      </div>
      <div className="p-8 flex flex-col justify-around">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            {titulo} - {marca}
          </h2>
          <p className="text-xl max-w-xl">{descripcion}</p>

          <p className="text-xl leading-10">
            Stock: <span className="font-semibold">{stock}</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="flex flex-col sm:flex-row my-4 justify-between sm:justify-around items-center">
            <h2 className="p-4 rounded bg-gray-300 text-2xl font-bold my-4">
              ${precio}
            </h2>

            <ItemCount stock={stock} />
          </div>
          <button
            className="font-bold h-12 w-40 rounded-xl text-white hover:text-black bg-[#7a28cb] hover:bg-[#eb5e28] duration-500 md:self-start"
            onClick={() => handleClick({ cantidad: count, product: producto })}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
