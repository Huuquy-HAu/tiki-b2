import React, { useEffect, useState } from 'react'
import { Rate } from 'antd';
import 'antd/dist/antd.css'
import style from './card.module.css'
import './card.css'
import { useNavigate } from 'react-router-dom';

function Card1(props) {
  const [linkImg,setLinkImg] = useState('')
  useEffect(function(){
    if(props.img.length > 0){
      setLinkImg(()=>{
        const newLink = props.img[0]
        if(newLink.startsWith('https')){
          return newLink
        }else{
          return `http://localhost:3003/${newLink}`
        }
      })
    }else{
      setLinkImg('https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png')
    }
    
  },[])
  const nav = useNavigate()
  const handleGotoDetail = ()=>{
    nav(`/detail?id=${props.id}`)
  }
  return (
    <div className={style.card} onClick={handleGotoDetail}>
        <img src={linkImg} className={style.img[0]}/>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <div className={style.rate}>
            <Rate allowHalf defaultValue={4.5} className='RateStar' disabled/>
            <span>
              | đã bán {props.sold}
            </span>
          </div>
          <div className={style.price}>
              <span>
                {props.price?props.price.toLocaleString():'500.000'} đ
              </span>
              <span>
                -{props.discount}%
              </span>
          </div>
        </div>
        <img src='https://salt.tikicdn.com/ts/upload/b9/1f/4b/557eac9c67a4466ccebfa74cde854215.png' className={style.label}/>
    </div>
  )
}

export default Card1