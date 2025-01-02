import { Select, Checkbox  } from 'antd';
import React from 'react';
import style from './header.module.css'
import headerr from './headerr.css'
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const header = (props) => {
  return (
    <div style={style.header}>
    <div  className= {style.option}>
    <div className= {style.option_left}>
    <Checkbox onChange={onChange} style={{marginRight:'20px'}}></Checkbox>
      <span className= {style.option_page}>Page 1, 1 - 3 of 3 items</span>
      <button className= {style.option_btn}>Đóng gói & In</button>
      <button className= {style.option_btn}>In danh sách chọn</button>
      <Select
      defaultValue="lucy"
      style={{
        width: 100,
      }}
      onChange={handleChange}
    >
      <Option value="lucy">export</Option>
    </Select>
   
    </div>
    <div className= {style.option_right}>
    <>
    <Select
      defaultValue="lucy"
      style={{
        width: 250,
      }}
      onChange={handleChange}
    >
      <Option value="lucy">Lọc theo: đơn hàng tạo cũ nhất</Option>
       <Option value="">Lọc theo: đơn hàng tạo mới nhất</Option> 
    </Select>
   
  </>
    </div>
    </div>
    </div>
  )
}

export default header