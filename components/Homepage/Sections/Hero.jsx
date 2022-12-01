import React from "react";
import Image from "next/image";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Container>
        <div className=" py-6 h-auto flex flex-col items-between justify-center gap-20">
          {/* Top => Hero Image + Headings + Description */}
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Image */}
            <div className="w-[200px] md:[227px] md:h-[212px] h-[180px] flex items-center justify-center relative">
              <Image
                src="/images/hero.png"
                slt=""
                fill
                className="object-cover"
              />
            </div>
            {/* Heading */}
            <div className="flex flex-col items-between justify-center gap-1">
              <Heading text="Safe & Competitive" />
              <Heading text="Returns on Your Crypto" />
            </div>
            {/* => Description */}
            <div className="flex flex-col items-between justify-center">
              <p className="text-xl text-white font-normal text-center">
                Using advanced automated{" "}
                <span className="heroTextGradient ">Market Neutral</span>
              </p>
              <Typography text="Strategies powered by RoboVault." />
            </div>
          </div>
          {/* Bottom => Icons */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <div className="w-[49px] h-[49px] flex items-center justify-center relative">
                <Image
                  src="/icons/hero1.svg"
                  alt=""
                  className=" object-contain "
                  fill
                />
              </div>
              <div className="w-[49px] h-[49px] flex items-center justify-center relative">
                <Image
                  src="/icons/hero2.svg"
                  alt=""
                  className=" object-contain "
                  fill
                />
              </div>
            </div>
            <Typography text="Supported Chains" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
