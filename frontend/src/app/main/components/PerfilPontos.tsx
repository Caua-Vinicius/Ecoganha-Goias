import Image from "next/image";
import Link from "next/link";

export function PerfilPontos() {
  const items: { icon: string; name: string; url: string }[] = [
    { name: "Coleta", icon: "/icons/coletaIcon.svg", url: "/collection" },
    { name: "Extrato", icon: "/icons/extratoIcon.svg", url: "/extrato" },
    { name: "EcoPontos", icon: "/icons/EcoPontosIcon.svg", url: "/ecopontos" },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-center mt-[4vh]">
        <Image
          src={"/icons/IconPerfil.svg"}
          alt="Perfil"
          height={100}
          width={100}
        ></Image>
      </div>
      <h1 className="text-[#656363] font-[500] text-center">2.000 EcoPontos</h1>
      <Link href="" className="flex justify-center items-center">
        <h1 className="text-[#003E25] font-[600] text-center">
          Vandilma Candido{" "}
        </h1>
        <Image
          src={"/icons/pencil.svg"}
          alt="Perfil"
          height={20}
          width={20}
        ></Image>
      </Link>

      <div className="flex justify-around mt-8">
        {items.map((item, index) => (
          <Link href={item.url} key={index}>
            <Image
              src={item.icon}
              alt={`Parceiro ${item.name}`}
              width={200}
              height={200}
              className="w-[9vh] h-[9vh] bg-[#e9e9ea] p-2 rounded-lg shadow-md"
            />
            <span className="flex justify-center items center text-green-900 font-bold">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
