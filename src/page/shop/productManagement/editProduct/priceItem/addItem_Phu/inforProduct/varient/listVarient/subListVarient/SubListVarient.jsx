import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import style from './submitVarient.module.css'
import './subList.css'
import TdList from './TdList'
import InputNumberPhu from './library/InputNumber';
import InputLimeted from './library/InputLimeted';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { loadDetailChange } from './library/SubitemSlice';

const onChange = (value) => {
    console.log('changed', value);
  };
 
  const onChange2 = (checked) => {
    console.log(`switch to ${checked}`);
  };
function SubListVarient({varient,mainInfo,clicked,data}) {    
    const dispatch = useDispatch()
    const [detail,setDetail] = useState([]) 
    const [show,setShow] = useState(false) 
    const [show1,setShow1] = useState(false)
    // console.log(22,data,show)      
    const [defaultDetail,setDefaultDetail] = useState([])
    useEffect(function(){
        if(data.defaultData){
            setDefaultDetail(data.defaultData.productDetailId)
        }
    },[data])
    useEffect(function(){
        if(defaultDetail&&detail&&detail.length>0&&defaultDetail.length>0&&show1==false){
            setShow1(true);
        }
    },[detail])
    // console.log(23,varient,defaultDetail,data,show)
    useEffect(function(){
        if(data.productDetailId&&show===false){
            setShow(true);
        }else{
            if(defaultDetail&&defaultDetail[0] && ((varient[0].option.length > 0 && varient[1].option.length == 0&&defaultDetail[0].option.length == 1) || (varient[1].option.length > 0 &&defaultDetail[0].option.length == 2))){
                if(varient[0].option.length > 0 && varient[1].option.length == 0){
                    const listDetails = varient[0].option.map(item=>{
                        const id = uuidv4().toString()
                        const index = defaultDetail.findIndex(subitem=>{
                            return subitem.option[0].optionName==varient[0].key&&subitem.option[0].value == item
                        })
                        if(index>=0){
                            return defaultDetail[index]
                        }else{
                            return{
                                "_id": id,
                                "productId": "62da5f60bc070a53bcbc3220",
                                "option": [
                                    {
                                        "optionName": varient[0].key,
                                        "value": item,
                                    }
                                ],
                                "listImg": [],
                                "publish": true,
                                "description": [],
                                "createdAt": new Date(),
                                "updatedAt": new Date(),
                                "__v": 0
                            }
                        }
                    })
                    setDetail(listDetails.flat())
                }
                if(varient[1].option.length > 0){
                    const listDetails = varient[0].option.map(item=>{
                    return varient[1].option.map(subitem=>{
                                const id = uuidv4().toString()
                                const index = defaultDetail.findIndex(ITEM=>{
                                    return (ITEM.option[0].optionName == varient[0].key&&ITEM.option[0].value == item&&ITEM.option[1].optionName==varient[1].key&&ITEM.option[1].value == subitem)
                                })

                                // console.log(index)
                                if(index>=0){
                                    return defaultDetail[index]
                                }else{
                                    return{
                                        "_id": id,
                                        "productId": "62da5f60bc070a53bcbc3220",
                                        "option": [
                                            {
                                                "optionName": varient[0].key,
                                                "value": item,
                                            },
                                            {
                                                "optionName": varient[1].key,
                                                "value": subitem,
                                            }
                                        ],
                                        "listImg": [],
                                        "publish": true,
                                        "description": [],
                                        "createdAt": new Date(),
                                        "updatedAt": new Date(),
                                        "__v": 0
                                    }
                                }
                            })
                    })
                    setDetail(listDetails.flat())
                }
            }
            if(defaultDetail&&defaultDetail.length == 0){
                if(varient[0].option.length > 0 && varient[1].option.length == 0){
                    console.log('sản phẩm đang thêm 1 biến thê')
                    const listDetails = varient[0].option.map(item=>{
                    const id = uuidv4().toString()
                    return  {
                                "_id": id,
                                "option": [
                                    {
                                        "optionName": varient[0].key,
                                        "value": item,
                                    }
                                ],
                                "publish": true,
                            }
                    })
                    setDetail(listDetails.flat())
                }
                if(varient[1].option.length > 0){
                    const listDetails = varient[0].option.map(item=>{
                        return varient[1].option.map(subitem=>{
                                const id = uuidv4().toString()
                                return{
                                    "_id": id,
                                    "option": [
                                        {
                                            "optionName": varient[0].key,
                                            "value": item,
                                        },
                                        {
                                            "optionName": varient[1].key,
                                            "value": subitem,
                                        }
                                    ]
                                }
                            })
                    })
                    setDetail(listDetails.flat())
                }
            }
        }
    },[varient,data])
    // console.log(158,detail)
    useEffect(function(){
        if(detail.length > 0){
            dispatch(loadDetailChange({
                detail:detail,
                varient:varient
            }))
        }
    },[detail,varient])
    useEffect(function(){
        const listOption = document.querySelectorAll('.optionVarientALL')
        const newList  =  [...listOption]
        
        newList.map((item,index)=>{ 
            if(data.productDetailId){
                const priceMain = item.querySelector('.Add_price__varient .hello_ant-input-number-input')
                const totalStorege = item.querySelector('.Add_storege-btn .hello_ant-input-number-input')
                const pubLic = item.querySelector('#SellupPulish')
                if(data.productDetailId.length > 0){
                    pubLic.checked = data.productDetailId[index].publish
                    priceMain.value = data.productDetailId[index].price
                    totalStorege.value = data.productDetailId[index].storage
                }else{
                    pubLic.checked = data.publish
                    priceMain.value = data.price
                    totalStorege.value = data.totalStorage
                }
            }
        })
        dispatch(loadDetailChange({
            detail:data.productDetailId,
            varient:varient
        }))
        },[show,show1])

    const [click,setClick] = useState(true)
    const [sku,setSku] = useState(true)
    const onChange1 = (e) => {
        console.log('Change:', e.target.value);
        };
  useEffect(() => {
    console.log('okeoekekeke')
    const addPrice = document.querySelectorAll('.Add_price__varient .hello_ant-input-number-input')
    const addSpecialPrice = document.querySelectorAll('.Add_special__price .hello_ant-input-number-input')
    const addQuantity = document.querySelectorAll('.Add_storege-btn .hello_ant-input-number-input')
    const addSKU = document.querySelectorAll('.Add_Sku .Input_MaxLength__Phu')

    const firstOption = document.querySelectorAll('.firstOption')
    const secondOption = document.querySelectorAll('.secondOption')
    setClick(!click)
    if(mainInfo&&mainInfo.mainPrice&&mainInfo.mainSKU&&mainInfo.mainStorage&&mainInfo.mainPrice.trim()!=''&&mainInfo.mainSKU.trim()!=''&&mainInfo.mainStorage.trim()!='') {   
        console.log('okeoekekeke11')
        if(firstOption.length > 0&& mainInfo.mainSKU && mainInfo.mainSKU.trim()!=''){
            if(secondOption.length > 0){
                const numberScale = secondOption.length/firstOption.length
                if(numberScale == 1 ){
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
        }else if(mainInfo.mainSKU && mainInfo.mainSKU.trim()!=''){
            {[...addSKU].map((item, index) =>{
                
                item.value = mainInfo.mainSKU
                return item
            })}
        }
        {[...addPrice].map((item, index) =>{
            return item.value = mainInfo.mainPrice*1
        })}
        {[...addSpecialPrice].map((item, index) =>{
            if(mainInfo.mainSpecialPrice*1 <= mainInfo.mainPrice*1&&mainInfo.mainSpecialPrice>0){
                return item.value = mainInfo.mainSpecialPrice*1
            }
        })}
        {[...addQuantity].map((item, index) =>{
            // console.log(item)
            item.value = mainInfo.mainStorage*1
        })}
    }

  },[clicked])
  
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
            {varient[0].option.length>0 && detail.length >= varient[0].option.length && varient[0].option.map((option1,index)=>{
                if(varient[1].option.length>0){
                    if(varient[1].option.length == 1){
                        return(
                        <tr dataset={detail.length>0?detail[index]._id:defaultDetail[index]._id} className={`${style.tr_varient} optionVarientALL`} key={index}>
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
                                <Switch  onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')} id='SellupPulish'/>
                            </td>
                        </tr>
                        )
                    }else{
                        return(

                            detail.length >= varient[0].option.length * varient[1].option.length && 
                            <TdList option1={option1} data={varient[1].option} Index={index} click={click} detail={detail} defaultDetail={defaultDetail}/>
                        )
                       
                    }
                    
                }else{
                    return(
                        <tr dataset={detail.length>0?detail[index]._id:defaultDetail[index]._id} className={`${style.tr_varient} optionVarientALL`}  key={index}>
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
                                <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')}  id='SellupPulish'/>
                            </td>
                        </tr>
                    )
                }
                
            })}
            {varient[0].option.length == 0 && (
                <tr className={`${style.tr_varient} optionVarientALL`} key={data._id?data._id:'ProductDefault'} >
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
                        <Switch defaultChecked onChange={onChange2} className={[style.sellUp, 'sellUp'].join(' ')}  id='SellupPulish'/>
                    </td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default SubListVarient