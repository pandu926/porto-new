import Header from "@/components/Header";
import Image from "next/image";

import Content from "@/components/Content";
import Services from "@/components/Services";
import Portofolio from "@/components/Portofolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Services />
      <Portofolio />
      <Contact />

      <Footer />
    </div>
  );
}
