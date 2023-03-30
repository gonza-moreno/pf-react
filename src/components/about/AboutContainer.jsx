import React from "react";
import Formulario from "./Formulario";

const AboutContainer = () => {
  return (
    <div>
      <section
        className={`bg-[url("../src/assets/images/fondo-about2.jpg")] bg-cover bg-center h-screen flex items-center justify-start text-end text-white`}
      >
        <div className="bg-slate-700 p-8 rounded-xl bg-opacity-60 ml-8">
          <h1 className="text-6xl font-bold mb-4">Quiénes somos</h1>
          <p className="text-2xl font-semibold max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod arcu ac ante posuere, ut convallis nisl interdum.
          </p>
        </div>
      </section>

      <section
        className={`bg-[url("../src/assets/images/fondo-about1.jpg")] bg-cover bg-center h-screen flex items-center justify-end text-center text-white`}
      >
        <div className="bg-slate-700 p-8 rounded-xl bg-opacity-60 mr-8">
          <h1 className="text-6xl font-bold mb-4">Nuestra historia</h1>
          <p className="text-2xl font-semibold max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod arcu ac ante posuere, ut convallis nisl interdum.
          </p>
        </div>
      </section>

      <section
        className={`bg-[url("../src/assets/images/guitarras-2.jpg")] bg-cover bg-center min-h-[120vh] flex items-center justify-start text-center text-white`}
      >
        <div className="bg-slate-700 p-8 rounded-xl bg-opacity-60 ml-8">
          <h1 className="text-6xl font-bold mb-4">Nuestro equipo</h1>
          <p className="text-2xl font-semibold max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod arcu ac ante posuere, ut convallis nisl interdum.
          </p>
        </div>
      </section>

      <Formulario />
    </div>
  );
};

export default AboutContainer;
