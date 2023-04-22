import Banner from "@/components/Banner";
import CountrySelector from "@/components/CountrySelector";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-montserrat ">
      <Banner />
      <Header />
      <Navbar />
      <Help />
    </main>
  );
}
