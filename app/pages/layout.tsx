import Header from "../components/header/Header"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header/>
      <section>{children}</section>
    </>
  );
}
