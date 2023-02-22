import React from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const links = ["Item 1", "Item 2", "Item 3"];
  return (
    <nav className="flex justify-between items-center px-6 py-2 shadow-lg">
      <div className="flex items-center">
        <Logo />
        <ul className="flex">
          {links.map((link, i) => {
            return (
              <li
                className="text-2xl text-semibold mx-2 hover:text-orange-600 duration-300"
                key={i}
              >
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
