import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../hotitem.module.css'

function ListItem({listCategories}) {
  return (
    <div className={style.ListItem}>
        {listCategories.map(function(item){
            return(
                <div className={style.ListItem_item} key={item._id}>
                    <img src={item.thump.startsWith('https')?item.thump:`http://localhost:3003/${item.thump}`} />
                    <h4>{item.categoryName}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default ListItem