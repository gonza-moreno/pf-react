import React, { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/ShoppingCartProvider";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const { cart, setCart } = useContext(CartContext);

  const db = getFirestore();

  const order = {
    nombre,
    correo,
    items: cart.map((item) => {
      return {
        id: item.id,
        titulo: item.titulo,
        precio: item.precio,
        cantidad: item.cantidad,
      };
    }),
    total: cart.reduce((acc, curr) => {
      return (acc += curr.precio * curr.cantidad);
    }, 0),
  };

  const orderCollection = collection(db, "orden");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(orderCollection, order).then(({ id }) => {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        icon: "success",
        title: (
          <h2 className="font-semibold">Gracias por confiar en MusiShop</h2>
        ),
        text: `Su orden de compra es ${id}`,
        footer: (
          <button
            className="p-2 text-black bg-blue-700 text-xl font-semibold hover:bg-blue-500 duration-300 rounded-xl static"
            onClick={(e) => navigator.clipboard.writeText(id)}
          >
            Copiar orden de compra
          </button>
        ),
        willClose: () => {
          setCart([]);
        },
      });
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center text-xl p-4 min-h-[350px]"
      onSubmit={handleSubmit}
    >
      <h2 className="font-semibold">Datos del comprador</h2>

      <label htmlFor="nombre" className="my-4">
        <input
          type="text"
          id="nombre"
          placeholder="Nombre completo..."
          required
          className="p-2 rounded-xl focus:outline-none"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
      </label>
      <label htmlFor="correo" className="my-4">
        <input
          type="email"
          id="correo"
          placeholder="Correo..."
          required
          className="p-2 rounded-xl focus:outline-none"
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      {/* <label htmlFor="correo" className="my-4">
        <input
          type="email"
          id="correo"
          placeholder="Confirmar Correo..."
          required
          className="p-2 rounded-xl focus:outline-none"
        />
      </label> */}

      <button
        type="submit"
        className="rounded-xl bg-green-600 p-4 hover:bg-green-500 duration-300"
      >
        Finalizar compra
      </button>
    </form>
  );
};

export default Formulario;
