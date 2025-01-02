import React, { useEffect, useState } from 'react'
import { GlobalStyles } from '../../GlobalStyles/index.js'
import { Select, Checkbox  } from 'antd'
import ListData from '../../listData/ListData.jsx'
import { listproduct } from '../../listproduct.js'

import Headerr from '.././oederheader/Headerr'

import styles from '../OrderContainer.module.css'
import Oder from './oder/Oder.js'


function PendingOder({listOder,clicked}) {
    const [listData,setListData] = useState([])
    useEffect(function(){
        setListData(listOder)
    },[listOder])
    return (
        <div className={styles.order_Container}>
            <Headerr/>
            <div className={styles.order}>
                <div className={styles.order_header}>  
                    <p>Sản phẩm</p>
                    <p>Tổng cộng</p>
                    <p>Giao hàng</p>
                    <p>Trạng thái</p>
                    <p>Thao tác</p>
                </div>
                <ul className= {styles.order_list}>
                    {listData.length>0 && listData.map(Value => {
                    return <Oder Value={Value}/>
                    })}
                    <ListData  data= {listData}/>
                </ul>
                {listOder.length==0 && <div className={styles.img_noData}>
                    <img src='https://store.vtctelecom.com.vn/Content/images/no-data.png' />
                </div>}
            </div>
        </div>
      )
}

export default PendingOder