import React from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Scores from "./Sections/Scores";
import WhyRobovalut from "./Sections/WhyRobovalut";

const Homepage = () => {
  return (
    <div className="bg-[url('/images/mainbg.png')] bg-black bg-no-repeat  bg-center bg-scroll w-full ">
      <Navbar />
      <Hero />
      <Scores />
      <WhyRobovalut />
    </div>
  );
};

export default Homepage;
