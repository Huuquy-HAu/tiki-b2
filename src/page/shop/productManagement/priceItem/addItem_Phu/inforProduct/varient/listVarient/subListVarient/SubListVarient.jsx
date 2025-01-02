import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import style from './submitVarient.module.css'
import './subList.css'
import TdList from './TdList'
import InputNumberPhu from './library/InputNumber';
import InputLimeted from './library/InputLimeted';
const onChange = (value) => {
    console.log('changed', value);
  };
 
  const onChange2 = (checked) => {
    console.log(`switch to ${checked}`);
  };
function SubListVarient({varient,mainInfo}) {
    const [click,setClick] = useState(true)
    const [sku,setSku] = useState(true)
    const onChange1 = (e) => {
        console.log('Change:', e.target.value);
      };
  useEffect(() => {
    const addPrice = document.querySelectorAll('.Add_price__varient .hello_ant-input-number-input')
    const addSpecialPrice = document.querySelectorAll('.Add_special__price .hello_ant-input-number-input')
    const addQuantity = document.querySelectorAll('.Add_storege-btn .hello_ant-input-number-input')
    const addSKU = document.querySelectorAll('.Add_Sku .Input_MaxLength__Phu')

    const firstOption = document.querySelectorAll('.firstOption')
    const secondOption = document.querySelectorAll('.secondOption')
    setClick(!click)
    if(firstOption.length > 0){
        if(secondOption.length > 0){
            const numberScale = secondOption.length/firstOption.length
            if(numberScale == 1){
                {[...addSKU].map((item, index) =>{
                    return item.value = `${mainInfo.mainSKU}-${[...firstOption][index].innerHTML}-${[...secondOption][index].innerHTML}`
                })}
            }else{
                {[...addSKU].map((item, index) =>{
                    const indexFirst = Math.floor((index)/numberScale)                   
                    return item.value = `${mainInfo.mainSKU}-${[...firstOption][indexFirst].innerHTML}-${[...secondOption][index].innerHTML}`
                })}
            }
        }else{
            {[...addSKU].map((item, index) =>{
                
                return item.value = `${mainInfo.mainSKU}-${[...firstOption][index].innerHTML}`
            })}
        }
    }else{
        {[...addSKU].map((item, index) =>{
            
            item.value = mainInfo.mainSKU
            return item
        })}
    }
    {[...addPrice].map((item, index) =>{
        return item.value = mainInfo.mainPrice*1
    })}
    {[...addSpecialPrice].map((item, index) =>{
        if(mainInfo.mainSpecialPrice*1 <= mainInfo.mainPrice*1){
            return item.value = mainInfo.mainSpecialPrice*1
        }
    })}
    {[...addQuantity].map((item, index) =>{
        console.log(item)
        item.value = mainInfo.mainStorage*1
    })}
   

  },[mainInfo])
  
  return (
    <div className={style.SubListVarient}>
        <table className={style.Table_AddVarient}>
            <tr className={style.header}>
                {varient[0].option.length>0 && <th className={style.varient}>{varient[0].key}</th>}
                {varient[1].option.length>0 && <th className={style.varient}>{varient[1].key}</th>}
                <th className={style.price}>Giá *</th>
                <th className={style.special_Price}>Giá đặc biệt</th>
                <th className={style.storage}>Kho hàng</th>
                <th className={style.productSKU}>SellerSKU</th>
                <th className={style.sell}>Mở bán</th>
            </tr>
            {varient[0].option.length>0 &&  varient[0].option.map((option1,index)=>{
                if(varient[1].option.length>0){
                    if(varient[1].option.length == 1){
                        return(
                        <tr className={`${style.tr_varient} DetailListItem`}>
                            <td>
                                <div className={[style.Varient_option,'firstOption'].join(' ')}>
                                    {option1}
                                </div>
                            </td>
                            <td>
                                <div className={[style.Varient_option,'secondOption'].join(' ')}>
                                    {varient[1].option[0]}
                                </div>
                            </td>
                           
                            <td>
                            <div className='Add_price__varient'>
                                    <span className='Add_Money'>
                                        VND
                                    </span>   
                                    <InputNumberPhu placeholder='Giá'/>
                            </div>
                            </td>
                            <td>
                                <div className='Add_special__price'>
                                    <InputNumberPhu  placeholder='ADD'/>
                                </div>
                            </td>
                            <td>
                                <div className='Add_storege-btn'>
                                    <InputNumberPhu  placeholder='kho'/>
                                </div>
                            </td>
                            <td>
                                <div className='Add_Sku'>
                                    <InputLimeted click={click} index={index}/>
                                </div>
                            </td>
                            <td>
                                <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} />
                            </td>
                        </tr>
                        )
                    }else{
                        return(
                            <TdList option1={option1} data={varient[1].option} click={click}/>
                        )
                       
                    }
                    
                }else{
                    return(
                        <tr className={`${style.tr_varient} DetailListItem`}>
                            <td>
                                <div className={[style.Varient_option,'firstOption'].join(' ')}>
                                    {option1}
                                </div>
                            </td>
                           <td>
                            <div className='Add_price__varient'>
                                    <span className='Add_Money'>
                                        VND
                                    </span>   
                                    <InputNumberPhu placeholder='Giá'/>
                            </div>
                            </td>
                            <td>
                                <div className='Add_special__price'>
                                    <InputNumberPhu  placeholder='ADD'/>
                                </div>
                            </td>
                            <td>
                                <div className='Add_storege-btn'>
                                    <InputNumberPhu  placeholder='kho'/>
                                </div>
                            </td>
                            <td>
                                <div className='Add_Sku'>
                                    <InputLimeted click={click} index={index}/>
                                </div>
                            </td>
                            <td>
                                <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} />
                            </td>
                        </tr>
                    )
                }
                
            })}
            {varient[0].option.length == 0 && (
                <tr className={`${style.tr_varient} DetailListItem`}>
                    <td>
                        <div className='Add_price__varient'>
                                <span className='Add_Money'>
                                    VND
                                </span>   
                                <InputNumberPhu placeholder='Giá'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_special__price'>
                            <InputNumberPhu  placeholder='ADD'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_storege-btn'>
                            <InputNumberPhu  placeholder='kho'/>
                        </div>
                    </td>
                    <td>
                        <div className='Add_Sku'>
                            <InputLimeted click={click} index={1}/>
                        </div>
                    </td>
                    <td>
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} />
                    </td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default SubListVarient