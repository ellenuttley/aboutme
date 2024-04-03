"use client";

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import PetItDone from "@/components/SwiperSlides/PetItDone";
import BedtimeBard from "@/components/SwiperSlides/BedtimeBard";

const ProjectSwiper = () => {
  return (
      <div className="swiperwrapper">
        <Swiper
          className="myswiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCreative,
            Autoplay,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          // autoplay={{ delay:5000 }}
          navigation
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Use a valid DOM element here
            type: "bullets",
            bulletClass: "bg-amber-400",
            bulletActiveClass: "bg-green-400",
          }}
          scrollbar={{ draggable: true }}
          // breakpointsBase={window}
          updateOnWindowResize={true}
          loop={true}
        >
          <SwiperSlide className="swiperslide">
            <BedtimeBard />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <PetItDone />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide> */}
          ...
        </Swiper>
      </div>
  );
};

export default ProjectSwiper;