import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './banner2.style.css'
import style from './banner2.module.css'
import { Pagination } from "swiper";

function Banner2() {
  return (
    <div className={style.slide}>
        <Swiper
            // loop={true}
            // autoplay={{
            // delay: 10000,
            // disableOnInteraction: false,
            // }}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper7"
        >
            <SwiperSlide>
                <img src="https://i.ytimg.com/vi/MEA0tX9SgIY/maxresdefault.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://salt.tikicdn.com/cache/w572/ts/upload/1a/8e/00/291b67286660dbc51bb8381633868927.png.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://salt.tikicdn.com/cache/w572/ts/upload/ee/f1/10/bc58a1bcbf5ff92206bff7a3c56ab89b.png.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://vtc.edu.vn/wp-content/uploads/2021/09/Tiki_da_san_sang_cho_the_he_khach_hang_moi-THI1.jpg"></img>
            </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner2