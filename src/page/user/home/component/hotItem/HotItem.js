import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAPI } from '../../../../../config/api'
import style from './hotitem.module.css'
import ListItem from './listItem/ListItem'

function HotItem() {
  const [listCategories,setListCategories] = useState([])
  useEffect(function(){
    getAPI(`/category/get-all-categories`)
      .then(data=>{
        setListCategories(data.data.listCategories.slice(0,20))
      })
      .catch(error=>console.log(error))
  },[])
  return (
    <div className={style.HotItem} id='hotItem_Shop__Home'>
        <h5>Danh Mục Nổi Bật</h5>
        <ListItem listCategories={listCategories}/>
    </div>
  )
}

export default HotItem