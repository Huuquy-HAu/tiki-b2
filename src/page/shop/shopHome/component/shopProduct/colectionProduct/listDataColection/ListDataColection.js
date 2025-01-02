import React from 'react'
import Card1 from '../../../Card1'
import style from './listDataColection.module.css'


function ListDataColection({data}) {
  
  return (
    <div className={style.ListDataColection}>
        {data.map(item=>{
            return(
                <Card1 
                key={item._id}
                img={item.thump}
                title={item.productName}
                sold={item.sold}
                price={item.price}
                discount = {10+Math.round(10*Math.random())}
              />
            )
        })}
    </div>
  )
}

export default ListDataColection