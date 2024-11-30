import Link from "next/link";

export default function SaldoEcoPontos() {
  return (
    <div className="text-green-900 text-2xl mx-7">
      <h1 className="mb-5">Olá Vandilma!</h1>
      <h2>Saldo de EcoPontos</h2>
      <p className="flex flex-row justify-between">
        <span className="text-gray-400"> 2.000 Pontos </span>
        <Link
          href="/trocaPontos"
          className="decoration-yellow-400 underline decoration-4"
        >
          Trocar
        </Link>
      </p>
    </div>
  );
}
