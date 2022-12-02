import React from "react";
import Link from "next/link";
import Image from "next/image";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";

const Footer = () => {
  return (
    <div className="pt-16 w-full h-auto flex flex-col items-center justify-center ">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          {/* => More about us heading + Discord Link */}
          <div className="flex flex-col items-center justify-center gap-2">
            <Heading
              text="Want to learn more about us?"
              textSize="text-5xl "
              fontWeight="font-semibold"
            />
            <p className="text-3xl text-center font-normal text-boulder">
              Check what our users have to say about us or join our{" "}
              <Link href="/">
                <span className="text-lightGreen">Discord Community</span>
              </Link>{" "}
              and ask yourself!
            </p>
          </div>
        </div>
      </Container>
      {/* =>Bottom Stripe */}
      <div className="mt-8 md:mt-16 py-3 md:py-5 flex flex-col items-center justify-center gap-2 bg-black bg-opacity-50  w-full">
        {/* Social Icons */}
        <div className="flex justify-between items-center gap-2">
          <Link href="/">
            <Image src="/icons/discord.svg" alt="" width={20} height={16} />
          </Link>
          <Link href="/">
            <Image src="/icons/twitter.svg" alt="" width={20} height={16} />
          </Link>
        </div>
        {/* Copyright text */}
        <p className="font-roboto_flex text-white font-bold text-lg">
          A ROBOCORP PRODUCTION © 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
