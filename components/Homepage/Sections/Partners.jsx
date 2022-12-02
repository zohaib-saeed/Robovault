import React from "react";
import Image from "next/image";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";

const Partners = () => {
  const placeHolders = [
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
    { imgUrl: "/images/Placeholder.png", name: "Placeholder" },
  ];
  return (
    <div className="py-5 md:py-12 w-full h-auto flex flex-col items-center justify-center bg-black">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          {/* => Top heading */}
          <Heading
            text="Our Partners"
            textSize="text-5xl "
            fontWeight="font-semibold"
          />
          {/* Partner logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center max-w-7xl">
            {placeHolders.map((item, index) => (
              <div
                key={index + 1}
                className="w-[300px] h-[200px] md:w-[250px] md:h-[150px] hover:scale-105 transition-all flex items-center justify-center relative "
              >
                <Image src={item.imgUrl} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
