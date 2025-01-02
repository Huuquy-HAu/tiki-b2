import React from 'react'
import Brand from './brand/Brand'
import Description from './description/Description'
import style from './productInfo.module.css'
import Tranform from './transform/Tranform'
import Varient from './varient/Varient'

function ProductInfor() {
  return (
    <div className={style.ProductInfor}>
        <Brand />
        <Varient/>
        <Description/>
        <Tranform/>
    </div>
  )
}

export default ProductInfor