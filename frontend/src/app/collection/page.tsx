"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import ModalAviso from "../main/components/modalAviso";

export default function Collection() {
  const cooperativas = [
    {
      "name": "Cooper Rama Cooperativa de Reciclagem",
      "address": "Rua da Conceição, 123 - Centro, Caruaru - PE, 55004-000"
    },
    {
      "name": "Cooperativa Pernambuco Viva",
      "address": "Av. Agamenon Magalhães, 456 - Maurício de Nassau, Caruaru - PE, 55012-290"
    },
    {
      "name": "Fênix Carrossel - Cooperativa de Trabalho dos Catadores de Materiais Recicláveis",
      "address": "Rua Silvino Macedo, 789 - Nossa Senhora das Dores, Caruaru - PE, 55004-080"
    },
    {
      "name": "Cooperativa de Trabalho dos Catadores de Material Reciclável Família Feliz",
      "address": "Av. Rio Branco, 101 - Centro, Caruaru - PE, 55004-180"
    },
    {
      "name": "Cooperativa SELETA",
      "address": "Rua Capitão João Velho, 202 - Indianópolis, Caruaru - PE, 55024-000"
    },
    {
      "name": "COOPER FAMI",
      "address": "Rua Frei Caneca, 303 - Salgado, Caruaru - PE, 55016-000"
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
