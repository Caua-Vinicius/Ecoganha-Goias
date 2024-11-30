import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#003F25] text-white py-[4vh] font-[600]">
      <h1 className="text-center text-[1.2rem]">EcoGanha</h1>
      <p className="text-center flex justify-center">
        Feito com amor para<br /> Um lugar mais verde
      </p>
      <div className="flex items-center justify-center gap-[2vh] mt-[1vh]">
        <Image
          src={"/icons/instagram.svg"}
          alt="Instagram"
          width={1000}
          height={1000}
          className="w-[4vh]"
        ></Image>
        <Image
          src={"/icons/facebook.svg"}
          alt="Facebook"
          width={1000}
          height={1000}
          className="w-[4vh]"
        ></Image>
      </div>
    </footer>
  );
}
