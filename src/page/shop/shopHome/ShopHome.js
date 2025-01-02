import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAPI } from '../../../config/api'

import BannerShop from './bannerShop/BannerShop'
import style from './shopHome.module.css'
function ShopHome() {
  const [shopID,setShopID] = useState('')
  const newlink = useLocation()
  useEffect(function(){
    setShopID(newlink.search.split('=')[1])
  },[])
  console.log(13,newlink.search.split('=')[1])
  const [shopData,setShopData] = useState([])
  const [shopInfor,setShopInfor] = useState([])
  useEffect(function(){
    if(shopID&&shopID.length>0){
      getAPI(`/product/get-product-by-shopId/${shopID}`)
        .then((data) => {
          console.log('oki')
            setShopData(data.data.product)
        })
        .catch((error) =>{
            console.log(error)
        })
      getAPI(`/shop/get-one-shop/${shopID}`)
        .then(data=>{
          console.log(19,data)  
          setShopInfor(data.data.shop)
        })
        .catch(error=>{
          console.log(error)
        })
    }
    
  },[shopID])
  // console.log(26,shopInfor,shopData)
  return (
    shopData.length>0&&
    <div className={style.container}>
      <div className={style.shopHome}>
        <BannerShop allProduct={shopData} shopInfor={shopInfor}/>
      </div>
    </div>
  )
}

export default ShopHome