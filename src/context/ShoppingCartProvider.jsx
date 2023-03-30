import { useEffect, createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(() => {
    const sumaTotal = cart.reduce(
      (acc, current) => (acc += current.cantidad),
      0
    );

    setCantidadTotal(sumaTotal);
  }, [cart]);

  const handleClick = ({ cantidad, product }) => {
    const productoRepetido = cart.some((prod) => {
      return prod.id === product.id;
    });

    if (productoRepetido) {
      const itemRepetido = cart.find((item) => {
        return item.id === product.id;
      });

      itemRepetido.cantidad += cantidad;

      setCart([...cart]);
    } else {
      const item = {
        ...product,
        cantidad: cantidad,
      };

      setCart([...cart, item]);
    }
  };

  const eliminarProducto = (prod) => {
    const item = cart.find((item) => item.id === prod.id);
    const index = cart.indexOf(item);

    cart.splice(index, 1);

    setCart([...cart]);
  };

  const sumarCantidad = (prod) => {
    const item = cart.find((item) => item.id === prod.id);

    if (item.cantidad < item.stock) {
      item.cantidad++;

      setCart([...cart]);
    }
  };

  const restarCantidad = (prod) => {
    const item = cart.find((item) => item.id === prod.id);

    if (item.cantidad === 1) {
      eliminarProducto(prod);
    } else {
      item.cantidad--;

      setCart([...cart]);
    }
  };

  const modificarCantidad = (prod, operacion) => {
    operacion === "+" ? sumarCantidad(prod) : restarCantidad(prod);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleClick,
        cantidadTotal,
        modificarCantidad,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
