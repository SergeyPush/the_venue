import React from "react";
import Slider from "react-slick";
import image_one from "../../resources/images/slide_one.jpg";
import image_two from "../../resources/images/slide_two.jpg";
import image_three from "../../resources/images/slide_three.jpg";

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    lazyLoad: true,
    fade: true,
    pauseOnHover: false
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${image_one})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${image_two})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${image_three})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
