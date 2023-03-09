import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { descripcion, marca, precio, titulo, img } = producto;
  return (
    <div className="min-w-screen min-h-[90vh] bg-[#EB5E28] p-5 lg:p-10 overflow-hidden relative flex justify-center items-center">
      <div className="bg-slate-400 flex flex-col md:flex-row md:p-5 md:pl-0 md:max-h-[500px] md:max-w-[1100px] overflow-hidden">
        <div className="max-h-[300px] w-[100%] sm:max-h-[500px] md:h-[100%] md:w-[50%] overflow-hidden">
          <img src={img} />
        </div>

        <div className="p-8 flex flex-col justify-around">
          <div>
            <h2 className="text-2xl font-bold">
              {titulo} - {marca}
            </h2>
            <p className="text-xl max-w-xl">{descripcion}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col sm:flex-row my-4 justify-between sm:justify-around items-center">
              <h2 className="p-4 rounded bg-gray-300 max-w-max text-2xl font-bold my-4">
                ${precio}
              </h2>
              <button className="font-bold">Agregar al carrito</button>
            </div>
            <ItemCount initial={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
