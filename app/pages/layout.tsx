import Navbar from "../components/navbar/navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <section>{children}</section>
    </>
  );
}
