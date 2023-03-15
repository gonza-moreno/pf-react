import { createContext, useState } from "react";

export const ItemCountContext = createContext(null);

const ItemCountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  return (
    <ItemCountContext.Provider value={{ count, setCount }}>
      {children}
    </ItemCountContext.Provider>
  );
};

export default ItemCountProvider;
