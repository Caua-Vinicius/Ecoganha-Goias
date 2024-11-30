import { Cadastre } from "@/components/cadastre";
import { Cellphone } from "../components/cellphone";
import { Header } from "../components/header";
import { Content } from "@/components/content";
import { Carrossel } from "@/components/carrousel";
import { Invite } from "@/components/invite";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Cellphone></Cellphone>
      <Cadastre></Cadastre>
      <Content></Content>
      <Carrossel></Carrossel>
      <Invite></Invite>
      <Footer></Footer>
    </div>
  );
}
