import React, { Component, createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carouselData from "../../public/data/carousel_data.json";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface CarouselState {
  activeSlide: number;
}

class Carousel extends Component<{}, CarouselState> {
  private sliderRef = createRef<Slider>();

  constructor(props: {}) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  handleSlideChange = (nextSlide: number) => {
    this.setState({
      activeSlide: nextSlide,
    });
  };

  goToPreviousSlide = () => {
    const { activeSlide } = this.state;
    if (activeSlide > 0) {
      this.setState({ activeSlide: activeSlide - 1 }, () => {
        this.sliderRef.current?.slickGoTo(activeSlide - 1);
      });
    }
  };

  goToNextSlide = () => {
    const { activeSlide } = this.state;
    if (activeSlide < carouselData.length - 1) {
      this.setState({ activeSlide: activeSlide + 1 }, () => {
        this.sliderRef.current?.slickGoTo(activeSlide + 1);
      });
    }
  };

  render() {
    const { activeSlide } = this.state;
    const images = Array.from(Array(carouselData.length).keys());

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      beforeChange: (currentSlide: number, nextSlide: number) => {
        this.handleSlideChange(nextSlide);
      },
    };

    return (
      <div className="relative">
        <Slider {...settings} ref={this.sliderRef}>
          {carouselData.map((item, i) => (
            <div key={i} className="relative">
              <img
                src={`/banners/banner-${i + 1}.jpeg`}
                className="w-full h-[80vh] object-cover"
                alt={`Banner ${i + 1}`}
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
        <div className="absolute top-1/2 flex justify-between w-full">
          <button
            className="text-white flex items-center justify-center rounded-full bg-black opacity-30 hover:opacity-70 ml-10 transition-opacity duration-300"
            onClick={this.goToPreviousSlide}
            disabled={activeSlide === 0}
          >
            <MdNavigateBefore className="h-8 w-8 m-2" />
          </button>
          <button
            className="text-white flex items-center justify-center rounded-full bg-black opacity-30 hover:opacity-70 mr-10 transition-opacity duration-300"
            onClick={this.goToNextSlide}
            disabled={activeSlide === carouselData.length - 1}
          >
            <MdNavigateNext className="h-8 w-8 m-2" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
