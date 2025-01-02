// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import style from './slider1.module.css'
import { Pagination, Navigation, Autoplay } from "swiper";


function Slider1() {
    const data=[
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/1f/7a/55/ea6ce9305b8c36f7352cd8c2a115b9e4.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/d8/de/e0/1f8de54d02d2d9434cb9159a40eb6fc8.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/5d/01/8c/c3c671fc05ae13fa25a0f22c3cbc077c.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/6d/7c/26/68bb1881bb07df5ebfa7fc55109b058c.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/f7/fb/89/1472c13ce0308e2b54f6ec9514f5417a.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/9e/2b/31/4c749833ee6d5181af247ec9d09c6512.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/dc/4b/95/254ca83faf6e0b20d22c297de7d33d2b.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/d9/32/17/aaf3d08bac1168ac680e91164d0d3eff.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/3d/e4/c7/dd8a3efb4bd8a6beeca9b675362313cc.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/90/c1/5f/d188e5cd68332d772da20a4d385233fb.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/6a/0c/75/ea697e1212d780455291a60b0f888adf.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/cb/96/f2/fe058c44d80c18df60a59c0bbb7b6fbe.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/b9/ff/d5/46d504f354d8bcf07d8b3c807b693204.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/12/63/8a/98c712913b185caab93f5d301b46f6e6.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/12/63/8a/98c712913b185caab93f5d301b46f6e6.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w750/ts/banner/70/84/38/86ad5dadc291c9031129c90c0e5cd815.jpg.webp',
        },
      ]
  return (
    <div className={style.silder}>
        <Swiper
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            // loop={false} 
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper2"
          
        >
            {
                data.map(function(item){
                    return(
                        <SwiperSlide id="list__item_header1">
                        <img src={item.img}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
)
}

export default Slider1