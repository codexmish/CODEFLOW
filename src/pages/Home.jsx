import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <div className="px-4 md:px-0">
        <Banner />
        <Features/>
      </div>
    </>
  );
};

export default Home;
