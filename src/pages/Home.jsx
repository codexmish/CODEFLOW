import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <Banner />
        <Features/>
        <Pricing/>
      </div>
    </>
  );
};

export default Home;
