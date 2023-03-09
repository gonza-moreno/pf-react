import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    fetch("src/components/productos/productos.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const catFilter = productos.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <main>
      <h2 className="text-center my-3 text-3xl text-bold">{greeting}</h2>
      <div className="flex">
        {categoria ? (
          <ItemList productos={catFilter} />
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
    </main>
  );
};

export default ItemListContainer;
