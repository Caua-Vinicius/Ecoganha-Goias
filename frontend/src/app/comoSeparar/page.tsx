import NavBar from "@/components/navbar";
import Image from "next/image";

export default function ComoSeparar() {
  return (
    <div>
      <NavBar previousLink="/main" pageName="Como Separar?"></NavBar>
      <div className="mx-7 text-green-900 text-2xl ">
        <h1>Descarte correto de recicláveis</h1>
        <p className="text-gray-400 mt-9">
          Separe o que é orgânico do que é reciclável. A separação é simples e
          não há necessidade de separar os resíduos por tipo. Plásticos, papéis,
          vidros e metais podem ser descartados juntos. É só não misturar com
          resíduos orgânicos e pronto.
        </p>
        <div className="flex items-center justify-center mt-11">
          <Image
            src="/images/ImageCurso1.svg"
            alt={`Curso como separar`}
            width={100}
            height={100}
            className="w-[25vh]"
          />
        </div>
      </div>
    </div>
  );
}
