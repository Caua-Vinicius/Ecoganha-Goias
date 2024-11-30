import { Descontos } from "./components/descontos";
import { Ensino } from "./components/Ensino";
import { Parceiros } from "./components/parceiros";
import { PerfilPontos } from "./components/PerfilPontos";

export default function main() {
  return (
    <main>
      <PerfilPontos></PerfilPontos>
      <Parceiros></Parceiros>
      <Descontos></Descontos>
      <Ensino></Ensino>
    </main>
  );
}
