import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
import style from './slider4.module.css'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";


function Slider3() {
  return (
    <div className={style.slider}>
        <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper33"
      >
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/d8/de/e0/2a7ae073e388acb4814800df74866ad2.png.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/57/da/31/863d35f89d8f03a7ecc541c18e0c3e84.png.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/1f/7a/55/898796facbba390f90e3076a702acbb1.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/dc/4b/95/15c8523716c8987ad3740341e778f9a4.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dailygiamgia.com/wp-content/uploads/2019/07/M%E1%BB%ABng-sinh-nh%E1%BA%ADt-Tiki-9-tu%E1%BB%95i-660x330.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/ts/brickv2og/62/f0/86/2c7ed18017c882a98946117913e1e5d1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/66/1b/5b/541c14445d1b62e701d7157436450e4a.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/ff/e3/dc/67cd92fc81b5088be923361326ddb3a2.jpg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://salt.tikicdn.com/cache/w750/ts/banner/ca/6c/8e/2f3bd5167845b6916269b4b57b2ad0b4.png.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider3