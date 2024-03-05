import Image from "next/image";

import Seta from "../assets/arrow-down.svg";

type props = {
    nome: String
}

export function itemMenu({nome}: props){

return(
    <button className="flex items-center gap-3">
    <span className=" text-white font-bold">{nome}</span>
    <Image
    src={Seta}
    alt="Seta"
/>
</button>
)

}

export default itemMenu;