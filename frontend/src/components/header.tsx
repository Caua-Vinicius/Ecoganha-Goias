import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="w-full h-[10vh]">
      <div className="bg-[#FBCA27] w-full h-[10vh] flex justify-around items-center shadow-lg fixed z-[14]">
        <button>
          <Image
            alt="Menu"
            height={100}
            width={100}
            src={"/icons/menu-svgrepo-com (2).svg"}
            className="w-[3vh]"
          ></Image>
        </button>
        <Image
          alt="Menu"
          height={1000}
          width={1000}
          src={"/images/logoSVG.svg"}
          className="w-[8vh]"
        ></Image>
        <Link href={"./login"} className="hover">
          <button className="text-[#003f25] font-bold bg-[#EAEAEA] p-1 rounded-full px-3 shadow-md">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}
