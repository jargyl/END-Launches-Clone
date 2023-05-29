import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const images = Array.from(Array(4).keys()); // Change 5 to the number of images you have

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="font-montserrat min-h-screen overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <Slider {...settings}>
        {images.map((i) => (
          <div key={i}>
            <img
              src={`/banners/banner-${i + 1}.jpeg`}
              className="w-full h-[80vh] object-cover"
            />
          </div>
        ))}
      </Slider>
      <Help />
    </main>
  );
}
