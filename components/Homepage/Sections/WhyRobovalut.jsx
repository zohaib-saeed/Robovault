import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";

const WhyRobovalut = () => {
  return (
    <div className="py-10 md:py-16 w-full h-auto flex flex-col items-center justify-center">
      <Container>
        <div className="flex items-between justify-center flex-col gap-20 w-full">
          <Heading text="Why RoboVault?" />
          <div className="flex items-center justify-center flex-col w-full">
            {/* Timeline => Desktop */}
            <div className="hidden md:flex">
              <Timeline position="alternate">
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      1
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="Zero deposit and withdrawal fees"
                      textSize="text-3xl"
                      textAlign="text-left"
                    />
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      2
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col items-center justify-end gap-1">
                      <Typography
                        text="Impermanent Loss mitigation mechanism"
                        textSize="text-3xl"
                        textAlign="text-right"
                      />
                      <Typography
                        text="RoboVault knows Impermanent Losses (IL) can keep you up at night, so we worked tirelessly for the past x time to build automated IL Protected
                    earning strategies!"
                        textAlign="text-right"
                        fontWeight="font-[300]"
                      />
                    </div>
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      3
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col items-start justify-start gap-1">
                      <Typography
                        text="Seamlessly zap in with a few clicks"
                        textSize="text-3xl"
                        textAlign="text-left"
                      />
                      <Typography
                        text="RoboVault is a seamless yield optimiser, with an inhouse impermanent loss protection mechanism achieved through leveraging our delta neutral strategies"
                        textAlign="text-left"
                        fontWeight="font-[300]"
                      />
                    </div>
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      4
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="Price protection option by Degis"
                      textSize="text-3xl"
                      textAlign="text-right"
                    />
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      5
                    </div>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="We’ll handle everything for you!"
                      textSize="text-3xl"
                      textAlign="text-left"
                    />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>

            {/* Timeline => Mobile */}
            <div className="flex md:hidden">
              <Timeline position="right">
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      1
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="Zero deposit and withdrawal fees"
                      textSize="text-2xl"
                      textAlign="text-left"
                    />
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      2
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col items-start justify-start gap-1">
                      <Typography
                        text="Impermanent Loss mitigation mechanism"
                        textSize="text-2xl"
                        textAlign="text-left"
                      />
                      <Typography
                        text="RoboVault knows Impermanent Losses (IL) can keep you up at night, so we worked tirelessly for the past x time to build automated IL Protected
                    earning strategies!"
                        textAlign="text-left"
                        fontWeight="font-[300]"
                        textSize="text-base"
                      />
                    </div>
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      3
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="flex flex-col items-start justify-start gap-1">
                      <Typography
                        text="Seamlessly zap in with a few clicks"
                        textSize="text-2xl"
                        textAlign="text-left"
                      />
                      <Typography
                        text="RoboVault is a seamless yield optimiser, with an inhouse impermanent loss protection mechanism achieved through leveraging our delta neutral strategies"
                        textAlign="text-left"
                        fontWeight="font-[300]"
                        textSize="text-base"
                      />
                    </div>
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      4
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="Price protection option by Degis"
                      textSize="text-2xl"
                      textAlign="text-left"
                    />
                  </TimelineContent>
                </TimelineItem>
                {/* => Timeline Item */}
                <TimelineItem>
                  <TimelineSeparator>
                    <div className="bg-darkGreen text-white text-lg rounded-[50%] p-2 w-[30px] h-[30px] flex items-center justify-center flex-col">
                      5
                    </div>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      text="We’ll handle everything for you!"
                      textSize="text-2xl"
                      textAlign="text-left"
                    />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyRobovalut;
