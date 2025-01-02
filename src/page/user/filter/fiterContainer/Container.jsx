import  React, { useState,useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton.js'
// import Modall from '../Modall';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination as Pagination2 , Navigation } from "swiper";
import { Rate } from 'antd';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import 'antd/dist/antd.css';
import  style from './container.module.css'
import "../styles.css";
import { useNavigate } from 'react-router-dom';


const LoaingItem = () => {
  return (
    <div className={style.products_item}>
    <div className={style.products_thumbnail}>
      <LoadingSkeleton height = '100%'/>
    </div>
    <div className={style.products_info}>
        <span className={style.ad}>
        <LoadingSkeleton height = '20px'/>
        </span>
        <h4 className={style.products_title}>
        <LoadingSkeleton height = '20px'/>
        </h4>
        <div className={style.products_rating}>
        <LoadingSkeleton height = '15px' width = '80px'/>
        <span className={style.products_sold}>
          <LoadingSkeleton height = '15px' width = '30px'/>
        </span>
        </div>
        <div className={style.products_price_box}>
        </div>
        <div>
        </div>
    </div>
    </div>
  )
}

const Container = ({data1, listProducts , loading, search, sos}) => {
  const [Loading , setLoading] = useState(loading)
  const  [pageSize, setPageSize] = useState(16)
  const [check, setCheck] = useState()
  const [listData, setListData] = useState([])
  const [listProductss, setListProductss] = useState([])
  const [page, setPage] = React.useState(1);
  const nav = useNavigate()

  useEffect(() => {
    setLoading(loading)
  },[loading])
    
    useEffect(() => {
      let newData = listProducts
      setPage(1)
      for(let key in data1){
        if(data1[key].length > 0){
          newData = newData.filter(item => {
            if(key === 'brandName'){
              if(item.brandId) {
                return data1[key].includes(item.brandId[key])           
              }
            }else if(key === 'price'){
              if(data1[key][0] === 200000){
                return data1[key] > item.price
              }else if(data1[key][0] === 750000){
                return data1[key] < item.price
              }else{
                if(data1[key][0].min <= item.price && data1[key][0].max > item.price){
                  return true
                }
              }
            }
            else{ 
              return data1[key].includes(item.shopId[key])
            }
          })
        }     
      }
      setListData(newData)
    },[data1, listProducts])
    

    const highprice = () => {
      setListData((listData) => {
        return [...listData.sort((a, b) => b.price - a.price)]
      })
    }

    const lowprice = () => {
      setListData((listData) => {
        return [...listData.sort((a, b) => a.price - b.price)]
      })
    }


    useEffect(function(){
      const start = (page - 1) * pageSize;
      const end = page * pageSize;
      setListProductss(listData.slice(start, end));
    },[page, listData])


      const handleChange = (page, pageSize) => {
        setPage(pageSize);
      };

      const newgoods = () => {
        setListData((listData) => {
          return [...listData.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))]
        })
      }

      const selling = () => {
        setListData((listData) => {
          return [...listData.sort((a, b) => b.sold - a.sold)]
        })
      }

      const popular = () => {
        setListData((listData) => {
          return [...listData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))]
        })
      }

      const handleID = (id) => {
        nav(`/detail?id=${id}`)
      }

      useEffect(() => {
        window.scrollTo({
          top: 435,
          behavior: 'smooth',
        });
      },[page])

  return (
    <div className={style.container}>
        <h2 className={style.title}>{search}</h2>
    <div className={style.slider}>
  <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1.4}
        allowSlideNext={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination2, Navigation]}
        loop={true}
        loopPreventsSlide={true}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/70/86/fb/b1b62d6f222959307972189d6c7c946e.jpg.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide><img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img}/></SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/29/be/8a/ac09f1dde1dd08f914a50510c396ed04.jpg.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/a4/02/80/486cc9da76ecaf6e78d0089eaacc28c2.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/0c/2b/ca/43d933bc0a53a15f58a66cb836a64bec.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/33/c2/73/95e85a9098f07a25569e98c0f1a4f757.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/06/37/79/6e63d637ff9346f787cc4fa891b77f1b.png.webp' alt='' className={style.img}/>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
    <div className={style.select}>
        <span className={style.select_name} onClick = {() => {selling()
                     setCheck(1)}} id = {check === 1 ? 'filter_checked' : undefined} >Bán Chạy</span>
        <span className={style.select_name} onClick = {() => {newgoods()
        setCheck(2)}} id = {check === 2 ? 'filter_checked' : undefined} >Hàng Mới</span>
        <span className={style.select_name} onClick = {() => {lowprice()
         setCheck(3)}} id = {check === 3 ? 'filter_checked' : undefined}>Giá Thấp</span>
        <span className={style.select_name} onClick = {() => {highprice()
         setCheck(4)}} id = {check === 4 ? 'filter_checked' : undefined}>Giá Cao</span>
    </div>
    {Loading && !sos && (<div className={style.products_box}>
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
        <LoaingItem />
    </div>)}
    {sos &&
      (
        <div className={style.sos}>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt=""></img>
        </div>
      )
    }
    <div layout className={style.products}>
        {!Loading && listProductss.map(val => {
          let linkImg = val.thump
          if (linkImg.length > 0) {
            const newLink = linkImg[0]
            if (newLink.startsWith('https')) {
              linkImg = newLink
            } else {
              linkImg = `http://localhost:3003/${newLink}`
            }
          } else {
            linkImg = 'https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png'
          }
            return  (
                <div className={style.products_item} key={val._id} onClick = {() => handleID(val._id)}>
                <div className={style.products_thumbnail}>
                    <img src={linkImg} alt='Product-image' className={style.image_img} />
                </div>
                <div className={style.products_info}>
                    <span className={style.ad}>Ad</span>
                    <h4 className={style.products_title}>{val.productName}</h4>
                    <div className={style.products_rating}>
                    <Rate allowHalf defaultValue={3} style = {{fontSize:'0.7rem'}}/>
                    <span className={style.products_sold}>đã bán {val.sold}</span>
                    </div>
                    <div className={style.products_price_box}>
                    <span  className={style.products_price}>{val.price.toLocaleString().split(',').join('.')} đ</span>
                    <span className={style.products_discount}>-14%</span>
                    </div>
                    <div>
                    </div>
                </div>
                </div>
            )     
        })}
    </div>
   <div style={{float: 'right', margin:'20px 0'}} className={style.Pagination}>
   <Stack spacing={2}>
      {listData.length > 16 ? <Pagination count={Math.ceil(listData.length / 16)} page={page} onChange={handleChange}/> : <></>}
    </Stack>
   </div>
    </div>
  )
}

export default Container