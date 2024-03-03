import Image from "next/image";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">
        <h1>Nice to meet you!</h1>
      </main>
    </>
  );
}
