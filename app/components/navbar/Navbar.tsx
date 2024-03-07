"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import ItemMenu from "./itemMenu";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <header>
      <nav className="shadow shadow-slate-500 px-8 py-1 flex flex-row justify-between items-center bg-gray-800 text-black">
        <div className="cursor-pointer w-16 px-3 py-1 hover:scale-105 transition duration-300 ease-in-out">
          <Image className="w-full" src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-12 text-white font-bold">
            <li>
              <Link href="/pages/marcarconsulta">Marcar consulta</Link>
            </li>
            <li>
              <Link href="/pages/paravoce">Para você</Link>
            </li>
            <li>
              <Link href="/pages/sobrenos">Sobre nós</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/pages/login">
            <div className="cursor-pointer px-3 py-1 bg-teal-500 hover:bg-teal-700 transition duration-300 ease-in-out text-white rounded-md">
              {isSignedIn ? "Sign Out" : "Sign In"}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
