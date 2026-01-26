import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handlescroll() {
      // setScrolled(window.scrollY)
      window.scrollY ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar scolled={scrolled} />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
