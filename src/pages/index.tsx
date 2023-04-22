import Banner from "@/components/Banner";
import CountrySelector from "@/components/CountrySelector";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-montserrat ">
      <Banner />
      <Header />
      <Navbar />
    </main>
  );
}
