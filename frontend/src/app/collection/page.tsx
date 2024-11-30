"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import ModalAviso from "../main/components/modalAviso";

export default function Collection() {
  const cooperativas = [
    {
      name: "Cooper Rama Cooperativa de Reciclagem",
      address:
        "Estr. 113, 293 - Chácaras Recreio São Joaquim, Goiânia - GO, 74470-210",
    },
    {
      name: "Cooperativa Goiânia Viva",
      address: "R. FP 28 - Recreio dos Funcionários Públicos, Goiânia - GO",
    },
    {
      name: "Fênix Carrossel - Cooperativa de Trabalho dos Catadores de Materiais Recicláveis",
      address:
        "R. 8, Qd. 97 - Lt.01 - St. Santos Dumont, Goiânia - GO, 74463-500",
    },
    {
      name: "Cooperativa de Trabalho dos Catadores de Material Reciclável Família Feliz",
      address:
        "Estr. p/ Aterro Sanitário - Chácaras Recreio São Joaquim, Goiânia - GO, 74495-710",
    },
    {
      name: "Cooperativa SELETA",
      address:
        "Av. Ribeirão Preto, 323-459 - Jardim Novo Mundo, Goiânia - GO, 74715-430",
    },
    {
      name: "COOPER FAMI",
      address: "St. Barra da Tijuca, Goiânia - GO",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <NavBar previousLink="/main" pageName="Coleta Residencial"></NavBar>
      <div className="text-xl text-slate-500 mx-7">
        <h1 className="text-green-800 font-semibold mb-6">Olá Vandilma!</h1>
        <p>
          <span className="text-green-800 font-semibold">
            Você aqui escolhe uma coperativa ou associação para fazer a coleta.
          </span>
          <br />
          Essa associação irar enviar um catador parceiro para coletar seu
          resido
        </p>
        <div className="mt-8">
          <h1 className=" text-2xl text-green-800 font-semibold mb-6">
            Cooperativas
          </h1>

          {cooperativas.map((item, index) => (
            <div key={index} className="">
              <div className="flex">
                <button className="flex my-6 gap-4 text-left" onClick={openModal}>
                  <Image
                    src="/icons/cooperativaIcon.svg"
                    alt={`Cooperativa ${index}`}
                    width={200}
                    height={200}
                    className="w-[9vh] h-[9vh] bg-[#e9e9ea] p-2 rounded-lg shadow-md"
                  />
                  <p className=" text-sm text-gray-400 font-semibold ">
                    <span className="text-gray-500">{item.name}</span> <br />
                    {item.address}
                  </p>
                </button>
              </div>
              <ModalAviso
                isOpen={isModalOpen}
                closeModal={closeModal}
                message="Um catatodor irá recolher os residos no dia 02 de Dezembro de 2024."
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
