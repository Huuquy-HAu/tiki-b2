import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './brand.module.css'
import { useSelector,useDispatch } from 'react-redux';

function Brand() {
  const newData = useSelector(state=>{
    return state.eidtProduct
  })
  const [origin,setOrigin] = useState('')
  const [material,setMaterial] = useState('')
  const [age,setAge] = useState('') 
  const [detail,setDetail] = useState('')
  const [description,setDescription] = useState('')
  const dispatch = useDispatch()
  useEffect(function(){
    if(newData.about){
        const listInfor = newData.about
        console.log(17,listInfor)
        listInfor.map(item=>{
            if(item.key == 'Origin'){
                setOrigin(item.value)
            }
            if(item.key == 'Material'){
                setMaterial(item.value)
            }
            if(item.key == 'Age'){
                setAge(item.value)
            }
            if(item.key == 'Detail'){
                setDetail(item.value)
            }
            if(item.key == 'Description'){
                setDescription(item.value)
            }

            
        })
    }
  },[newData])
  return (
    <div className={style.Brand} id='Brand_Step__allInfor'>
        <h2>
            Thông số sản phẩm
        </h2>
        <p>
        Thêm thuộc tính để gia tăng khả năng hiển thị
        </p>
        <div className={style.detail}>
            <label className={style.input_label}>
                <span>*</span> Thương hiệu
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Nhập thương hiệu sản phẩm...'
                    value={newData.brandId?newData.brandId:'No Brand'}
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Xuất sứ
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Xuất sứ...'
                    value={origin.trim().length>0?origin:'Nội địa'}
                    onChange={(e)=>setOrigin(e.target.value)}
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chất liệu
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chất liệu sản phẩm...'
                    value={material.trim().length>0?material:'Chât liệu tổng hợp'}
                    onChange={(e)=>setMaterial(e.target.value)}
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Độ tuổi sử dụng
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Từ .... đến ....'
                    value={age.trim().length>0?age:'Phù hợp cho tất cả độ tuổi'}
                    onChange={(e)=>setAge(e.target.value)}
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chi tiết
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chi tiết thông tin sản phẩm'
                    value={detail.trim().length>0?detail:'Chi tiết sản phẩm ở dưới mô tả'}
                    onChange={(e)=>setDetail(e.target.value)}
                />
            </label>
        </div>
        <a className={style.showmore}>Show more <ArrowDropDownIcon/></a>
    </div>
  )
}

export default Brand