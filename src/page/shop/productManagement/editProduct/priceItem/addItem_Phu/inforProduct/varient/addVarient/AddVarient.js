import React, { useEffect, useState } from 'react'
import style from './addVarient.module.css'
import SubVarient from './varient/Varient'
import {useSelector} from 'react-redux'
function AddVarient({setVarient,varient}) {
    // console.log(5,data.productDetailId[0].option.length)
    const data = useSelector(state=>{
        return state.eidtProduct
      })
    // console.log(data)
    const [option1,setOption1] = useState([])
    const [option2,setOption2] = useState([])
    // const [key1,setKey1] = useState(data.productDetailId.length==0?'Nhóm Màu':data.productDetailId[0].option[0].optionName)
    const [key1,setKey1] = useState('Nhóm màu')
    const [key2,setKey2] = useState('Biến Thể')
    const [addVarient,setAddVarient] = useState([])
    // console.log(17,)
    useEffect(function(){
       if(data){
        // console.log('setAddvarient')
        setAddVarient((addVarient)=>{
            if(data.productDetailId && data.productDetailId.length>0){
                if(data.productDetailId[0].option.length==1){
                    return [1]
                }else{
                    return [1,1]
                }
             }else{
                 return []
             }
        })
        setKey1((key1)=>{
            if(data.productDetailId&&data.productDetailId.length>0){
               return data.productDetailId[0].option[0].optionName
            }else{
                return key1
            }
        })
        setKey2((key2)=>{
            if(data.productDetailId&&data.productDetailId.length>0&&data.productDetailId[0].option.length>1){
               return data.productDetailId[0].option[1].optionName
            }else{
                return key2
            }
        })
        setOption1((option1)=>{
            if(data.productDetailId&&data.productDetailId.length>0){
                const Data = []
                const newData = data.productDetailId.map(item=>{
                   if(!Data.includes(item.option[0].value)){
                       Data.push(item.option[0].value)
                   }
                })
                return Data
             }else{
                 return option1
             }
        })
        setOption2((option2)=>{
            if(data.productDetailId&&data.productDetailId.length>0&&data.productDetailId[0].option.length>1){
                const Data = []
                const newData = data.productDetailId.map(item=>{
                   if(!Data.includes(item.option[1].value)){
                       Data.push(item.option[1].value)
                   }
                })
                return Data
             }else{
                 return option2
             }
        })
       }
    },[data.productDetailId,data])
    useEffect(function(){
        setVarient([
            {
                option:option1,
                key:key1
            },
            {
                option:option2,
                key:key2
            }
        ])
    },[option1,option2,key1,key2])


  const handleAddVarient =()=>{
    setAddVarient(()=>{
        const newVarient = [...addVarient,1]
        return newVarient
    })
  }
//   console.log(92,data,addVarient)
  return (
    <div className={style.AddVarient}>
        {addVarient.map((varient,index)=>{
            return(
                <SubVarient key={index} index={index} setAddVarient={setAddVarient}
                    addVarient={addVarient}
                    option={index==0?option1:option2}
                    setOption={index==0?setOption1:setOption2}
                    Key={index==0?key1:key2}
                    setKey={index==0?setKey1:setKey2}
                    Key2={key2}
                    option2={option2}
                    setOption2={setOption2}
                    Key1={key1}
                />
            )
        })}
        {
            addVarient.length < 2 &&
            <button className={style.btn_add} onClick={handleAddVarient}>
                + Thêm sản phẩm ({addVarient.length}/2)
            </button>
        }

    </div>
  )
}

export default AddVarient