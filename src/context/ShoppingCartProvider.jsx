import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const [cantidadProds, setCantidadProds] = useLocalStorage(
    "cantidadProductos",
    0
  );

  const handleClick = ({ cantidad, product }) => {
    const productoRepetido = [
      cart.some((prod) => prod.id === product.id),
      cart.find((prod) => prod.id === product.id),
    ];
    if (productoRepetido[0]) {
      productoRepetido[1].cantidad += cantidad;
      setCart([...cart]);
    } else {
      product.cantidad = cantidad;
      setCart([...cart, product]);
      setCantidadProds(cantidadProds + 1);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, cantidadProds, setCantidadProds, handleClick }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
