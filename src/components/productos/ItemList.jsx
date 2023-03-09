import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap">
      {productos.map(({ titulo, precio, img, descripcion }, i) => {
        return (
          <Item
            titulo={titulo}
            precio={precio}
            img={img}
            descripcion={descripcion}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
