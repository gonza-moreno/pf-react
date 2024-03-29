import React from "react";
import Hero from "./Hero";

const MainContainer = () => {
  return (
    <main>
      <Hero
        imgFondo={`bg-guitarras`}
        colorFondo="bg-[#8f95d3]"
        textoTitulo="Las mejores guitarras están en MusiShop"
        link={"/categorias/guitarras"}
      />
      <Hero
        imgFondo={`bg-bateria`}
        colorFondo="bg-[#7a28cb]"
        textoTitulo="Encontra la bateria de tus sueños!"
        link={"/categorias/baterias"}
      />
      <Hero
        imgFondo={`bg-estudio`}
        colorFondo="bg-[#1c1c1c]"
        textoTitulo="Todos los instrumentos en un solo lugar"
        link={"/catalogo"}
      />
    </main>
  );
};

export default MainContainer;
