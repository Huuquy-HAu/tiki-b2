import React, { useEffect, useState } from 'react'
import { Divider, Steps } from 'antd';
import style from './rate.module.css'
import './rate.css'
import { useLocation } from 'react-router-dom';
const { Step } = Steps;

function Rate() {
  const link = useLocation()
  const [current, setCurrent] = useState(0);
  useEffect(function(){
    window.addEventListener('scroll',scrollFunction)
    return ()=>{
      window.removeEventListener('scroll',scrollFunction,false)
    }
  },[link])
  const scrollFunction = function(e){
    const basicInfor = document.querySelector('#Basic_infomation')
    const brandElement = document.querySelector('#Brand_Step__allInfor')
    const VarientElement = document.querySelector('#Varient_step__scroll')
    const DescriptionElement = document.querySelector('#Description_step__scroll')
    const TransformElement = document.querySelector('#Transform_Step__scroll')
    if(this.window.scrollY >= 400){
      setCurrent(1)
    }else{
      setCurrent(0)
    }
    if(this.window.scrollY >= 400 + brandElement.offsetHeight){
      setCurrent(2)
    }
    if(this.window.scrollY >= 490 + brandElement.offsetHeight + VarientElement.offsetHeight){
      setCurrent(3)
    }
    if(this.window.scrollY >= 490 + brandElement.offsetHeight + VarientElement.offsetHeight + DescriptionElement.offsetHeight){
      setCurrent(4)
    }
  }
 
  const onChange = (value) => {
    const basicInfor = document.querySelector('#Basic_infomation')
    const brandElement = document.querySelector('#Brand_Step__allInfor')
    const VarientElement = document.querySelector('#Varient_step__scroll')
    const DescriptionElement = document.querySelector('#Description_step__scroll')
    const TransformElement = document.querySelector('#Transform_Step__scroll')
    // console.log('onChange:', current,value);
    if(value==0){
      basicInfor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    if(value==1){
      brandElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    if(value==2){
      VarientElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    if(value==3){
      DescriptionElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    if(value==4){
      TransformElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
   
    setCurrent(value);
  };
  // console.log(current)
  return (
    <div className={style.rate}>
        <Steps size='small' current={current} onChange={onChange} direction="vertical" className='rate'>
            <Step title="Thông tin cơ bản" description="" />
            <Step title="Thông số sản phẩm" description="" />
            <Step title="Giá bán, Kho hàng và Biến thể" description="" />
            <Step title="Mô tả sản phẩm" description="" />
            <Step title="Vân chuyển và Bảo hành" description="" />
        </Steps>
    </div>
  )
}

export default Rate