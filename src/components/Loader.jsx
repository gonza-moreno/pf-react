import React from "react";

const Loader = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-10 h-10 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="ml-2 text-xl">cargando...</p>
      </div>
    </div>
  );
};

export default Loader;
