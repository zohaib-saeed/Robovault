import React, { useState } from "react";
import Container from "../../Commons/Container";
import Typography from "../../Commons/Typography";
import Button from "../../Commons/Button";
import NavMenu from "../Popups/NavMenu";

import Link from "next/link";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = () => {
  // State for menu icon
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="py-4 w-full flex flex-col items-center justify-center">
      <Container>
        <div className="flex items-center justify-between text-white w-full">
          {/* Left => Nav Links for larger screens */}
          <div className="hidden md:flex flex-row items-center justify-start gap-8">
            <Link href="/" passHref>
              <Typography text="about us" capitalize hover />
            </Link>
            <Link href="/" passHref>
              <Typography text="analytics" capitalize hover />
            </Link>
            <Link href="/" passHref>
              <Typography text="docs" capitalize hover />
            </Link>
          </div>
          {/* Left => Menu icon fro mobile view */}
          <div className="flex md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={28}
              direction="right"
            />
            <NavMenu open={isOpen} setOpen={setOpen} />
          </div>
          {/* Right => Buttons*/}
          <div className="flex items-center justify-end gap-3 md:gap-6">
            <div className="hidden md:flex items-center justify-center">
              <Button text="launch app" capitalize />
            </div>
            {/* => divider */}
            <div className="hidden md:block h-[25px] w-[1.5px] bg-white"></div>

            <div className="w-[32px] md:w-[26px] h-[32px] md:h-[32px] relative flex items-center justify-center cursor-pointer">
              <Image
                src="/icons/moon.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
