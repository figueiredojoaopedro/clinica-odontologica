import Image from "next/image";
<<<<<<< HEAD
import NavBar from "./components/navbar/Navbar";
import fundo from "./assets/fundo.jpg";
import Footer from "./components/footer/footer";
import ImgStore from "./assets/btn-apple-store.svg";
import ImgGogle from "./assets/btn-google-play.svg";
import ImgOdonto from "./assets/odonto.png";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Home({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className="relative">
        {/* Imagem de fundo */}
        <Image
          className="w-full h-[704px] bg-no-repeat bg-no-center bg-cover"
          src={fundo}
          alt="fundo"
        />
        {/* Conteúdo sobre a imagem */}
        <div className="absolute inset-0 flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
          <div className="flex-1 max-w-[450px]">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                Tenha a saúde em primeiro lugar
              </h1>
              <p className="text-xl max-w-[40.8rem] mb-8">
                Todos os cuidados que você precisa em um só lugar. Simples e
                completo, feito para você
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button>
                <Image src={ImgStore} alt="App Store" />
              </button>
              <button>
                <Image src={ImgGogle} alt="Google Play" />
              </button>
            </div>
            <button className="flex items-center mt-4 space-x-3">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-two-tone/24/circled-chevron-down--v1.png"
                alt="circled-chevron-down--v1"
              />
              <span className="text-white text-sm font-bold">
                Continue explorando
              </span>
            </button>
            <button className="flex items-center mt-4 space-x-3">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-two-tone/24/circled-chevron-down--v1.png"
                alt="circled-chevron-down--v1"
              />
              <span className="text-white text-sm font-bold">
                Continue explorando
              </span>
            </button>
            <button className="flex items-center mt-4 space-x-3">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-two-tone/24/circled-chevron-down--v1.png"
                alt="circled-chevron-down--v1"
              />
              <span className="text-white text-sm font-bold">
                Continue explorando
              </span>
            </button>
          </div>
          <div>
            
          <Image
    className="rounded-lg"
    src={ImgOdonto}
    alt="Img odonto"
    width={450}
    height={500}
    
   
    objectFit="cover"
    style={{ opacity: "0.90", marginLeft: "-80px" }} 
    />

          </div>
        </div>
      </div>
      <Footer />
=======
// import LandingPage from "@/app/pages/ladingpage/page";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
>>>>>>> 2a0e6df83e57011df3589fc216aeae8dace6eac0
    </>
  );
}
