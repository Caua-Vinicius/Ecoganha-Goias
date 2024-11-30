import Link from "next/link"

export function Cadastre() {
  return (
    <div className="">
      <h1 className="text-[#003f25] text-[2vh] font-semibold text-[poppins] text-center">
      Transforme o amanhã, <br />
      reciclando hoje.
      </h1>
      <Link href={"/register"} className="mt-[2vh] flex items-center justify-center">
        <button className="bg-[#003f25] w-[23vh] font-semibold text-white rounded-lg h-[5vh]">Cadastre-se</button>
      </Link>
    </div>
  );
}
