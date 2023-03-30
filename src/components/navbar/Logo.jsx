import React from "react";
import { Link } from "react-router-dom";

import iconHeadphones from "../../assets/svg/headphones.svg";

const Logo = () => {
  return (
    <Link className="flex items-center" href="index.html" to={"/"}>
      <img src={iconHeadphones} alt="icon headphones" className="max-h-10" />
      <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
        MusiShop
      </p>
    </Link>
  );
};

export default Logo;
