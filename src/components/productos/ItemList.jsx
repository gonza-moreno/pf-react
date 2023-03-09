import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap">
      {productos.map((producto, i) => {
        return <Item producto={producto} key={i} />;
      })}
    </div>
  );
};

export default ItemList;
