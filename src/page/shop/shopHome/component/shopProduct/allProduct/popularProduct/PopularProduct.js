
import React, { useEffect, useState } from 'react'
import Card1 from '../../../Card1'
import Card from '../../../Card1'
import style from './popularProduct.module.css'

function PopularProduct({listProduct}) {

  const [listShow,setListShow] = useState([])
  const [pageSize,setPageSize] = useState(24)
 
  useEffect(function(){
      setListShow(()=>{
        const newData = [...listProduct].splice(0,pageSize)
        return newData
    })
  },[listProduct,pageSize])

  const handleReadmore =()=>{
    if(pageSize < listProduct.length){
      setPageSize((pageSize)=>{
        return pageSize + 24
      })
    }
  }
  // console.log(26,listShow)
  return (
    <>
    <div className={style.product}>
      <div className={style.Card}>
          {listShow.map(item=>{
              return(
                  <Card1 
                      key={item._id}
                      id={item._id}
                      img={item.thump}
                      title={item.productName}
                      sold={item.sold}
                      price={item.price}
                      discount = {10+Math.round(10*Math.random())}
                  />
              )
          })}
      </div>
    </div>
     <button className={style.readMore} onClick={handleReadmore}>Xem thêm</button>
     </>
  )
}

export default PopularProduct