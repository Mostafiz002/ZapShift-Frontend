import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/brands/amazon.png";
import amazon2 from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brands = [
    amazon,
    amazon2,
    casio,
    moonstar,
    randstad,
    star,
    start_people,
  ];

  return (
    <div className="my-10">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlide={true}
        grabCursor={true}
        loop={true}
        autoplay={{delay:2500}}
        modules={[Autoplay]}
      >
        {brands.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
