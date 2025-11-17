import React from "react";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const banner = [
    { img: bannerImg1 },
    { img: bannerImg2 },
    { img: bannerImg3 },
  ];
  return (
    <div className="mt-6">
      <Carousel autoPlay={true} infiniteLoop={true}>
        {banner.map((b) => (
          <div>
            <img src={b.img} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
