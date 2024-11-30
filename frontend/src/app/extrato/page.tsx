import NavBar from "@/components/navbar";
import SaldoEcoPontos from "../main/components/saldo";

export default function Extrato() {
  return (
    <div>
      <NavBar previousLink="/main" pageName="Extrato"></NavBar>
      <SaldoEcoPontos></SaldoEcoPontos>
      <hr className="mx-7 my-8 bg-green-950 border-t-1 border-green-950" />
      <div className=" mx-7">
        <h1 className="text-green-900 text-2xl mb-6">Extrato </h1>
        <div className="text-gray-500 text-lg font-semibold">
          <div className="flex flex-row justify-between items-center">
            <span>2.000 Pontos</span>
            <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-2"></div>
            <span>Saldo</span>
          </div>
          <div className="text-green-700 flex flex-row justify-between items-center">
            <span>1.000 Pontos</span>
            <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-2"></div>
            <span>Resgate</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>1.000 Pontos</span>
            <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-2"></div>
            <span>Saldo</span>
          </div>
          <div className=" text-red-700 flex flex-row justify-between items-center">
            <span>500 Pontos</span>
            <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-2"></div>
            <span>10% desconto</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>1.500 Pontos</span>
            <div className="flex-1 border-b-2 border-dashed border-gray-400 mx-2"></div>
            <span>Saldo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
