import React, { useState } from 'react'
import { UserOutlined, WechatOutlined, PrinterOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useEffect } from 'react'
import { getAPI,patchAPI } from '../../../../../../config/api.js'
import { Select, Checkbox  } from 'antd'
import styles from '../../OrderContainer.module.css'
import { style } from '@mui/system';
const { Option } = Select
function Oder({Value}) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      }
      const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
    const hour  = Math.round(((new Date()).getTime() - (new Date(Value.createdAt).getTime()))/(1000*60*60))

    let valueStatus = '';
    let option
    if (Value.status === 'pending') {
      valueStatus = 'Đang xử lí'
      option=<>
            <Option value="Đang xử lí">Đang xử lí</Option>
            <Option value="Đang vận chuyển">Đang vận chuyển</Option>
            <Option value="Giao hàng thành công">Giao hàng thành công</Option>
            <Option value="Đơn hàng thất bại">Đơn hàng thất bại</Option>
        </>
    } else if (Value.status === 'shipping') {
      valueStatus = 'Đang vận chuyển'
      option=<>
            <Option value="Đang vận chuyển">Đang vận chuyển</Option>
            <Option value="Giao hàng thành công">Giao hàng thành công</Option>
            <Option value="Đơn hàng thất bại">Đơn hàng thất bại</Option>
        </>
    }else if (Value.status === 'canceled') {
      valueStatus = 'Đơn hàng thất bại'
      option=<>
                <Option value="Đơn hàng thất bại">Đơn hàng thất bại</Option>
            </>
    } else if (Value.status === 'done') {
      valueStatus = 'Giao hàng thành công'
      option=<>
            <Option value="Giao hàng thành công">Giao hàng thành công</Option>
            </>
    };
    return (
        <li key={Value.id} dataSet={Value.id} className= {[styles.order_item,'Oder_item__Manager'].join(' ')}>
            <div className= {styles.order_item_header}>
                <div className= {styles.order_item_header_box}>
                    <div className= {styles.order_item_left}>
                        <Checkbox onChange={onChange} style={{marginRight:20}}></Checkbox>
                        <Avatar size="small" icon={<UserOutlined />}/>
                        <span className={styles.order_item_name}>{Value.userID}</span>
                        <WechatOutlined  style={{color:'rgb(107, 107, 248)', marginRight:10}}/>
                        <span>(1 sản phẩm)</span>
                    </div>
                    <div className={styles.order_item_right}>
                        <p className={styles.order_item_sdh}>Số đơn hàng: <span>{Value.listProducts.length}</span></p>
                        <span>
                            {new Date(Value.createdAt).toUTCString()}
                        </span>
                    </div>
                    <Select
                            showSearch
                            style={{
                            width: 200,
                            }}
                            
                            defaultValue={valueStatus}
                            placeholder="Change Status Order"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                        {option}
                        
                        </Select>
                </div>
            </div>
            {Value.listProducts.map(value=>{
            return(
                <div key={value.id} className= {styles.order_item_middle}>
                <div className= {styles.order_info_product}>
                        <Checkbox onChange={onChange} style={{marginTop:20}}></Checkbox>
                        <img src={value.image} alt='' className={styles.order_info_img}/>
                    <div className= {styles.order_info}>
                        <p className={styles.order_info_title}>{value.title}</p>
                        <span>Nhóm màu: {value.color}</span>
                        <p>Mã SKU NBH: {value.code}</p>
                    </div>
                </div>
                <div className= {styles.order_info_price_box}>
                    <p className= {styles.order_info_price}><span>đ</span> {value.price}</p>
                    <span className={styles.order_info_price_amount}>x{value.amout}</span>
                </div>
                <div className={styles.order_info_new}>
                    <p><span>đ</span> {value.price*value.amout}</p>
                    <span className={styles.order_info_delivery}>{value.delivery}</span>
                </div>
                <p className={styles.order_info_standard}>Tiêu chuẩn</p>
                <div>
                    <p className={styles.order_info_standard}>{valueStatus}</p>
                    <p className={styles.order_info_hrs}>{hour}hrs</p>
                    <div>
                        <span><PrinterOutlined style={{marginRight:7}}/>Mã đơn hàng</span>
                        <span style={{marginLeft:10}}><PrinterOutlined style={{marginRight:7}}/>Hóa đơn</span>
                        <p><PrinterOutlined style={{marginRight:7}}/>Danh sách chọn</p>
    
                    </div>
                </div>
                <div>
                    <button className={styles.order_info_btn}>Đóng gói & In</button>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: 150,color: 'blue'
                        }}
                        onChange={handleChange}
                        >
                        <Option value="lucy">export</Option>
                    </Select>
                </div>
                
            </div>
            )
            })}
            <div className={styles.total_order}>
                    {'TOTAL:   '}
                    <span>
                    {`${Value.total.toLocaleString()}`}Đ
                    </span>
            </div>
        </li>
        
      )
}

export default Oder