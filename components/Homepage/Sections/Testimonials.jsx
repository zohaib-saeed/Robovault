import React from "react";
import Image from "next/image";

import Typography from "../../Commons/Typography";
import Heading from "../../Commons/Heading";
import Container from "../../Commons/Container";
// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className="py-5 md:py-12 w-full h-auto bg-[rgba(31,31,31,0.75)]">
      {/*  Swiper Slider    */}
      <Swiper
        // slidesPerView={4}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "scale-110" : ""
              } max-w-[400px] w-full h-[320px] ${
                isActive
                  ? "bg-[rgba(170,170,170,0.4)]"
                  : "bg-[rgba(87,87,87,0.4)]"
              }  rounded flex items-center justify-center flex-col gap-8`}
            >
              <Typography
                text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
                textSize="text-2xl"
                fontWeight="font-normal"
              />

              <div className="flex items-center justify-between gap-8">
                <div className="w-[51px] h-[51px] flex items-center justify-center rounded-full overflow-hidden relative">
                  <Image
                    src="/images/user1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <Typography
                    text="Felix Pitts"
                    textSize="text-lg"
                    fontWeight="font-normal"
                  />
                  <Typography
                    text="Foreign Exchange Trader"
                    textSize="text-base"
                    fontWeight="font-bold"
                    color="text-boulder"
                  />
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
