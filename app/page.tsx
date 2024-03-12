import Image from "next/image";
import NavBar from "./components/navbar/Navbar";
import fundo from "./assets/fundo.jpg";
import Footer from "./components/footer/footer";
import ImgOdonto from "./assets/odonto.png";
import   ImageOdonto from "./assets/imgFoneOdonto.png"

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="relative">
        
        <Image
          className="w-full h-[704px] bg-no-repeat bg-no-center bg-cover"
          src={fundo}
          alt="fundo"
        />
        {/* Conteúdo sobre a imagem */}
        <div className="absolute inset-0 flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
          <div className="flex-1 max-w-[450px]">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">
                Tenha a saúde em primeiro lugar
              </h1>
              <p className="text-xl max-w-[40.8rem] mb-8">
                Todos os cuidados que você precisa em um só lugar. Simples e
                completo, feito para você
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="border-2 border-black bg-transparent text-white px-4 py-2 rounded">
                <span>Marcar consulta</span>
              </button>
              <button className="border-2 border-black bg-transparent text-white px-4 py-2 rounded">
                <span>Entrar em contato</span>
              </button>
            </div>
            <button className="flex items-center mt-4 space-x-3 mt-20">
            <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/long-arrow-down.png" alt="long-arrow-down"/>
              <span className="text-white text-sm font-bold">
                Continue explorando
              </span>
            </button>
            
          </div>
          <div>
            <Image
              className="rounded-lg"
              src={ImgOdonto}
              alt="Img odonto"
              width={450}
              height={500}
              objectFit="cover"
              style={{ opacity: "0.90", marginLeft: "-80px" }}
            />
          </div>
        </div>
      </div>
      <section className= 'relative bg-white	 w-full h-[965px] '>
      <div className='flex-1 max-w-[594px] ml-14 pt-32'>
        <span className=' block text-teal-600	 text-sm font-bold uppercase mb-9 leading-tight'>Serviços Exclusivos</span>
        <h2 className='text-black text-[46px] font-bold mb-6'>Lorem ipsum, dolor sit amet consectetur </h2>
        <p className='text-lg max-w-[554px] mb-16 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla voluptas,
          fugiat voluptatibus totam assumenda repudiandae alias ullam error cupiditate? Doloremque,</p>
        <ul className='flex flex-col items-start gap-9'>
          <li className='flex items-center gap-3 pb-9 border-b-[1px] border-opacity-grey'>
            <div className='w-7 h-7 flex items-center justify-center'>
              <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/google-pixel6.png" alt="google-pixel6" />
            </div>
            <p className='flex-1 text-gray-500 pr-4'>bla bla saude bla bla bla lalal o joão é gay ele é sim queima a rosca</p>
          </li>

          <li className='flex items-center gap-3 pb-9 border-b-[1px] border-opacity-grey'>
            <div className='w-7 h-7 flex items-center justify-center'>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/tooth.png" alt="tooth"/>
            </div>
            <p className='flex-1 text-gray-500 pr-4'>bla bla saude bla bla bla lalal o joão é gay ele é sim queima a rosca</p>
          </li>

          <li className='flex items-center gap-3 pb-9 border-b-[1px] border-opacity-grey'>
            <div className='w-7 h-7 flex items-center justify-center'>
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/shortlist.png" alt="shortlist"/>
            </div>
            <p className='flex-1 text-gray-500 pr-4'>bla bla saude bla bla bla lalal o joão é gay ele é sim queima a rosca</p>
          </li>

          <li className='flex items-center gap-3 '>
            <div className='w-7 h-7 flex items-center justify-center'>
            <img width="40" height="40" src="https://img.icons8.com/ultraviolet/40/place-marker--v1.png" alt="place-marker--v1"/>
            </div>
            <p className='flex-1 text-gray-500 pr-4'>bla bla saude bla bla bla lalal o joão é gay ele é sim queima a rosca</p>
          </li>
        </ul>
      </div>
      <div className='absolute top-0 right-0 w-[32%] h-full flex items-center bg-slate-200	'>
      <Image className='translate-x-[-50%]'
       src={ImageOdonto}
       alt=" imagem odonto"
      />
      </div>
    </section>

      <Footer />
    </>
  );
}
