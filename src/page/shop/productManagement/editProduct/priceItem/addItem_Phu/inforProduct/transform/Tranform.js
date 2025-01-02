import { Select } from 'antd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Checkbox } from 'antd';
import { Switch } from 'antd';
import { InputNumber } from 'antd';
import React, { useState } from 'react';
import style from'./tranform.module.css'
import './transform.css'
const children =[]
const children1 = [
  'Bằng hoá đơn mua hàng',
  'Bằng tem bảo hành',
  'Bằng phiếu bảo hành hoặc Hoá đơn',
  'Bằng thẻ bảo hành hoặc Hoá đơn',
  'Bảo hành điện tử',
  'Bảo hành bởi Nhà sản xuất quốc tế',
  'Không bảo hành',
  'Bằng hộp sản phẩm hoặc Số seri',
  'Nhà cung cấp trong nước bảo hành',
  'Bảo hành bởi Nhà bán hàng quốc tế',
  'Bảo hành bởi Nhà phân phối trong nước'
];
const children2 = []
const children3 = [
  '1 năm',
  '1 tháng',
  '2 tháng',
  '3 tháng',
  '4 tháng',
  '5 tháng',
  '6 tháng',
  '7 tháng',
  '8 tháng',
  '9 tháng',
  '10 tháng',
  '11 tháng',
  '12 tháng',
  '18 tháng',
  '2 năm',
  '3 năm',
  '5 năm',
  '10 năm',
  'Bảo hành trọn đời'
]
const { Option } = Select;  
for (let i = 0; i < children1.length; i++) {
  children.push(<Option key={i.toString(36) + i}>{children1[i]}</Option>);
}
for (let i = 0; i < children3.length; i++) {
  children2.push(<Option key={i.toString(36) + i}>{children3[i]}</Option>);
}
const handleChange = (value) => {
  // console.log(`selected ${value}`);
};

const onChange1 = (value) => {
  console.log('changed', value);
};

const onChange3 = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['Liquid', 'Chất dễ cháy', 'Pin', 'Không'];

function Tranform() {
  const [delivery,setDelivery] = useState(true)
  const [show,setShow] = useState(false)
  const [showMore,setShowMore] = useState(true)
  const onChange = (checked) => {
    setDelivery(!checked)
  };
  return (
    <div className={style.Tranform} id='Transform_Step__scroll'>
        <h2 className={style.title}>
          Vân chuyển và Bảo hành
        </h2>
        <h4>
          Service
        </h4>
       <label>
          <span>*</span> Loại bảo hành
          <>
            <Select
              className={`${style.Option} transform`}
              allowClear={true}
              style={{
                width: '100%',
              }}
              placeholder="Hình thức bảo hành"
              defaultValue={['Bằng hoá đơn mua hàng']}
              onChange={handleChange}
            >
              {children}
              
            </Select>
          </>
       </label>
      {showMore && <div>
      <a className={style.showmore} onClick={()=>{
        setShow(true)
        setShowMore(false)
      }}>
          Show More <ArrowDropDownIcon/>
       </a>
      </div>}
      {show && <div>
       <label>
        <span>*</span> Bảo hành
        <>
          <Select
            className={`${style.Option} transform`}
            allowClear={true}
            style={{
              width: '100%',
            }}
            placeholder="Thời gian bảo hành"
            defaultValue={[]}
            onChange={handleChange}
          >
            {children2}
            
          </Select>
          </>
        </label>
        <div className={style.allPolicy}>
              <label>
              <span>*</span>Chính sách bảo hành
              <input type='text' className={style.policy}/>
              </label>
        </div>
        <div>
          <a className={style.showmore} onClick={()=>{
            setShow(false)
            setShowMore(true)
          }}>
            Show Lett <ArrowDropUpIcon/>
          </a>
        </div>
      </div>}
      <div className={style.delivery}>
        <h3>Delivery</h3>     
        <div className={style.option}>
          <Switch  onChange={onChange} className='switch'/>
          <span>
            Bật lên nếu biến thể sản phẩm có kích thước và trọng lượng khác nhau
          </span>
        </div>
        {delivery && <div className={style.detail}>
          <div className={style.allPolicy}>
              <label>
              <span>*</span>Khối lượng kiện hàng sau khi đóng gói (đơn vị: kilogram). VD: Nếu gói hàng cân nặng 200 gram thì vui lòng điền 0.2 vào ô bên dưới
              <InputNumber min={0} max={100} defaultValue={0.5}  onChange={onChange1}  className='input_number_hev' step={0.01}/>
              </label>
          </div>
          <span>*</span>Kích thước hàng (cm)
          <div className={style.sizeInfo}>
            <label>
              <InputNumber min={0} max={100}  onChange={onChange1}  className='input_number_he' step={0.01} placeholder='Chiều dài (cm)' defaultValue={Math.round(Math.random()*30)+30} />
            </label>
            x
            <label>
              <InputNumber min={0} max={100} onChange={onChange1}  className='input_number_he' step={0.01} placeholder='Chiều rộng (cm)' defaultValue={Math.round(Math.random()*30)+30}/>
            </label>
            x
            <label>
              <InputNumber min={0} max={100} onChange={onChange1}  className='input_number_he' step={0.01} placeholder='Chiều cao (cm)' defaultValue={Math.round(Math.random()*30)+30}/>
            </label>
          </div>
        </div>}
        <div className={style.dangered}>
            <p>
              Chất liệu nguy hiểm
            </p>
            <>
            <Checkbox.Group options={plainOptions} defaultValue={['Không']} onChange={onChange3} />
            </>
          </div>
      </div>
    </div>
  )
}

export default Tranform