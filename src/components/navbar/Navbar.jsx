import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CartWidget from "./CartWidget";

import menu from "../../assets/svg/menu.svg";
import close from "../../assets/svg/close.svg";
const NavBar = () => {
  const links = [
    { titulo: "Inicio", link: "" },
    { titulo: "Catálogo", link: "catalogo" },
    { titulo: "Nosotros", link: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:flex md:justify-between md:items-center px-6 py-4 shadow-lg">
      <div className="flex justify-between">
        <Logo />
        <button
          className={`md:hidden ${
            isOpen ? "bg-[#7a28cb]" : "bg-[#eb5e28]"
          }  rounded-md p-2 duration-300`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={isOpen ? close : menu}
            alt="hamburguer menu"
            className="max-w-[30px]"
          />
        </button>
      </div>
      <div
        className={`md:items-center md:flex md:flex-row ${
          isOpen ? "flex flex-col justify-start items-end" : "hidden"
        }`}
      >
        <ul className="ml-2 flex flex-col md:flex-row">
          {links?.map(({ titulo, link }, i) => {
            return (
              <Link to={`/${link}`} key={i}>
                <li
                  className="hover:cursor-pointer text-2xl text-semibold text-right md:mx-2 my-2 hover:text-orange-600 duration-300 "
                  key={i}
                >
                  {titulo}
                </li>
              </Link>
            );
          })}
          <Link to={"categorias/guitarras"}>
            <li>guitarras</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
