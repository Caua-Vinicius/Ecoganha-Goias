import NavBar from "@/components/navbar";
import SaldoEcoPontos from "../main/components/saldo";
import Image from "next/image";

export default function Ecopontos() {
  return (
    <div>
      <NavBar previousLink="/main" pageName="Ecopontos"></NavBar>
      <SaldoEcoPontos></SaldoEcoPontos>
      <hr className="mx-7 my-8 bg-green-950 border-t-1 border-green-950" />
      <div className="mx-7">
        <h1 className="text-green-900 text-2xl mb-6">Produtos</h1>
        <Image
          src="/images/produto.svg"
          alt="produto"
          width={100}
          height={100}
          className="w-[50vh] h-[20vh]"
        ></Image>
      </div>
    </div>
  );
}
