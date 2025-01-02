import { clearAllListeners } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import Banner from './banner/Banner'
import style from './hotdeal.module.css'
function HotDeal() {

  function setCountDown(){
    const now = new Date()
    const timeNow = (new Date()).getTime()
    const thisHours = now.getHours()
    let nextTime
    if((thisHours+1)%2 == 0){
        nextTime = thisHours + 1
    }else{
        nextTime = thisHours + 2
    }
    const timeNext = now.setHours(nextTime,0,0)
    const distance = timeNext - timeNow

    const second = 1000
    const munite = second * 60
    const hours = munite * 60

    const h = Math.floor(distance/hours)

    const m = Math.floor((distance % hours)/munite)
    const s = Math.floor((distance % munite)/second)
    document.querySelector('#count_down_hour').innerHTML=`0${h}`
    document.querySelector('#count_down_second').innerHTML=(m<=9? `0${m}`:m)

    document.querySelector('#count_down_munite').innerHTML=(s<=9? `0${s}`:s)
  }
  useEffect(function(){
    const interval = setInterval(setCountDown,1000)
    return ()=>{
        clearInterval(interval)
    }
  },[])
  return (
    <div className={style.HotDeal}>
        <div className={style.header}>
            <div className={style.right_header}>
                <div className={style.right_header_img}>
                    <img src='https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg' />
                    <img width="21" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" alt="flash deal" className={style.eBPnHV}></img>
                    <img src='https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg' />
                    <div className={style.count_down}>
                        <span className={style.count_down_item} id='count_down_hour' >01</span>
                        :
                        <span className={style.count_down_item} id='count_down_second'>09</span>
                        :
                        <span className={style.count_down_item} id='count_down_munite'>33</span>
                    </div>
                </div>
            </div>
            <h4 className={style.header_link}>Xem thêm</h4>
        </div>
        <Banner />
    </div>
  )
}

export default HotDeal