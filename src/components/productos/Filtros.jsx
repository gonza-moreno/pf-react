import React from "react";

const Filtros = () => {
  return (
    <div className="min-w-[15vw]">
      <form>
        <h2>Filtros</h2>
        <select>
          <option value="null">Categorias</option>
          <option value="guitarras">Guitarras</option>
          <option value="baterias">Baterias</option>
          <option value="bajos">Bajos</option>
        </select>
        <button type="submit">Aplicar</button>
      </form>
    </div>
  );
};

export default Filtros;
