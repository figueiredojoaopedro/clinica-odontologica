"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import ItemMenu from "./itemMenu";

const NavBar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <header>
      <nav className="shadow shadow-slate-500 px-8 py-1 flex flex-row justify-between items-center bg-gray-800 text-black">
        <div className="cursor-pointer w-16 px-3 py-1 hover:scale-105 transition duration-300 ease-in-out">
          <Image className="w-full" src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-12">
            <li></li>
            <li>
              <ItemMenu nome="Marcar consulta" />
            </li>
            <li>
              <ItemMenu nome="Para você" />
            </li>
            <li>
              <ItemMenu nome="Sobre-nos" />
            </li>
          </ul>
        </div>
        <div>
          <div className="cursor-pointer px-3 py-1 bg-teal-500 hover:bg-teal-700 transition duration-300 ease-in-out text-white rounded-md">
            <Link href="/pages/login">
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
