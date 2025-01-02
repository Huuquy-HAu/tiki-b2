import React from 'react'
import AllProduct from './allProduct/AllProduct'
import ProductBanner from './productBanner/ProductBanner'
import style from './shopHome.module.css'

function ShopProduct({allProduct,shopInfor}) {
  return (
    <div className={style.ShopProduct}>
        <ProductBanner shopInfor={shopInfor}/>
        <AllProduct activeKey1={'1'} allProduct={allProduct}/>
    </div>
  )
}

export default ShopProduct