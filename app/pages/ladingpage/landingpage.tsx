import React from "react";
import Image from "next/image";
import Link from "next/link";
import fundo from "../../assets/fundo.jpg";

const Landing = () => {
  return (
    <>
      <Image className="w-full z-0" src={fundo} alt="fundo"></Image>
    </>
  );
};

export default Landing;
