import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/svg/arrow-down.svg";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeDropDown = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col justify-center text-2xl relative">
      <span
        className="hover:cursor-pointer z-20 hover:text-orange-600 flex items-center"
        onClick={handleClick}
      >
        Categorias
        <img
          src={arrowDown}
          alt="arrow down icon"
          className={`max-w-[38px] ${open ? "rotate-180" : ""} duration-300`}
        />
      </span>
      <div
        className={`${
          open ? "block" : "hidden"
        } flex flex-col items-center absolute bottom-[-9rem] bg-[#e5e7eb] rounded-md z-10`}
      >
        <Link to={"categorias/guitarras"} onClick={closeDropDown}>
          <li className="hover:cursor-pointer text-2xl text-semibold text-right md:mx-2 my-2 hover:text-orange-600 duration-300">
            Guitarras
          </li>
        </Link>
        <Link to={"categorias/baterias"} onClick={closeDropDown}>
          <li className="hover:cursor-pointer text-2xl text-semibold text-right md:mx-2 my-2 hover:text-orange-600 duration-300">
            Baterias
          </li>
        </Link>
        <Link to={"categorias/bajos"} onClick={closeDropDown}>
          <li className="hover:cursor-pointer text-2xl text-semibold text-right md:mx-2 my-2 hover:text-orange-600 duration-300">
            Bajos
          </li>
        </Link>
      </div>
    </div>
  );
};

export default DropDown;
