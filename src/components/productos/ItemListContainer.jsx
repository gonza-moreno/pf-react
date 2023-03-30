import React, { useEffect, useState } from "react";
import { getProducts } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Loader from "../loaders/Loader";

import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
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
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <>
      {productos.length === 0 ? (
        <Loader />
      ) : (
        <ItemList productos={productos} greeting={greeting} />
      )}
    </>
  );
};

export default ItemListContainer;
