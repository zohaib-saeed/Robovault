import React from "react";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Partners from "./Sections/Partners";
import Scores from "./Sections/Scores";
import Strategies from "./Sections/Strategies";
import WhyRobovalut from "./Sections/WhyRobovalut";

const Homepage = () => {
  return (
    <div className="font-roboto bg-[url('/images/mainbg.png')] bg-black bg-no-repeat  bg-center bg-scroll w-full ">
      <Navbar />
      <Hero />
      <Scores />
      <WhyRobovalut />
      <Strategies />
      <Partners />
      <Footer />
    </div>
  );
};

export default Homepage;
