/*use client*/
import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import ItemMenu from "../../components/itemMenu";
import IconUser from "../../assets/icon-user.svg"

const NavBar = () => {
    return (
        <>
            <nav className="flex items-center w-full h-20 bg-green-400">
              
                <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo" width={98} height={20} />
                        
                        <ul className="flex items-center gap-12 pl-40">
                            <li><ItemMenu nome="Inicio" /></li>
                            <li><ItemMenu nome="Marcar consulta" /></li>
                            <li><ItemMenu nome="Para você" /></li>
                            <li><ItemMenu nome="Sobre-nos" /></li>
                            <button className=" flex items-center  gap-4 bg-blue-500 text-white px-4 py-2 rounded pl-10 z-10">
                              <Image
                              src={IconUser}
                              alt="Usuário"
                            
                              />
                            <span className="font-bold">Entrar</span>
                            </button>
                        </ul>
                    </div>

                </div>

            </nav>
        </>
    );
};

export default NavBar;
