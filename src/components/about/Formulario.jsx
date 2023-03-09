import React from "react";

const Formulario = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-white sm:rounded-lg overflow-hidden shadow-lg p-6 flex flex-col items-center text-center border-y-2 sm:border-2 border-black mx-auto my-6 max-w-2xl"
      id="contacto"
    >
      <h2 className="text-2xl font-bold">Contacto</h2>
      <p className="mb-6">Te contactaremos a la brevedad!</p>
      <form>
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Gonzalo Moreno..."
            className="form-input text-center"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="correo"
            className="block text-gray-700 font-bold mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Ej: alguien.123@algo.com..."
            className="form-input text-center"
          />
        </div>

        <h3 className="text-2xl font-semibold">
          Por si quieres pasar a visitar...
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <p className="text-gray-700 mb-2">+1 123 456 7890</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="direccion"
          >
            Dirección
          </label>
          <p className="text-gray-700 mb-2">123 Calle Falsa, Springfield</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
