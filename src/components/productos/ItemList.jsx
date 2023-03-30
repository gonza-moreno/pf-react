import React from "react";
import Item from "./Item";

const ItemList = ({ productos, greeting }) => {
  return (
    <main className="min-h-screen bg-[#eb5e28] py-4">
      <h2 className="text-center text-3xl text-bold">{greeting}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productos.map((producto) => {
          return <Item producto={producto} key={producto.id} />;
        })}
      </div>
    </main>
  );
};

export default ItemList;
