import React, { useState } from 'react'
import { InputNumber } from 'antd';
import { Input } from 'antd';
import style from './listVarient.module.css'
import './listVarient.css'
import SubListVarient from './subListVarient/SubListVarient';
import { dblClick } from '@testing-library/user-event/dist/click';
const onChange = (value) => {
    // console.log('changed', value);
  };
  const { TextArea } = Input;

  const onChange1 = (e) => {
    // console.log('Change:', e.target.value);
  };
  
function ListVarient({varient}) {
  const [mainInfo,setMainInfo] = useState({})
  const handleAddProperties=()=>{
    const mainPrice = document.querySelector('#Input_price_first').value
    const mainSpecialPrice = document.querySelector('#Input_price_special').value
    const mainStorage = document.querySelector('#Input_price_storage').value
    const mainSKU = document.querySelector('#Main_seller__Sku').value
    setMainInfo({mainPrice,mainSpecialPrice,mainStorage,mainSKU})
  }
  
  return (
    <div className={style.ListVarient}>
        <div className={style.setPrice}>
            <p>
                <span>*</span>
                Giá bán & Kho hàng
            </p>
            <div className={style.Price_module}>
                <button className={style.btn_price}>
                    <span className={style.deno}>VND</span>
                    <InputNumber 
                        min={0} 
                        placeholder='Giá'
                        onChange={onChange} 
                        className='Input_Price Input_price_first'
                        id='Input_price_first'
                    />
                </button>
                <button className={style.btn_price}>
                    <span className={style.deno}>VND</span>
                    <InputNumber 
                        min={0} 
                        placeholder='Giá đặc biệt'
                        onChange={onChange} 
                        className='Input_Price Input_price_special'
                        id='Input_price_special'
                    />
                </button>
                <button className={style.btn_price}>
                    <InputNumber 
                        min={0} 
                        placeholder='Kho hàng'
                        onChange={onChange} 
                        className='Input_Price Input_price_storage'
                        id='Input_price_storage'
                    />
                </button>
                <Input 
                    showCount maxLength={200} 
                    onChange={onChange1} 
                    className={style.sku} 
                    placeholder='Seller SKU'
                    id='Main_seller__Sku'
                />
                <button className={style.submit_all} onClick={handleAddProperties}>
                    Áp Dụng Cho Tất Cả
                </button>
            </div>
        </div>
        <SubListVarient varient={varient} mainInfo={mainInfo}  />
    </div>
  )
}

export default ListVarient