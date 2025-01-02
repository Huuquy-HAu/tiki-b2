import React, { useEffect, useState } from 'react'
import { getAPI } from '../../../../../../config/api'
import style from './addItem.module.css'
import BasicInfo from './basic/BasicInfo'
import FooterAdd from './footerAdditem/FooterAdd'
import ProductInfor from './inforProduct/ProductInfor'
import RightAddItem from './rightAddItem/RightAddItem'
import { useDispatch,useSelector} from 'react-redux'
import { loadDefault } from '../../EditProductSlice'
import { useLocation } from 'react-router-dom'

function EditItem() {
  const dispatch = useDispatch()
  const link = useLocation()
  const Id = link.search.split('=')[1]
  useEffect(function(){
    getAPI(`/product/get-one-product/${Id}`)
      .then((data=>{
        console.log(19,data)
        dispatch(loadDefault(data.data.product))
      })) 
      .catch((error=>{
        console.log(error)
      }))
  },[])
  
  return (
      <div className={style.AddItem}>
        <div className={style.AddItem_left}>
          <BasicInfo />
          <ProductInfor/>
          <FooterAdd/>
        </div>
        <div className={style.AddItem_right}>
          <RightAddItem/>
        </div>
      </div>
  )
}

export default EditItem