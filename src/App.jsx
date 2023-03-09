import ItemListContainer from "./components/productos/ItemListContainer";
import MainContainer from "./components/index/MainContainer";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutContainer from "./components/about/AboutContainer";

function App() {
  return (
    <div className="App bg-gray-200 no-scrollbar">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route
          exact
          path="/catalogo"
          element={
            <ItemListContainer greeting={"Todas las marcas en un solo lugar"} />
          }
        />
        <Route
          exact
          path="/categorias/:categoria"
          element={
            <ItemListContainer greeting={"Todas las marcas en un solo lugar"} />
          }
        />
        <Route exact path="/about" element={<AboutContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
