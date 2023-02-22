import React from "react";

const Logo = () => {
  return (
    <a className="flex items-center" href="index.html">
      <img src="/headphones.svg" alt="icon headphones" className="max-h-10" />
      <p className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
        MusiShop
      </p>
    </a>
  );
};

export default Logo;
