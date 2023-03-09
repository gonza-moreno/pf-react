import React, { useEffect, useState } from "react";
import { getProducts } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

import Loader from "../Loader";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { categoria } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((productos) => {
        if (categoria) {
          setProductos(
            productos.filter((prod) => prod.categoria === categoria)
          );
        } else {
          setProductos(productos);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [categoria]);

  return (
    <main>
      <h2 className="text-center my-3 text-3xl text-bold">{greeting}</h2>
      <div className="flex">
        {isLoading ? <Loader /> : <ItemList productos={productos} />}
      </div>
    </main>
  );
};

export default ItemListContainer;
