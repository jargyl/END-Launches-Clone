import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Navbar from "@/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carouselData from "../../public/data/carousel_data.json";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = Array.from(Array(carouselData.length).keys());

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setActiveSlide(nextSlide);
    },
  };

  return (
    <main className="font-montserrat min-h-screen overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <div className="relative">
        <Slider {...settings}>
          {carouselData.map((item, i) => (
            <div key={i} className="relative">
              <img
                src={`/banners/banner-${i + 1}.jpeg`}
                className="w-full h-[80vh] object-cover"
              />
              <div className="absolute left-0 bottom-0 w-full pt-24 bg-gradient-to-t from-black to-transparent h-3/5">
                <div className="absolute bottom-16 left-20">
                  <h2 className="text-white text-4xl font-bold mb-4 uppercase">
                    {item.title}
                  </h2>
                  <p className="text-white text-lg mb-8">{item.description}</p>
                </div>
              </div>

              <button className="absolute right-20 bottom-20 text-white px-12 py-2 rounded-sm hover:bg-white hover:text-black border-2 transition-colors duration-300">
                {item.btn_text}
              </button>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-20 left-20 flex justify-start mt-4">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-16 mx-1 ${
                i <= activeSlide ? "bg-white" : "bg-white bg-opacity-30"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <Help />
    </main>
  );
}
