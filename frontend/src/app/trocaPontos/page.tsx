import NavBar from "@/components/navbar";
import Image from "next/image";

export default function TrocaPontos() {
  return (
    <div>
      <NavBar previousLink="/main" pageName="Troca de pontos"></NavBar>
      <div className="text-green-900 text-2xl mx-7">
        <h2>Saldo de EcoPontos</h2>
        <p className="flex flex-row justify-between">
          <span className="text-gray-400"> 2.000 Pontos </span>
        </p>
      </div>
      <hr className="mx-7 my-8 bg-green-950 border-t-1 border-green-950" />
      <div className="text-gray-700 mx-7">
        <h1 className="text-2xl text-green-900 mb-8">Vamos as compras</h1>
        <div
          className="bg-gray-200 w-full rounded-xl flex h-[10vh] p-2 items-center"
          style={{ boxShadow: "-5px 4px 4px 2px rgba(0, 0, 0, 0.25)" }}
        >
          <Image
            src="/Icons/IconClaro.svg"
            className=" h-full rounded-l-lg"
            alt="Claro"
            width={100}
            height={100}
          ></Image>
          <h1 className="text-[2.5vh]"> Desconto em recargas</h1>
        </div>
      </div>
      <div className="mx-7 mt-9">
        <h1 className="text-2xl text-green-900 mb-8"> Cooperativa Mudar</h1>
        <div className="flex justify-around text-center text-gray-700 font-semibold">
          <div
            className="flex flex-col columns-1 bg-gray-200 w-[15vh] h-[20vh] rounded-xl justify-center p-2 items-center"
            style={{ boxShadow: "-5px 4px 4px 2px rgba(0, 0, 0, 0.25)" }}
          >
            <Image
              src="/images/portaCopos.svg"
              className=" rounded-l-lg"
              alt="Claro"
              width={100}
              height={100}
            ></Image>
            <p>
              <span>Porta Copos</span> <br />
              <span>600 Pontos</span>
            </p>
          </div>
          <div
            className="flex flex-col columns-1 bg-gray-200 w-[15vh] h-[20vh] rounded-xl justify-center p-2 items-center"
            style={{ boxShadow: "-5px 4px 4px 2px rgba(0, 0, 0, 0.25)" }}
          >
            <Image
              src="/images/garrafa.svg"
              className=" rounded-l-lg w-max"
              alt="Claro"
              width={100}
              height={100}
            ></Image>
            <p>
              <span>Garrafa</span> <br />
              <span>600 Pontos</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
