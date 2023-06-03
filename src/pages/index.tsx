import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import LaunchesOverview from "@/components/LaunchesOverview";

export default function Home() {
  return (
    <main className="font-montserrat min-h-screen overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <Carousel />
      <LaunchesOverview />
      <Footer />
      <Help />
    </main>
  );
}
