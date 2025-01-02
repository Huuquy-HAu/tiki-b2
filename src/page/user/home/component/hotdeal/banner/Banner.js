import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import style from './banner.module.css'
import { Pagination, Navigation } from "swiper";
import Item from "./item/Item";
import { useEffect } from "react";
import { getAPI } from "../../../../../../config/api";
function Banner() {
    const [listProduct,setListProduct] = useState([])
    useEffect(function(){
        getAPI('/product/get-all-products')
            .then(data=>{
                console.log(20,data.data.listProduct)
                setListProduct(()=>{
                   const listProduct =  data.data.listProduct.sort(function(before,affter){
                      return affter.sold - before.sold
                   })
                   return listProduct.slice(0,20)
                })
            })
            .catch(error=>console.log(error))
    },[])
   
  return (
    <div className={style.silder}>
        <Swiper
        hideOnClick={true}
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={false}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper4"
      >
        {
            listProduct.map(function(item){
                return(
                    <SwiperSlide id="list__item_header" key={item._id}> 
                        <Item 
                              img={item?.thump[0]?.startsWith('http')?item.thump[0]:`http://localhost:3003/${item.thump[0]}`} 
                              price={item.price} 
                              discount={Math.round(10+Math.random()*10)}
                              sold={item.sold}
                              total={item.totalStorage}
                              id={item._id}
                        />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  )
}

export default Banner