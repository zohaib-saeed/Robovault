import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Scores from "./Sections/Scores";
import Strategies from "./Sections/Strategies";
import WhyRobovalut from "./Sections/WhyRobovalut";

const Homepage = () => {
  return (
    <div className="bg-[url('/images/mainbg.png')] bg-black bg-no-repeat  bg-center bg-scroll w-full ">
      <Navbar />
      <Hero />
      <Scores />
      <WhyRobovalut />
      <Strategies />
    </div>
  );
};

export default Homepage;
