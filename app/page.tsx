import Image from "next/image";
import Header from "./components/header/Header";
import Section1 from "./components/section/section1";

export default function Home() {
  return (
    <>
      <header>
      <Header/>
      <Section1/>
      
      </header>
      <main className="">
        <h1>Nice to meet you!</h1>
      </main>
    </>
  );
}
