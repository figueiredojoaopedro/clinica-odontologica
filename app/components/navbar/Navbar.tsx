"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <nav className="shadow shadow-slate-500 px-8 py-4 flex flex-row justify-between items-center bg-white text-black">
        <div className="cursor-pointer px-3 py-1 bg-teal-500 hover:bg-teal-700 hover:scale-105 transition duration-300 ease-in-out text-white rounded-md">
          <Link href="/">Clinica Odontológica</Link>
        </div>
        <div>
          <div className="cursor-pointer px-3 py-1 bg-teal-500 hover:bg-teal-700 transition duration-300 ease-in-out text-white rounded-md">
            <Link href="/pages/login">
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
