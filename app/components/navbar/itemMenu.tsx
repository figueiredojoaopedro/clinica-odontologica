import Image from "next/image";

type props = {
  nome: String;
};

export function itemMenu({ nome }: props) {
  return (
    <button className="flex items-center gap-3">
      <span className=" text-white font-bold">{nome}</span>
    </button>
  );
}

export default itemMenu;
