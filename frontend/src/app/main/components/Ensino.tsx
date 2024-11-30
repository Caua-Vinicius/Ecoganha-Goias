import Image from "next/image";
import Link from "next/link";

export function Ensino() {
  const cursos = [
    { imagem: "/images/ImageCurso1.svg", url: "/comoSeparar" },
    { imagem: "/images/ImageCurso2.svg", url: "" },
  ];
  return (
    <div className="mt-[4vh]">
      <h1 className="pl-[2vh] text-[2vh] text-[poppins] text-[#003F25] font-[600] mb-[2vh]">
        Como Separar
      </h1>
      <div className="flex justify-around">
        {cursos.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>
              <Image
                src={item.imagem}
                alt={`Curso ${index}`}
                width={100}
                height={100}
                className="w-[17vh]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
