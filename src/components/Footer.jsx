import React from "react";
import { Link } from "react-router-dom";
import Logo from "./navbar/Logo";

import discordIcon from "../assets/svg/social-media/discord.svg";
import twitterIcon from "../assets/svg/social-media/twitter.svg";
import instagramIcon from "../assets/svg/social-media/instagram.svg";

const Footer = () => {
  const mediaIcons = [
    {
      icon: discordIcon,
      alt: "discord icon",
      link: "https://discord.com",
    },
    {
      icon: instagramIcon,
      alt: "instagram icon",
      link: "https://instagram.com",
    },
    {
      icon: twitterIcon,
      alt: "twitter icon",
      link: "https://twitter.com",
    },
  ];

  return (
    <footer className="min-h-[80px] flex flex-col items-center md:flex-row sm:justify-between py-4 md:py-0 px-6 bg-[#E1E6E1]">
      <Logo />
      <Link
        to="/about#contacto"
        className="font-semibold text-xl hover:text-orange-600 duration-300 my-2 md:py-0"
      >
        Contacto
      </Link>
      <div className="flex justify-center md:justify-end my-2 md:my-0 w-[180px]">
        {mediaIcons.map(({ icon, alt, link }, i) => {
          return (
            <Link to={link} target="_blank" key={i} className="mx-2">
              <img src={icon} alt={alt} className="h-5" />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
