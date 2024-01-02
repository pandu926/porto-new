import Header from "@/components/Header";
import Image from "next/image";
import ParticleBackground from "@/components/ParticlesBg/ParticleBackground";

import Content from "@/components/Content";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Services />
      <Portofolio />
    </div>
  );
}
