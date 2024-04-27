import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide className=" relative">
          <img className=""
            src="https://images.pexels.com/photos/18330747/pexels-photo-18330747/free-photo-of-party-on-a-boat-moored-to-the-riverbank.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className=" max-w-7xl w-[90%] mx-auto absolute inset-0 flex justify-center items-center ">
           <div>
           <h2 className=" text-5xl text-white font-Roboto font-bold">
              Going Inside <br />
              The Louvre Museum
            </h2>
            <p className=" text-xl text-[#f9f9f9] mt-4">
              Discover hidden wonders on trips curated by Citytours Tours
              Experts
            </p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/3007325/pexels-photo-3007325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
           <div className=" max-w-7xl w-[90%] mx-auto absolute inset-0 flex justify-start items-center ">
           <div className=" text-left">
           <h2 className=" text-5xl text-white font-Roboto font-bold">
              Going Inside <br />
              The Louvre Museum
            </h2>
            <p className=" text-xl text-[#f9f9f9] mt-4">
              Discover hidden wonders on trips curated by Citytours Tours
              Experts
            </p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/2425694/pexels-photo-2425694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
           <div className=" max-w-7xl w-[90%] mx-auto absolute inset-0 flex justify-end items-center ">
           <div className=" text-right">
           <h2 className=" text-5xl text-white font-Roboto font-bold">
              Going Inside <br />
              The Louvre Museum
            </h2>
            <p className=" text-xl text-[#f9f9f9] mt-4">
              Discover hidden wonders on trips curated by Citytours Tours
              Experts
            </p>
           </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
