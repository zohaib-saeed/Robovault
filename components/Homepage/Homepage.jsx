import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";

const Homepage = () => {
  return (
    <div className="bg-[url('/images/mainbg.png')] bg-black bg-no-repeat  bg-center bg-fixed w-full h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
