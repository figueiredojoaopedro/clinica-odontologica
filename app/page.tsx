import Image from "next/image";
import NavBar from "./components/navbar/Navbar";
import fundo from "./assets/fundo.jpg";
import Footer from "./components/footer/footer"



export default function Home() {
  return (
    <>
    <NavBar></NavBar>
        <Image className="w-full z-0" src={fundo} alt="fundo"></Image>
        <Footer></Footer>

    </>
  );
} 
