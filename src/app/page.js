import Header from "@/components/Header";
import Image from "next/image";
import Design from "@/components/Design";

import Content from "@/components/Content";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticlesBg/ParticleBackground";
export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <ParticleBackground />
      <Content />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}
