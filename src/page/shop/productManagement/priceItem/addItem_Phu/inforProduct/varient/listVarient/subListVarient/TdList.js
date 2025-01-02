import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import style from './submitVarient.module.css'
import InputNumberPhu from './library/InputNumber';
import InputLimeted from './library/InputLimeted';
const onChange1 = (e) => {
    // console.log('Change:', e.target.value);
  };
  const onChange2 = (checked) => {
    // console.log(`switch to ${checked}`);
  };
  const onChange = (value) => {
    // console.log('changed', value);
  };
function TdList({data,option1,click}) {
  return (
    <>
    {data.map((item,index)=>{
        if(index==0){
            return(
                <tr className={`${style.tr_varient} DetailListItem`} id={`TR_option${index}`}>
                    <td rowSpan={data.length} >
                        <div className={[style.Varient_option,'firstOption'].join(' ')} >
                            {option1}
                        </div>
                    </td>
                    <td>
                        <div className={[style.Varient_option,'secondOption'].join(' ')} >
                            {item}
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
                            <InputLimeted click={click} index={`${option1}${index}`}/>
                        </div>
                    </td>
                    <td>
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} />
                    </td>
                </tr>
            )
        }else{

            return(
                <tr className={`${style.tr_varient} DetailListItem`}>
                    <td>
                        <div className={[style.Varient_option,'secondOption'].join(' ')}>
                            {item}
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
                            <InputLimeted click={click} index={`${option1}${index}`}/>
                        </div>
                    </td>
                    <td>
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} />
                    </td>
                </tr>
            )
        }
    })}
  </>
  )
}

export default TdList