
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import style from './productbanner.module.css'
import { Pagination,Autoplay,Navigation } from "swiper";

function ProductBanner({shopInfor}) {
  const [space,setSpace] = useState(20)
  const [baner,setBaner] = useState([])
  console.log(17,shopInfor)
  useEffect(function(){
    if(shopInfor.description){
      setBaner(()=>{
        let newData
        shopInfor.description.map(item=>{
          if(item.key=='banner'){
            console.log('hello')
             newData = item.value.split(',')
            }
          })
          return newData
      })
    }
  },[shopInfor])


  useEffect(function(){
    console.log(window.innerWidth)
    if(window.innerWidth <= 768){
      console.log('hello')
      setSpace(5)
    }else{
      setSpace(20)
    }
  },[window.innerWidth])

  return (
    <div className={style.ProductBanner}>
      <>
        <Swiper
        loopAdditionalSlides={2}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={space}
          pagination={{
            clickable: true,
          }}
          speed={500}
          slidesPerGroup={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination,Autoplay,Navigation]}
          className="mySwiper_productBanner"
        >
          {
            baner&&baner.length>=1?
            baner.map((image,index)=>{
              return(
                <SwiperSlide key={index}>
                   <img src={image} />
                </SwiperSlide>
              )
            }):
            <>
              <SwiperSlide >
                <img src='https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1445.jpg?w=996' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://i.pinimg.com/564x/d5/62/e8/d562e8f513ed0f4468a8f884e21e6a53.jpg' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1538.jpg?w=996' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://img.freepik.com/premium-psd/sport-shoes-sale-social-media-instagram-post-square-banner-template-design_70055-1355.jpg' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg?w=996' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://i.pinimg.com/564x/38/b7/0f/38b70f674ea6dd7cfd216f587333d5a7.jpg' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-facebook-web-banner-template_70055-1102.jpg?w=996' />
              </SwiperSlide>
              <SwiperSlide >
                <img src='https://i.pinimg.com/564x/1e/d8/d6/1ed8d6d3f6fb821e1daf9a2c4b460dcc.jpg' />
              </SwiperSlide>
            </>
            
          }
        </Swiper>
      </>
    </div>
  )
}

export default ProductBanner