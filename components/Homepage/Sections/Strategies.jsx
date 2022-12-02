import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Divider } from "@mui/material";
import Link from "next/link";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";
import Image from "next/image";

const Strategies = () => {
  return (
    <div className=" py-5 md:py-8 w-full h-auto flex flex-col items-center justify-center">
      {/* Top Heading => Full width without max-width */}
      <div className="py-12 flex items-center justify-center flex-col w-full bg-lightBlack bg-opacity-50">
        <Heading text="How do Delta Neutral Strategies work?" />
      </div>
      <Container>
        <div className="py-10 md:py-20 w-full h-auto flex flex-col items-center justify-center gap-10 md:gap-20">
          {/* Description container */}
          <div className="flex flex-col items-start justify-center gap-4 md:gap-8 w-full">
            <Typography
              textAlign="text-left"
              fontWeight="font-light"
              text="Our current Core Delta Neutral Strategies utilise AMM’s in addition to lending protocols to construct an LP position. Once this position is constructed, we actively manage this position in order to minimise exposure to Impermanent Loss & provide users with positive returns on their assets."
            />
            <Typography
              textAlign="text-left"
              fontWeight="font-light"
              text="
In concrete terms, our USDC vault live on AVAX utilising our core delta neutral works as follows"
            />
          </div>
          {/* Timeline + Strategy steps */}
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-4 w-full">
            {/* => Timeline */}
            <div className="w-full lg:w-[38%] py-2 lg:py-4">
              <div className="w-full hidden lg:flex items-center justify-center">
                {/* => Desktop */}
                <Timeline position="left">
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        1
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="USDC allocated to strategy"
                        textSize="text-xl xl:2xl"
                        textAlign="text-right"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        2
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="Portion of USDC deposited to AAVE"
                        textSize="text-xl xl:2xl"
                        textAlign="text-right"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        3
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="USDC in AAVE used as collateral to borrow AVAX"
                        textSize="text-xl xl:2xl"
                        textAlign="text-right"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        4
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="Remaining USDC paired with AVAX to create an LP position on Trader Joe"
                        textSize="text-xl xl:2xl"
                        textAlign="text-right"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        5
                      </div>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="LP Position deposited in Vector for higher rewards"
                        textSize="text-xl xl:2xl"
                        textAlign="text-right"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>

              {/* => Mobile */}
              <div className=" strategy w-full flex lg:hidden items-center justify-center ">
                <Timeline position="right">
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        1
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="USDC allocated to strategy"
                        textSize="text-xl xl:2xl"
                        textAlign="text-left"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        2
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="Portion of USDC deposited to AAVE"
                        textSize="text-xl xl:2xl"
                        textAlign="text-left"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        3
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="USDC in AAVE used as collateral to borrow AVAX"
                        textSize="text-xl xl:2xl"
                        textAlign="text-left"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        4
                      </div>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="Remaining USDC paired with AVAX to create an LP position on Trader Joe"
                        textSize="text-xl xl:2xl"
                        textAlign="text-left"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                  {/* => Timeline Item */}
                  <TimelineItem>
                    <TimelineSeparator>
                      <div className="bg-darkGreen text-white text-lg font-semibold rounded-[50%] p-2 w-[40px] h-[40px] flex items-center justify-center flex-col">
                        5
                      </div>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        text="LP Position deposited in Vector for higher rewards"
                        textSize="text-xl xl:2xl"
                        textAlign="text-left"
                        fontWeight="font-bold"
                      />
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
            {/* => Divider */}
            <div className="w-[3px] bg-boulder hidden lg:flex lg:h-[650px] xl:h-[620px]"></div>
            {/* => Strategy steps */}
            <div className="w-full lg:w-[60%] h-full flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] -mt-8 md:-mt-0 flex items-center justify-center relative">
                <Image
                  src="/images/strategy.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* => Bottom Description */}
          <div className="flex flex-col items-start justify-center gap-4 md:gap-8 w-full">
            <Typography
              textAlign="text-left"
              fontWeight="font-light"
              text="Once this position is created, our keepers actively manage the strategy in order to minimise the exposure of market movements & ensure there is no risk of liquidation from the borrowing component of the strategy."
            />
            <div className="flex items-start justify-start gap-2">
              <Typography
                textAlign="text-left"
                fontWeight="font-light"
                textSize="text-lg"
                color="text-boulder"
                text="Learn more about the strategy here: "
              />
              <Link href="/">
                <Typography
                  textAlign="text-left"
                  fontWeight="font-light"
                  textSize="text-lg"
                  color="text-boulder"
                  text="Link "
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Strategies;
