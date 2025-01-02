import React, { useEffect, useState } from 'react';
import { Data } from './Data';
import { ListAddress } from './ListAddress';

import { Button, Modal, Input, Space } from 'antd';
import { useSelector } from "react-redux";
// import {postAPI} from '../config/api'

import './StyleRight.css'
import 'antd/dist/antd.css';
import { postAPI, getAPI } from '../../../../../config/api';
import ModalAddAdress from './modalAddAdress/Modal';
import { useNavigate } from 'react-router-dom';

function Main_Right({ data, money, cartId }) {
    const nav = useNavigate()
    const [addAllress, setAllAddress] = useState(false)
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        setUserInfo(data)
    }, [data])
    // dữ liệu user trả về theo phiên đăng nhập 
    const user_information = useSelector(function (state) {
        return state.user
    })
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setAllAddress(true)
    };
    // Giữ nguyên địa chỉ cũ.
    const [editInfoOld, setEditInfoOld] = useState(userInfo);
    /////
    const handleEditInfo = (e, type) => {
        switch (type) {
            case 'phone':
                setUserInfo({
                    ...userInfo,
                    phone: e.target.value,
                });
                break;
            case 'address':
                setUserInfo({
                    ...userInfo,
                    address: e.target.value,
                });
                break;
            default:
                setUserInfo({ ...userInfo });
        }
    };

    ////////////////

    function showProduct() {
        if (check) {
            document.querySelector('.HeMLl').setAttribute("style", "display:none")
            setCheck(false)
            document.querySelector('.viewpro').innerHTML = `<span>Xem thông tin</span>`

        }
        else {
            document.querySelector('.HeMLl').setAttribute("style", "display:flex; align-items: center")
            setCheck(true)

            document.querySelector('.viewpro').innerHTML = `<span>Thu gọn</span>`
        }

    }
    const [check, setCheck] = useState(false)

    // hiển thị số lượng sản phẩm
    var count = 0;
    {
        data.map((items) => {
            count = count + items.listProduct.length;
        })

        const [infor, setInfor] = useState([])

        async function temps() {
            try {
                await getAPI('/auth/me')
                    .then((data) => {
                        setInfor(data.data.address)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        useEffect(() => {
            temps();
        }
            , [])
        /////////////////////////////////
        const [defaultAddress, setDefaultAddress] = useState([]);
        async function postOrder() {
            const obj = {
                cartId: cartId,
                phone: infor[0].phone,
                address: infor[0].address
            }
            try {
                await postAPI('/user-order/user-create-order', obj)
                nav('/user/order')

            } catch (error) {
                console.log(error)
            }

        }


        console.log(107, infor)
        /////////////
        const [indexAddress, setIndexAddress] = useState(0)
        useEffect(function () {
            if (infor.length >= 1) {
                setDefaultAddress([infor[indexAddress]])
            }

        }, [indexAddress, infor]);
        // console.log(129,defaultAddress)
        console.log(111, defaultAddress);
        return (

            <div className="right">
                <ModalAddAdress
                    temps={temps}
                    setIndexAddress={setIndexAddress}
                    cartId={cartId}
                    showModal={showModal}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    infor={infor}
                    allAddress={addAllress}
                    setAllAddress={setAllAddress}
                />

                <div className="flcp_container"
                    style=
                    {
                        { backgroundSize: 'cover', borderRadius: '4px' }
                    }>

                    <div className="bVA-DDf cTGPxG">
                        <div className="block-header">
                            <h3 className="block-header__title">Giao tới</h3><a className="block-header__nav"
                                onClick={showModal}>Thay
                                đổi</a>
                        </div>

                        {
                            !defaultAddress[0] ?
                                <p className='warning_add__address'>Vui lòng thêm địa chỉ !</p>
                                : defaultAddress[0] ?
                                    <div >
                                        <div className="customer_info">
                                            <p className="customer_infonp">{defaultAddress[0].name}</p>
                                            <p className="customer_infonp">{defaultAddress[0].phone}</p></div>
                                        <div className="address">{defaultAddress[0].address}</div>
                                    </div> :
                                    <div></div>
                        }
                    </div>

                    <div className="bVA-DDf jMrZxT">
                        <div className="block-header">
                            <div className="block-header__title">Tiki Khuyến Mãi</div>
                            <div className="block-header__usage"><span>Có thể chọn 2</span><svg
                                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" className="info-icon" background="#ffffff" aria-describedby="popup-1">
                                <path
                                    d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
                                    fill="#787878"></path>
                                <path
                                    d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
                                    fill="#787878"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
                                    fill="#787878"></path>
                            </svg></div>
                        </div>
                        <div className="coupon-list" data-view-id="platform_coupon"></div>
                        <div data-view-id="platform_coupon.cart_coupon_view.all" className="show-more"><svg className="coupon-icon"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
                                fill="#0B74E5"></path>
                            <path
                                d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
                                fill="#0B74E5"></path>
                            <path
                                d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
                                fill="#0B74E5"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
                                fill="#0B74E5"></path>
                        </svg><span>Chọn hoặc nhập Khuyến mãi khác</span></div>
                    </div>
                    <div className="bJqXBw" style={{ borderradius: '4px', marginbottom: '12px' }}>


                        <svg className="asa-freeship-icon"
                            width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#ffffff"></circle>
                            <g clipPath="url(#clip0_17203_537963)">
                                <path
                                    d="M11.4017 8.33958H12.9358L10 1L7.06418 8.33958H8.76754C8.97199 8.33958 9.15584 8.2151 9.23177 8.02527L10 6.1047L10.7054 7.86812C10.8193 8.15286 11.0951 8.33958 11.4017 8.33958Z"
                                    fill="url(#paint0_linear_17203_537963)"></path>
                                <path
                                    d="M12.6745 12.7909L10 11.2125L7.3255 12.7909L8.20759 10.5857C8.29842 10.3586 8.21168 10.0992 8.00256 9.97243L6.72163 9.19591L3.5 17.25L10 13.4139L16.5 17.25L13.2784 9.19591L11.9974 9.97243C11.7883 10.0992 11.7016 10.3586 11.7924 10.5857L12.6745 12.7909Z"
                                    fill="url(#paint1_linear_17203_537963)"></path>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF424E"></stop>
                                    <stop offset="1" stopColor="#5E5CE6"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_17203_537963" x1="10" y1="6.5" x2="10" y2="17"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF424E"></stop>
                                    <stop offset="1" stopColor="#5E5CE6"></stop>
                                </linearGradient>
                                <clipPath id="clip0_17203_537963">
                                    <rect width="13" height="16.25" fill="white" transform="translate(3.5 1)">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg>

                        <div className="asa-freeship-content"><span className="asa-freeship-content__title">Astra
                            Freeship</span><span className="asa-freeship-content__sub-title">Dùng Astra để giảm phí
                                vận chuyển</span></div><label className="IvzMw"><input type="checkbox" disabled="" /><span
                                    className="slider round"></span></label>
                    </div>
                    <div className="bVA-DDf cKJPhS">
                        <div className="block-header">
                            <div className="bSkntM" style={{ marginbottom: '4px' }}>
                                <h3 className="block-header__title">Đơn hàng</h3>

                                <a className="block-header__nav"
                                >Thay đổi</a>
                            </div>
                            <div className="block-header__sub-title">
                                <p className="sub-title-text">{count} sản phẩm.</p>
                                <p onClick={showProduct} className="sub-title-link"><span className='viewpro'>Xem thông tin</span><svg className="sub-title-link__arrow" width="20"
                                    height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M9.96967 8.46967C10.2626 8.17678 10.7374 8.17678 11.0303 8.46967L14.0303 11.4697C14.3232 11.7626 14.3232 12.2374 14.0303 12.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303C9.67678 15.2374 9.67678 14.7626 9.96967 14.4697L12.4393 12L9.96967 9.53033C9.67678 9.23744 9.67678 8.76256 9.96967 8.46967Z"
                                        fill="#0B74E5"></path>
                                </svg>
                                </p>
                            </div>
                        </div>
                        <div className="HeMLl">
                            <div className="list-container">
                                {
                                    data.map((item, index) => {

                                        return (

                                            <>
                                                {item.listProduct.map(subItem => {
                                                    console.log(162, typeof String(subItem.productDetailId.price.toLocaleString()));
                                                    return (


                                                        <div class="bSkntM">
                                                            <div class="item-info">
                                                                <div class="item-info__qty">
                                                                    {subItem.quantity} x
                                                                </div>
                                                                <div class="item-info__name">{subItem.productDetailId.productId.productName}</div>
                                                            </div>
                                                            <div class="item-price">{String(subItem.productDetailId.price.toLocaleString())} đ</div>
                                                        </div>


                                                    )
                                                }
                                                )} </>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>

                        <div className="eWlcNY">
                            <div className="bSkntM">
                                <div className="summary-label" >Tạm tính</div>
                                <div className="summary-value">{String(money.toLocaleString())}</div>
                            </div>
                            <div className="bSkntM">
                                <div className="summary-label">Phí vận chuyển</div>
                                <div className="summary-value">18.000đ</div>
                            </div>
                            <div className="bSkntM">
                                <div className="summary-label">Giảm giá</div>
                                <div className="summary-value">18.000đ</div>
                            </div>
                        </div>
                        <div className="jFlDlb" style={{ width: 'calc(100% - 32px)' }}></div>
                        <div className="bSkntM order-total">
                            <div className="order-total__label">Tổng tiền</div>
                            <div className="order-total__value">
                                <div className="order-total__total"> {String(money.toLocaleString())}</div>
                                <div className="order-total__additional-text">(Đã bao gồm VAT nếu có)</div>
                            </div>
                        </div>
                        <div className="bSkntM"><button className="OMovB hHWBHK" onClick={postOrder}>Đặt
                            hàng</button></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main_Right