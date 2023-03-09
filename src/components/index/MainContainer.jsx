import React from "react";
import Hero from "./Hero";

const MainContainer = () => {
  return (
    <main>
      <Hero
        imgFondo={`bg-[url("../src/assets/images/guitarras.jpg")]`}
        colorFondo="bg-[#8f95d3]"
        textoTitulo="Las mejores guitarras están en MusiShop"
        link={"/"}
      />
      <Hero
        imgFondo={`bg-[url("../src/assets/images/bateria-2.jpg")]`}
        colorFondo="bg-[#7a28cb]"
        textoTitulo="Encontra la bateria de tus sueños!"
        link={"/"}
      />
      <Hero
        imgFondo={`bg-[url("../src/assets/images/instrumentos.jpg")]`}
        colorFondo="bg-[#1c1c1c]"
        textoTitulo="Todos los instrumentos en un solo lugar"
        link={"/catalogo"}
      />
    </main>
  );
};

export default MainContainer;
