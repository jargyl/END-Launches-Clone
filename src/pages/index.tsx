import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import LaunchesOverview from "@/components/LaunchesOverview";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="font-montserrat min-h-screen overflow-x-hidden">
      <Banner />
      <Header />
      {!isMobile && <Navbar />}
      <Carousel />
      <LaunchesOverview />
      <Footer />
      <Help />
    </main>
  );
}
