import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../loaders/Loader";
import ItemDetail from "./ItemDetail";

import { doc, getDoc, getFirestore } from "firebase/firestore";

const ProductDetail = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();

    const singleProduct = doc(db, "instrumentos", id);

    getDoc(singleProduct).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data();

        setIsLoading(false);
        setProducto({
          ...doc,
          id: id,
        });
      }
    });
  }, [id]);

  return (
    <>
      <div className="min-w-screen min-h-[90vh] bg-[#EB5E28] p-5 lg:p-10 overflow-hidden relative flex justify-center items-center">
        {isLoading ? <Loader /> : <ItemDetail producto={producto} />}
      </div>
    </>
  );
};

export default ProductDetail;
