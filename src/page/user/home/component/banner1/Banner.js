import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import clsx from 'clsx'; 

import { Autoplay, Pagination, Navigation } from "swiper";
import './banner_style.css'
import styles from "./banner.module.css";
function Banner() {
  return (
    <div className={clsx(styles.slide)}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper6"
      >
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/a5/5f/e4/7273649a375faad4c277c42ed880b1f3.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/73/08/3d/1488428567d7a11b4a99fc88871597ea.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/37/f8/19/d45d821c319edb96a5ba12db67c69c24.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/96/0f/93/b1ad7d228c03d55dacd2a33943cd8599.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/69/10/d2/60d9d07c05d725f20f3fe08947ad68c4.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/34/cf/d1/07dbee758f7d85fc446361077eb7e386.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/38/5a/a9/6c9337a453a9a0145daad5e33d90131d.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/06/03/99/6838f8ffdac19c5a889454fc3173e33a.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/e6/8e/8a/a88981cf26e59e135545573cb6ac5a30.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/06/a3/54/00a33486e8d5696bc1ebcb3c979571b0.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/69/10/d2/60d9d07c05d725f20f3fe08947ad68c4.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/b4/12/68/59c77caa1d04bc7f65da85f95080b565.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/42/41/79/1c29800eddac55d3c558d4f412d70b61.png.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://salt.tikicdn.com/cache/w1080/ts/banner/47/18/94/84c597f5c6865a66d35b753ce0040e30.png.webp"></img>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Banner