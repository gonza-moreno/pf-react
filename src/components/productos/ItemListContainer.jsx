import React, { useEffect, useState } from "react";
import { getProducts } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((item) => item.categoria === categoria));
        } else {
          setProductos(res);
        }
      })
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <main>
      <h2 className="text-center my-3 text-3xl text-bold">{greeting}</h2>
      <div className="flex">
        <ItemList productos={productos} />
      </div>
    </main>
  );
};

export default ItemListContainer;
