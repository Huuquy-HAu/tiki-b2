import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './brand.module.css'
function Brand() {
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
                    id='Brand_brandIDName'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Xuất sứ
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Xuất sứ...'
                    id='Brand_Origin'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chất liệu
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chất liệu sản phẩm...'
                    id='Brand_material'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Độ tuổi sử dụng
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Từ .... đến ....'
                    id='Brand_Age'
                />
            </label>
            <label className={style.input_label}>
                <span>*</span> Chi tiết
                <input 
                    type={'text'}
                    className={style.detail_input} 
                    placeholder='Chi tiết thông tin sản phẩm'
                    id='Brand_detail'
                />
            </label>
        </div>
        <a className={style.showmore}>Show more <ArrowDropDownIcon/></a>
    </div>
  )
}

export default Brand