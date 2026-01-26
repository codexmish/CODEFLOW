import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimo from "../components/Testimo";

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <Banner />
        <Features/>
        <Pricing/>
        <Testimo/>
      </div>
    </>
  );
};

export default Home;
