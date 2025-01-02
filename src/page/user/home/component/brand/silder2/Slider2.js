// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import style from './slider1.module.css'
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";


function Slider2({data}) {
    const nav = useNavigate()
  const hanldeShop = (id) => {
    nav(`/ShopHome?id=${id}`)
  }

  return (
    <div className={style.silder}>
        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            slidesPerGroup={6}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper5"
        >
            {
                data.length > 0 && data.map(function(item){
                    let newLink = item.logo;
                    if(!item.logo.startsWith('https')){
                        newLink = `http://localhost:3003/${item.logo}`
                    }
                    return(
                        <SwiperSlide id="list__item_header2" onClick={() => hanldeShop(item._id)} key = {item._id}>
                           <img src={newLink} alt = ''/>
                            <h2>{item.shopName}</h2>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
)
}

export default Slider2