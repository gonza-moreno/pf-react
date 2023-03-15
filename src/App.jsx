import { Routes, Route } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartProvider";

import ItemListContainer from "./components/productos/ItemListContainer";
import MainContainer from "./components/index/MainContainer";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import AboutContainer from "./components/about/AboutContainer";
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/productos/ItemDetailContainer";

function App() {
  return (
    <div className="App bg-gray-200 no-scrollbar">
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainContainer />} />
          <Route
            exact
            path="/catalogo"
            element={
              <ItemListContainer
                greeting={"Todas las marcas en un solo lugar"}
              />
            }
          />
          <Route
            exact
            path="/categorias/:categoria"
            element={
              <ItemListContainer
                greeting={"Todas las marcas en un solo lugar"}
              />
            }
          />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<AboutContainer />} />
        </Routes>
      </ShoppingCartProvider>
      <Footer />
    </div>
  );
}

export default App;
