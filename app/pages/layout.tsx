import React from "react";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar></NavBar>
      <section>{children}</section>
      <Footer></Footer>
    </>
  );
}
