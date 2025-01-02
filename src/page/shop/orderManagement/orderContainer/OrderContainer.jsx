import React, { useState } from 'react'
import { Select  } from 'antd'
import { useEffect } from 'react'
import { getAPI,patchAPI } from '../../../../config/api.js'
import { Tabs } from 'antd';
import PendingOder from './taboderStatus/PendingOder.js'
import style from './OrderContainer.module.css';
import './orderContainer.css'



const { Option } = Select
const OrderContainer = () => {
  const [listOder,setLisOder] = useState([])
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const [pendingOder,setPendingOder] = useState([])
  const [shippingOder,setShippingOder] = useState([])
  const [paymentOder,setPaymentOder] = useState([])
  const [cuccessOder,setCuccessOder] = useState([])
  const [cancelOder,setCancelOder] = useState([])
  const [clicked,setClicked] = useState(false)
  const [shopId,setShopId] = useState('')
  useEffect(function(){
    getAPI('/shop/get-loged-in-shop')
      .then(data=>{
        setShopId(data.data.shop._id)
      })
      .catch(error=>console.log(error));
  },[])
  useEffect(function(){
    console.log('re-render')
    if(listOder&&listOder.length>0){
      const pendingOder = listOder.filter(item=>{
        return item.status === 'pending'
      })
      const shippingOder = listOder.filter(item=>{
        return item.status === 'shipping'
      })
      const cuccessOder = listOder.filter(item=>{
        return item.status === 'done'
      })
      const cancelOder = listOder.filter(item=>{
        return item.status === 'canceled'
      })
      setPendingOder(pendingOder)
      setShippingOder(shippingOder)

      setCancelOder(cancelOder)
      setCuccessOder(cuccessOder)
    }
  },[listOder])
  const handleSubmitchageStatus = async()=>{
    const allOder = document.querySelectorAll(`.Oder_item__Manager`)
    const listOder = [...allOder]
    await Promise.all(listOder.map( async(item)=>{
      const input  = item.querySelector('.ant-select-selection-item').innerHTML
      const Key = item.getAttribute('dataSet')
      let valueStatus = '';
      if (input === 'Đang xử lí') {
        valueStatus = 'pending'
      } else if (input === 'Đang vận chuyển') {
        valueStatus = 'shipping'
      } else if (input === 'Đơn hàng thất bại') {
        valueStatus = 'canceled'
      } else if (input === 'Giao hàng thành công') {
        valueStatus = 'done'
      };
      await patchAPI(`/order/shop-update-order-status/${Key}`,{
        status: valueStatus
      })
    }))
    setClicked(clicked=>!clicked)
  }
  console.log(clicked)
  useEffect(()=>{ 
      if(shopId.length>0){
        getAPI(`/order/get-orders-by-shop/${shopId}`)
      .then(data =>{
            const newData = data.data.listOrder
            const daTa  = []
            newData.map((value)=>{
              console.log(25,value)
              const Obj = {
                total:value.total,
                userID:value.userId,
                delivery: 'COD',
                id: value._id,
                listProducts:[],
                createdAt:value.createdAt,
                status:value.status
              }
              const listProducts = []
              value.product.map((subvalue,index)=>{
                listProducts.push( {
                  id: subvalue._id,
                  image: value.product[index].productId.thump[0],
                  title:value.product[index].productId.productName,
                  color: 'Blue',
                  code: subvalue._id,
                  amout: value.product[index].quantity,
                  price: value.product[index].productId.price,
                  delivery: 'COD',
                  sdh: value.phone,
                  total:value.total,
                  userID:value.userId
                })
              })
              value.listProduct.map((subvalue,index)=>{
                console.log(subvalue)
                listProducts.push( {
                  id: subvalue._id,
                  image: subvalue.productDetailId.productId.thump[0],
                  title:subvalue.productDetailId.productId.productName,
                  color: 'Blue',
                  code: subvalue._id,
                  amout: subvalue.quantity,
                  price: subvalue.productDetailId.price,
                  delivery: 'COD',
                  sdh: value.phone,
                  total:value.total
                })
              })
              Obj.listProducts = listProducts
              daTa.push(Obj)
            })
            setLisOder(daTa)
      })
      .catch(error => console.log(error))
    }
  },[shopId,clicked])
  // const APIcall =()=>{
  console.log(71,listOder)
  // }
 

  return(
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Đang Xử Lí" key="1">
          <PendingOder listOder={pendingOder}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đang Giao Hàng" key="2">
          <PendingOder listOder={shippingOder}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Giao Hàng Thành Công" key="3">
          <PendingOder listOder={cuccessOder}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đơn Thất Bại" key="4">
          <PendingOder listOder={cancelOder}/>
        </Tabs.TabPane>
      </Tabs>
      <div className="submit_btn">
        <button className="submit__btn_changeStatus" onClick={handleSubmitchageStatus}>
            Submit Change
        </button>
      </div>
    </>
  )
 
}

export default OrderContainer