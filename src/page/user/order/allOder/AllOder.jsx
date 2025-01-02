import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAPI, patchAPI } from '../../../../config/api';
import style from '../allOder/AllOder.module.css'
function AllOder(props) {
     const nav = useNavigate()
     const [statusTitle, setstatusTitle] = useState()
     const [daterender, setdaterender] = useState([...props.newdata]);
     useEffect(() => {
          setdaterender(props.newdata.slice(props.start, props.start + 3))
     }, [props.start, props.newdata])
     function go_Shophome(id) {
          nav(`/ShopHome?ShopID=${id}`)
     }
     function Go_ProductDetail(idproduct) {
          nav(`/detail?id=${idproduct}`)
     }
     function UserDelete_Oder(idOrder) {
          if (window.confirm('Bạn có chắc chắn muốn hủy đơn hàng ?')) {
               patchAPI('/user-order/cancel-order/' + idOrder)
               props.setcount(props.count + 1)
          }


     }
     async function AddOrdertoCart(idDetail, check) {
          console.log(27, check)
          try {
               let cart = await getAPI("/cart/get-loged-in-cart")
               let cartId = cart.data.cart._id;
               console.log(25, idDetail)
               if (check) {
                    await patchAPI('/cart/add-to-cart/' + cartId, {
                         productDetailId: idDetail,
                         quantity: 1
                    })
               } else {
                    await patchAPI('/cart/add-to-cart/' + cartId, {
                         productId: idDetail,
                         quantity: 1
                    })
               }
               let cartnumber =
                    document.getElementsByClassName("HeaderCartTitle")[0].innerHTML * 1;
               cartnumber += 1;
               document.getElementsByClassName(
                    "HeaderCartTitle"
               )[0].innerHTML = `${cartnumber}`;
               window.alert('Sản phẩm đã được thêm vào giỏ hàng')

          } catch (err) {
               console.log(err)
          }
     }
     return (
          <div className={style.Alloder_Title}>
               {daterender.map(function (value, index) {

                    return <div key={index} className={style.OderTitle}>
                         <p className={style.Oder_HeaderTitle}>{value.status}</p>
                         <div className={style.MidleTitle}>
                              <div className={style.MidleTitle_Left}>
                                   <img src={value.img} alt="" className={style.ImageTitle} onClick={() => { Go_ProductDetail(value.idDetail) }} />
                                   <h4 style={{ opacity: 0.8 }} onClick={() => { Go_ProductDetail(value.idDetail) }}>{value.name} </h4>
                              </div>
                              <div className={style.ImageTitleText}>
                                   <p>{(value.price * 1).toLocaleString()}đ </p>
                                   <p>x{value.sold}</p>
                              </div>

                         </div>
                         <div className={style.OrderBottomTitle}>
                              <div className={style.OderBottom_Shoplogo} onClick={() => { go_Shophome(value.shopId.id) }}>
                                   <img src={value.shopId.shoplogo} alt="" />
                                   <span>{value.shopId.shopname} </span>
                              </div>
                              {console.log(42, value)}
                              <div className={style.BottomTitle}>
                                   <p style={{ textAlign: 'right', fontSize: '14px', opacity: '0.7', marginBottom: '5px' }} >TOTAL : <span style={{ opacity: '1', fontWeight: '500', color: 'red', textDecoration: 'underline', fontSize: '16px' }} >{(value.price * value.sold).toLocaleString()}đ</span></p>
                                   <div style={{ textAlign: 'right' }}>
                                        <button className={style.BottomTitle_Button} onClick={() => { AddOrdertoCart(value.idDetail, value.checkIsdetail) }}>Mua Lại</button>
                                        <button className={style.BottomTitle_Button} onClick={() => { Go_ProductDetail(value.idproduct) }}>Xem Chi Tiết</button>
                                        {
                                             value.status == 'Đang xử lí' || value.status == 'Chờ thanh toán' ? <button className={style.BottomTitle_Button} onClick={() => { UserDelete_Oder(value.idOrder) }}> Hủy Đơn</button> : null
                                        }
                                   </div>
                              </div>
                         </div>

                    </div>
               })}
               <div className={style.EmptyOder}>
                    <img src={props.emptyOder} className={style.EmptyOder_img} alt="" />
               </div>
          </div>
     )
}

export default AllOder