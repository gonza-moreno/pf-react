import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ imgFondo, colorFondo, textoTitulo, link }) => {
  return (
    <div
      className={`${colorFondo} ${imgFondo} bg-cover bg-center min-h-[100vh] md:min-h-[120vh] max-w-[1600px] mx-auto p-10 flex flex-col justify-evenly md:justify-around items-start`}
    >
      <div className="text-white">
        <h2 className="font-semibold text-6xl my-1 max-w-md">{textoTitulo}</h2>
        <p className="text-2xl">Todas las marcas y modelos!</p>
      </div>

      <Link to={link}>
        <button className="rounded bg-[#E1E6E1] p-2 text-3xl font-semibold hover:bg-[#8f95d3] duration-500 flex justify-between">
          {"Ver más"}
          <img
            src="src/assets/svg/arrow-left.svg"
            alt="arrow left icon"
            className="max-h-10"
          />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
