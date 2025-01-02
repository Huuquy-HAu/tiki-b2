import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoadVarient } from '../../../../AddItemReducerSlice'
import style from './addVarient.module.css'
import SubVarient from './varient/Varient'
function AddVarient({setVarient,varient}) {
    const dispatch = useDispatch()
    const [option1,setOption1] = useState([])
    const [option2,setOption2] = useState([])
    const [key1,setKey1] = useState('Nhóm Màu')
    const [key2,setKey2] = useState('Biến Thể')
    const [addVarient,setAddVarient] = useState([])
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
    useEffect(function(){
        dispatch(LoadVarient(varient))
    },[varient])
  const handleAddVarient =()=>{
    setAddVarient(()=>{
        const newVarient = [...addVarient,1]
        return newVarient
    })
  }
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
                    varient={varient}
                    setKey2={setKey2}
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