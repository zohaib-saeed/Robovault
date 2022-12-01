import React from "react";
import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";

const Scores = () => {
  return (
    <div className="py-16 w-full h-auto flex flex-col items-center justify-center">
      <Container>
        <div className="flex items-center justify-center md:justify-between flex-col  md:flex-row gap-14 md:gap-8 flex-wrap w-full lg:w-[70%]">
          {/* => Users Count */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Heading text="10M" />
            <Typography text="Trusted by Users" />
          </div>
          {/* => Earned Funds */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Heading text="$$$$" />
            <Typography text="Funds earned for Users" />
          </div>
          {/* => TVL */}
          <div className="flex flex-col items-center justify-center gap-2 ">
            <Heading text="$$$$" />
            <Typography text="TVL" fontWeight="font-light" size="text-3xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Scores;
