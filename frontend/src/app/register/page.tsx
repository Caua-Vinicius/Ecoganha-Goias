"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect('/main')
  };

  return (
    <main className="bg-[#FBCA27] h-screen">
      <div className="flex items-center justify-center py-[50px]">
        <Image
          src="/images/logoSVG.svg"
          alt="logoEcoganha"
          width={300}
          height={300}
        />
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="p-6 rounded w-full max-w-sm">
          {/* Campo de Nome */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 text-green-900 font-bold block w-full h-max px-4 py-2 rounded-md bg-[#EAEAEA] focus:outline-none focus:border-0"
            />
          </div>

          {/* Campo de Endereço */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <input
              type="text"
              id="address"
              value={address}
              placeholder="Endereço"
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 text-green-900 font-bold block w-full h-max px-4 py-2 rounded-md bg-[#EAEAEA] focus:outline-none focus:border-0"
            />
          </div>

          {/* Campo de E-mail */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <Image
              src="/icons/emailIcon.svg"
              alt="emailIcon"
              width={35}
              height={50}
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 text-green-900 font-bold block w-full h-max px-4 py-2 rounded-md bg-[#EAEAEA] focus:outline-none focus:border-0"
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <Image
              src="/icons/locker.svg"
              alt="lockerIcon"
              width={30}
              height={50}
              className="mr-1"
            />
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 text-green-900 font-bold block w-full h-max px-4 py-2 rounded-md bg-[#EAEAEA] focus:outline-none focus:border-0"
            />
          </div>

          {/* Campo de Confirmar Senha */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <Image
              src="/icons/locker.svg"
              alt="lockerIcon"
              width={30}
              height={50}
              className="mr-1"
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Repita a sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 text-green-900 font-bold block w-full h-max px-4 py-2 rounded-md bg-[#EAEAEA] focus:outline-none focus:border-0"
            />
          </div>

          <div className="flex justify-center items-center mt-20">
            {/* Botão de Submissão */}
            <button
              type="submit"
              className="w-[70%] bg-[#003E25] text-white text-2xl font-bold py-2 rounded-full"
            >
              Cadastrar-se
            </button>
          </div>

          <Link
            href="../login"
            className="flex mt-4 justify-center items-center text-[#003E25] text-[1.4rem] font-bold"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}
