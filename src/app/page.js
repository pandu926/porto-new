import Header from "@/components/Header";
import Image from "next/image";
import Design from "@/components/Design";
import Content from "@/components/Content";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <div className="w-full z-0 absolute top-0 left-0">
        <Design />
      </div>
      <Content />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}
