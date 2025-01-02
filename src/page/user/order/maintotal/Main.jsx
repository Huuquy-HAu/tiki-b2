import React, { useEffect, useState } from 'react';
import OrderHeader from '../header/OrderHeader';
import Main_Left from '../main/main_Left/Main_Left';
import Main_Right from '../main/main_Right/Main_Right';

import './StyleMain.css'
import { Data } from './Data';
import { Routes, Route, useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import { getAPI, postAPI } from '../../../../config/api';
import ModalAddAdress from '../main/main_Right/modalAddAdress/Modal';
function Main() {
   
    const nav = useNavigate()
        ///////////////////
        const [order, setOrder] = useState([])

        let { orderId } = useParams();  
        //gộp data cũ thành data mới      
        useEffect(()=>{
              temps();  
            }
        ,[])
        const [cartId,setCartId]=useState('')
        async function  temps (){
            try {
                const cart = await getAPI('/cart/get-loged-in-cart')
                setCartId(cart.data.cart._id)
                const Cart = cart.data.cart
                const listProductdetail = cart.data.cart.listProduct
                const newData = cart.data.cart.product
                console.log(32, newData)
                const NEWDATA = newData.map((item) => {
                    return {
                      productDetailId: {
                        _id: item.productId._id,
                        productId: item.productId,
                        price: item.productId.price,
                      },
                      quantity: item.quantity,
                      selected: item.selected,
                      _id: item.productId._id,
                    };
                  });
                  const newDATA = [...NEWDATA, ...listProductdetail]
                  const EndData = []
                  newDATA.map(item =>{
                    if(item.selected){
                        EndData.push(item)
                    }
                  })
                  Cart.listProduct = EndData
                const orderList=[]
                const shopName=[]
                Cart.listProduct.map((value) => {
                    const shopname = value.productDetailId.productId.shopId.shopName
                    //lọc tránh trùng shop,nếu shop nào trùng nó k lọc qua nữa
                    if(!shopName.includes(shopname)){
                        shopName.push(shopname);
                        //tifm những shopName trùng nhau gộp vào 1 mảng
                        const data = Cart.listProduct.filter(item=>{
                            return item.productDetailId.productId.shopId.shopName === shopname
                        })
                        const element = {
                            shopname: shopname,
                            listProduct: data
                        }
                        orderList.push(element);
                    }
                })

                setOrder(orderList)
                    
            } catch (error) {
                console.log(error)
            }        
            }


      
    
        const [money,setMoney] = useState(0)
        const [product, setProduct] = useState(0)

    useEffect(()=>{
        let total=0;
        for(let i=0;i<order.length; i++){
            for(let j=0; j<order[i].listProduct.length;j++ ){
                total += 
                order[i].listProduct[j].quantity
                * order[i].listProduct[j].productDetailId.price
            }
        }
        setMoney(total)
    },[order])
    return (
        <div className='main'>
            <OrderHeader/>
            <main style={{background:'#F5F5FA'}}>
                    <div className="hfMLFx elPTRG">
                            <Main_Left  data={order}/>
                            <Main_Right data={order} money={money}  cartId={cartId} />
                    </div>
            </main>
        </div>
    );
}

export default Main;