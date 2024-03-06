import React from "react";
import NavBar from "../components/navbar/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar></NavBar>
      <section>{children}</section>
    </>
  );
}
