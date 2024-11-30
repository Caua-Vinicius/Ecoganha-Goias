"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect('/main')
  };
  return (
    <main className="bg-[#FBCA27] h-screen">
      <div className="flex items-center justify-center py-[80px] ">
        <Image
          src="/images/logoSVG.svg"
          alt="logoEcoganha"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="flex items-center justify-center h-max">
        <form onSubmit={handleSubmit} className=" p-6 rounded  w-full max-w-sm">
          {/* Campo de E-mail */}
          <div className="mb-4 flex bg-[#EAEAEA] p-1 rounded-full px-3">
            <Image
              src="/icons/emailIcon.svg"
              alt="emailIcon"
              width={35}
              height={50}
            ></Image>
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
            ></Image>
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
          <div className="flex justify-center items-center mt-20">
            {/* Botão de Login */}
            <button
              type="submit"
              className="w-[70%] bg-[#003E25] text-white text-2xl font-bold py-2 rounded-full "
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
      <Link
        href={"../register"}
        className="flex justify-center items-center text-[#003E25] text-[1.4rem] font-bold"
      >
        Cadastre-se
      </Link>
    </main>
  );
}
