import React from 'react'
import style from './addItem.module.css'
import BasicInfo from './basic/BasicInfo'
import FooterAdd from './footerAdditem/FooterAdd'
import ProductInfor from './inforProduct/ProductInfor'
import RightAddItem from './rightAddItem/RightAddItem'


function AddItem() {
  return (
      <div className={style.AddItem}>
        <div className={style.AddItem_left}>
          <BasicInfo/>
          <ProductInfor/>
          <FooterAdd/>
        </div>
        <div className={style.AddItem_right}>
          <RightAddItem/>
        </div>
      </div>
  )
}

export default AddItem