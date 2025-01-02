import React, { useEffect, useState } from 'react';
import { Data } from './Data';
import { listBank } from './ListBank';
import { ListCard } from './ListCard';
import { ListPay } from './ListPay';
import { ListProduct } from './ListProduct';
import { postAPI,getApi, getAPI } from '../../../../../config/api';
import './StyleLeft.css'
function Main_Left({data}) {
    

  
    return (
        
        <div>
            <div className="left">
                <div className="bVA-DDf guqnAw">
                    <h3 className="dMMxLl" style={{ marginBottom: '16px' }}>Chọn hình thức giao hàng</h3>
                    <div className="eEHLZh">
                        <div className="shipping-method-list">
                            <div><label className="IYkXU">
                                <input type="radio" readOnly="" name="shipping-method" value="1" />
                                <span className="radio-fake"></span>

                                <span className="label">
                                    <div className="hoptpm">
                                        <div className="iSXbdM" style={{ padding: '2px 0px' }}>
                                            <img className="method-logo"
                                                src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                                                alt="delivery-method" width="48" height="14" /><span
                                                    className="method-text"> Giao
                                                Tiết Kiệm</span><span className="freeship-badge"></span>
                                        </div>
                                    </div>
                                </span></label>
                            </div>
                        </div><img className="methods-arrow"
                            src="https://salt.tikicdn.com/ts/upload/05/9e/d8/f13e86df128f19d197397e44924f9616.png"
                            width="32" />
                    </div>
                    
 
                                    {data.map((item,index)=>{
                                        return(
                                            <>
                    <div className="cjoJkw">
                        <div className="fyhLrw">
                            <div className="giCRPo">
                                <div className="package-title"><img width="24" height="24" alt="icon"
                                    src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png" />
                                    Gói {index+1}
                                </div><span className="package-leadTime">Giao hàng 24h</span>
                            </div>
                            
                            
                                        <div className="left-content">
                                            <div className="package-summary">
                                                <div className="iSXbdM"><img className="method-logo"
                                                    src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
                                                    alt="delivery-method" width="48" height="14" /><span className="method-text"
                                                        style={{ fontSize: '12px', lineHeight: '16px' }}>
                                                        Giao Tiết Kiệm</span></div>
                                                <div className="XUTGR"><span className="current-fee"></span></div>
                                            </div>
                                            <div className="package-item-list">
                                                <div>

                                                {item.listProduct.map(subItem=>{ 
                                                
                                                    return(
                                                        <>
                                                        <div className="HEIyE">
                                                        <div className="item-icon">
                                                            <picture className="webpimg-container">
                                                               
                                                                <img src={subItem.productDetailId.productId.thump[0].startsWith('http')?subItem.productDetailId.productId.thump[0]:'http://localhost:3003/'+subItem.productDetailId.productId.thump[0]}

                                                                alt="icon" width="48" height="48" className="fWjUGo" />
                                                                
                                                            </picture>
                                                            
                                                        </div>
                                                        <div className="item-info">
                                                            <div className="item-info__first-line"><span className="item-info__product-name"
                                                                title="">{subItem.productDetailId.productId.productName}</span></div>
                                                            <div className="item-info__second-line">
                                                                <div className="item-info__qty"> SL:x {subItem.quantity}</div>
                                                                <div className="item-info__price">
                                                                {String((subItem.productDetailId.price * subItem.quantity).toLocaleString().split(',').join('.'))}
                                                                     đ</div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        </>
                                                    )
                                                })}
                                                </div>
                                                
                                            </div>
                                            </div>
                                            
                                        
                                            
                    
                                    
                                       
                                        
                                <div className="right-content">

                                <div className="gEhjmR"><svg className="fulfillment-icon" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5V6.75H16.5C16.8442 6.75 17.1441 6.98422 17.2276 7.3181L17.8939 9.98345L20.5854 11.3292C20.8395 11.4562 21 11.7159 21 12V16.5C21 16.9142 20.6642 17.25 20.25 17.25H17.25C17.25 18.9069 15.9069 20.25 14.25 20.25C12.5931 20.25 11.25 18.9069 11.25 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM12.8306 16.7635C12.834 16.7546 12.8372 16.7455 12.8402 16.7364C13.0499 16.1609 13.602 15.75 14.25 15.75C14.898 15.75 15.4501 16.1609 15.6598 16.7364C15.6628 16.7455 15.666 16.7546 15.6694 16.7635C15.7216 16.9161 15.75 17.0797 15.75 17.25C15.75 18.0784 15.0784 18.75 14.25 18.75C13.4216 18.75 12.75 18.0784 12.75 17.25C12.75 17.0797 12.7784 16.9161 12.8306 16.7635ZM16.8487 15.75C16.3299 14.8533 15.3604 14.25 14.25 14.25C13.1396 14.25 12.1701 14.8533 11.6513 15.75H11.25V8.25H15.9144L16.5224 10.6819C16.5755 10.8943 16.7188 11.0729 16.9146 11.1708L19.5 12.4635V15.75H16.8487ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H3.75C3.33579 9 3 8.66421 3 8.25ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V10.5H15C15.4142 10.5 15.75 10.8358 15.75 11.25C15.75 11.6642 15.4142 12 15 12H13.5C13.0858 12 12.75 11.6642 12.75 11.25V9.75C12.75 9.33579 13.0858 9 13.5 9ZM4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12ZM6 15.75C6 15.3358 6.33579 15 6.75 15H7.5C7.91421 15 8.25 15.3358 8.25 15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z"
                                        fill="#38383D"></path>
                                </svg>
                                    <div>
                                        <p className="fulfillment-text">Được giao bởi TikiNOW Smart <br/>
                                         Logistics (giao
                                            từ Hồ Chí Minh)</p>
                                        <p className="fulfillment-text fulfillment-text--warning"></p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    

                                     </>   )
                                                            })
                                                        }

                    </div>        
                    <div className="fttPna">
                        <div className="seller-coupons-heading"><span className="seller-coupons-heading__title">Shop
                            khuyến mãi</span>
                            <div className="seller-coupons-heading__hint"><span>Nhập hoặc chọn mã</span></div><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                className="more" color="#787878" size="24" height="24" width="24"
                                xmlns="http://www.w3.org/2000/svg" style={{ color: " rgb(120, 120, 120)" }}>
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* <div className="other" >
                    <svg class="fulfillment-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5V6.75H16.5C16.8442 6.75 17.1441 6.98422 17.2276 7.3181L17.8939 9.98345L20.5854 11.3292C20.8395 11.4562 21 11.7159 21 12V16.5C21 16.9142 20.6642 17.25 20.25 17.25H17.25C17.25 18.9069 15.9069 20.25 14.25 20.25C12.5931 20.25 11.25 18.9069 11.25 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM12.8306 16.7635C12.834 16.7546 12.8372 16.7455 12.8402 16.7364C13.0499 16.1609 13.602 15.75 14.25 15.75C14.898 15.75 15.4501 16.1609 15.6598 16.7364C15.6628 16.7455 15.666 16.7546 15.6694 16.7635C15.7216 16.9161 15.75 17.0797 15.75 17.25C15.75 18.0784 15.0784 18.75 14.25 18.75C13.4216 18.75 12.75 18.0784 12.75 17.25C12.75 17.0797 12.7784 16.9161 12.8306 16.7635ZM16.8487 15.75C16.3299 14.8533 15.3604 14.25 14.25 14.25C13.1396 14.25 12.1701 14.8533 11.6513 15.75H11.25V8.25H15.9144L16.5224 10.6819C16.5755 10.8943 16.7188 11.0729 16.9146 11.1708L19.5 12.4635V15.75H16.8487ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H3.75C3.33579 9 3 8.66421 3 8.25ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V10.5H15C15.4142 10.5 15.75 10.8358 15.75 11.25C15.75 11.6642 15.4142 12 15 12H13.5C13.0858 12 12.75 11.6642 12.75 11.25V9.75C12.75 9.33579 13.0858 9 13.5 9ZM4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12ZM6 15.75C6 15.3358 6.33579 15 6.75 15H7.5C7.91421 15 8.25 15.3358 8.25 15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z" fill="#38383D"></path></svg>
                    <p className="fulfillment-text">Được giao bởi TikiNOW Smart Logistics (giao
                        từ Hồ Chí Minh)</p>
                    <p className="fulfillment-text fulfillment-text--warning"></p>
                </div> */}
                <div className="bVA-DDf gJkhWZ">

                    <h3 className="dMMxLl" style={{ marginbottom: '16px' }}>Thanh toán bằng
                        Tiki Xu</h3><label className="ioqOoJ"><input type="checkbox" disabled="" /><span
                            className="checkbox-fake"><svg className="checkbox-mark" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M22.0725 5.45132C22.6517 6.04365 22.641 6.99334 22.0487 7.57251L10.7987 18.5725C10.2157 19.1425 9.28427 19.1425 8.70132 18.5725L1.95132 11.9725C1.35899 11.3933 1.34832 10.4437 1.92749 9.85132C2.50666 9.25899 3.45635 9.24832 4.04868 9.82749L9.75 15.4021L19.9513 5.42749C20.5437 4.84832 21.4933 4.85899 22.0725 5.45132Z"
                                        fill="#C4C4CF"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="21" height="21" fill="white" transform="translate(1.5 1.5)"></rect>
                                    </clipPath>
                                </defs>
                            </svg></span><span className="label">
                            <div disabled="" className="fWExhN">Bạn không có
                                đủ<span>Tiki Xu</span><img
                                    src="https://salt.tikicdn.com/ts/upload/e7/5a/ed/b69b599394e0c51f828fd80f317ae945.png"
                                    height="20" width="20" alt="icon" /></div>
                        </span></label>
                    <p className="additional-text">Bạn cần thêm Tiki Xu?<a
                        href="https://tiki.vn/customer/reward?callback=https%3A%2F%2Ftiki.vn%2Fcheckout%2Fpayment%3Ffbclid%3DIwAR0TRlP2jiISqB_JaS6dS5t_PGt87DXKylMYrXAdMLx8hlQ-xHTZaVzqB3U">Giao
                        dịch tại đây</a></p>

                </div>

                <div className="bVA-DDf gOWblv">
                    <h3 className="dMMxLl eqwnfr">Chọn hình thức thanh toán
                    </h3>
                    <div className="kPqUSk">

                        {
                            ListPay.map((value, index) => {
                                return (
                                    <>
                                        <label className="IYkXU">

                                            <input type="radio" readOnly="" name="payment-method"
                                                value="cybersource" /><span className="radio-fake">
                                            </span>
                                            <span className="label">

                                                <div className="jwHxkx">
                                                    <div className="eydcWx">
                                                        <img className="method-icon"
                                                            src={value.img}
                                                            width="32" height="32" alt="icon" />
                                                        <div className="method-content">
                                                            <div className="method-content__title"><span>{value.title}
                                                                JCB</span></div>
                                                            {
                                                                index === ListPay.length - 1 ? (
                                                                    <div
                                                                        className="method-content__sub-title method-content__sub-title--credit_card_list">
                                                                        <div className="eCwGJd">
                                                                            <img width="24" height="24"
                                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-tiki-card.svg"
                                                                                alt="tikicard" />
                                                                            <img width="24" height="24"
                                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-visa.png"
                                                                                alt="visa" />
                                                                            <img width="24" height="24"
                                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-mastercard.svg?v=1"
                                                                                alt="mastercard" />
                                                                            <img width="24" height="24"
                                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-credit-type-jcb.svg"
                                                                                alt="jcb" />
                                                                        </div>
                                                                    </div>
                                                                ) : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </label>
                                    </>
                                )
                            })
                        }
                        <div>


                            <div className="kYPdGi">
                                <div className="hEvCDj">

                                </div>
                                <button className="haMxul" disabled><img alt="add"
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-add.svg"
                                    width="24" height="24" /><span>Thêm thẻ mới</span></button>
                                <div className="kpgKjK">
                                    <div className="block-title">
                                        <img alt="promotion-outline"
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icons-promotion-outline.svg"
                                            width="20" height="20" />Ưu đãi thanh toán thẻ </div>
                                    <div className="banner-list">
                                        {ListCard.map(value => {
                                            return (
                                                <div className="bjLBFT">

                                                    <div className="row">

                                                        <div className="row__title">{value.title}</div>
                                                        <picture className="webpimg-container">
                                                            <source type="image/webp"
                                                                srcSet={value.img} />
                                                            <img className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo row__method-img"
                                                                alt="bank-image"
                                                                src={value.thumb} />
                                                        </picture>
                                                    </div>
                                                    <div className="row">
                                                        <div>
                                                            <div>
                                                                <div className="row__subtitle">{value.subtitle}</div>
                                                            </div>
                                                            <div className="row__warning">{value.warning}</div>

                                                        </div>

                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                viewBox="0 0 24 24" fill="none" className="row__info"
                                                                aria-describedby="popup-9">
                                                                <path
                                                                    d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                                                                    fill="#0d5cb6"></path>
                                                                <path
                                                                    d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                                                                    fill="#0d5cb6"></path>
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                                                                    fill="#0d5cb6"></path>
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}



                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <label className="IYkXU other1">
                                <input type="radio" readOnly="" name="payment-method"
                                    value="pay123" /><span className="radio-fake"></span><span className="label">
                                    <div className="jwHxkx">
                                        <div className="eydcWx"><img className="method-icon"
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-atm.svg"
                                            width="32" height="32" alt="icon" />
                                            <div className="method-content">
                                                <div className="method-content__title"><span>Thẻ ATM nội
                                                    địa/Internet Banking (Hỗ trợ
                                                    Internet Banking)</span></div>
                                                <div
                                                    className="method-content__sub-title method-content__sub-title--normal">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span></label>

                            <div className="hurZXJ">
                                {
                                    listBank.map((value, index) => {
                                        return (
                                            <div className="fycMVa" key={index}>
                                                <picture className="webpimg-container">
                                                    <source type="image/webp"
                                                        srcSet={value.img} />
                                                    <img src={value.thumb}
                                                        alt="Vietinbank" width="80" height="53" className="fWjUGos" />
                                                </picture>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>


            </div>
        
    );
}

export default Main_Left;