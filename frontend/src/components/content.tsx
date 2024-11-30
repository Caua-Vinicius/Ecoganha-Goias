import Image from "next/image";

export function Content() {
  return (
    <div className="flex text-[poppins] mt-[5vh] pl-[2vh]">
      <div className="">
        <h1 className="font-[400]">Recicle e Economize </h1>
        <p className="font-[300] text-[#003f25] text-[1.7vh]">
          <br />
          Descontos e Prêmios Para tornar Goias mais sustentável e reduzir o
          impacto ambiental do Estado, estamos introduzindo o programa &quot;Recicle
          e Economize&quot;. Este programa oferece à população a oportunidade de
          ganhar descontos e outros prêmios ao reciclar materiais como
          plásticos, metais, vidros e papel.
        </p>
      </div>
      <Image
        src={"/images/imageRounded.svg"}
        alt="image"
        width={1000}
        height={1000}
        className="w-[22vh]"
      ></Image>
    </div>
  );
}
