import React from "react";
import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import Reviews from "../components/home/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
