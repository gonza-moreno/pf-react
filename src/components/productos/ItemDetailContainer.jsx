import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../mocks/fakeApi";
import ItemCountProvider from "../../context/ItemCountProvider";

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

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemCountProvider>
          <div className="min-w-screen min-h-[90vh] bg-[#EB5E28] p-5 lg:p-10 overflow-hidden relative flex justify-center items-center">
            <ItemDetail producto={producto} />
          </div>
        </ItemCountProvider>
      )}
    </div>
  );
};

export default ProductDetail;
