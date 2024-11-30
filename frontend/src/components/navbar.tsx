import Image from "next/image";
import Link from "next/link";
type NavbarProps = {
  previousLink: string;
  pageName: string;
};

export default function NavBar(props: NavbarProps) {
  return (
    <div className="m-5 mb-20">
      <div className="flex justify-between items-center ">
        <Link href={props.previousLink}>
          <Image
            src={"/icons/leftArrowIcon.svg"}
            alt="Perfil"
            height={30}
            width={30}
          ></Image>
        </Link>

        <h1 className="text-[#003E25] font-[600] text-xl">{props.pageName}</h1>

        <Image
          src={"/icons/IconPerfil.svg"}
          alt="Perfil"
          height={45}
          width={45}
        ></Image>
      </div>
    </div>
  );
}
