import Image from "next/image";
import NavBar from "./components/navbar/Navbar";
import fundo from "./assets/fundo.jpg";



export default function Home() {
  return (
    <>
    <NavBar></NavBar>
        <Image className="w-full z-0" src={fundo} alt="fundo"></Image>

    </>
  );
} 
