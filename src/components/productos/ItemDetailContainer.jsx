import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../mocks/fakeApi";

const ProductDetail = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((productos) => {
        if (id) {
          setProducto(productos.find((prod) => prod.id === id));
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log(producto);

  return (
    <div>{isLoading ? <Loader /> : <ItemDetail producto={producto} />}</div>
  );
};

export default ProductDetail;
