import React, { useState } from 'react'
import styles from '../../../.././src/page/shop/shopProfile/ShopProfile.module.css'
import 'antd/dist/antd.css';
import { InfoCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'antd';
import { getAPI, patchAPI } from '../../../config/api';
import { updateInfo } from '../../../redux/userSlice';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

function ShopProfile() {
    const data = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [imageObject, setImageObject] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [checkModal, setcheckModal] = useState('');
    const showModal = (e) => {
        setIsModalVisible(true);
        if (e.target.id === 'Changefullname') {
            setcheckModal('Changefullname')
        } else if (e.target.id === 'ChangePhone') {
            setcheckModal('ChangePhone')
        } else if (e.target.id === 'ChangeName') {
            setcheckModal('ChangeName')
        } else if (e.target.id === 'changeImg') {
            setcheckModal('changeImg')
        }
    };
    async function handleOk() {
        if (checkModal === 'Changefullname') {
            const fullname = document.getElementById('fullname').value;
            try {
                const res = await patchAPI('/user/update-user-info/' + data._id, { fullname: fullname })
                const resfullname = await getAPI('/auth/me')
                const action = updateInfo(resfullname.data)
                dispatch(action)
            } catch (err) {
                console.log(err);
            }
            setIsModalVisible(false);

        } else if (checkModal === 'ChangePhone') {
            const NewPhone = document.getElementById('NewPhone').value;
            if (NewPhone % 1 === 0) {
                if (!NewPhone) {
                    window.alert('Vui lòng nhập đủ thông tin')
                } else {
                    try {
                        const res = await patchAPI('/user/update-user-info/' + data._id, { phone: NewPhone });
                        const resPhone = await getAPI('/auth/me')
                        const action = updateInfo(resPhone.data)
                        dispatch(action)
                    } catch (err) {
                        console.log(err);
                    }
                    setIsModalVisible(false);
                }
            } else {
                window.alert('số điện thoại không hợp lệ')
            }
        } else if (checkModal === 'ChangeName') {
            const NewNameShop = document.getElementById('NewNameShop').value;
            if (!NewNameShop) {
                window.alert('Vui lòng nhập đủ thông tin')
            } else {
                try {
                    const res = await patchAPI('/user/update-user-info/' + data._id, { username: NewNameShop });
                    const resUsename = await getAPI('/auth/me')
                    const action = updateInfo(resUsename.data)
                    console.log(124, action)
                    dispatch(action)
                } catch (err) {
                    console.log(err);
                }
                setIsModalVisible(false);
            }
        } else if (checkModal === 'changeImg') {
            console.log('Xử lý thay đổi ảnh');
            try {
                const formData = new FormData();
                formData.append('logo', imageObject)
                console.log(119, imageObject)
                const res = await patchAPI('/shop/change-shop-logo/' + data.shop._id, formData);
                const reslogo = await getAPI('/auth/me')
                const action = updateInfo(reslogo.data)
                console.log(124, action)
                dispatch(action)
                setIsModalVisible(false);
            } catch (error) {
                console.log(error)
            }
        }
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleChange = (info) => {
        console.log('info', info);
        let url = URL.createObjectURL(info.file.originFileObj);
        setImageObject(info.file.originFileObj);
        setImageUrl(url)
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div className={styles.shopProfile_container}>
            <Modal title="Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {
                    checkModal === 'Changefullname' ? <div className={styles.InputsetEmail}>
                        {<input placeholder='Họ và tên' id='fullname'></input>}
                        {/* <input placeholder='Nhập Email cũ' id='OldEmail' className={styles.InputModal}></input>
                            <input placeholder='Nhập Email mới' id='NewEmail'></input>
                            <input placeholder='Nhập lại Email' id='RetypeNewEmail'></input> */}
                    </div> : checkModal === 'ChangePhone' ? <div className={styles.InputsetPhone}>
                        <input placeholder='Nhập số điện thoại mới' id='NewPhone'></input>
                    </div> : checkModal === 'ChangeName' ? <div className={styles.InputsetName}>
                        <input placeholder='Nhập tên hiển thị mới' id='NewNameShop'></input>
                    </div> : <div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </div>
                }
            </Modal>
            <div className={styles.shopProfile_header}>
                <p className={styles.Shop_Profiletext}>
                    <span>Trang chủ</span>
                    <span><RightOutlined /></span>
                    <span>Cài đặt</span>
                    <span><RightOutlined /></span>
                    <span onClick={showModal} >Hồ sơ nhà bán hàng</span>
                </p>
                <h2 >
                    Hồ Sơ Nhà Bán Hàng
                </h2>
            </div>
            <div className={styles.shopProfile}>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '15px 0 8px 0', fontSize: '16px' }}>ID của nhà bán hàng</p>
                    <p className={styles.profileshop_data}>{data._id}</p>
                </div>
                <div className={styles.Profile_Text} >
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }} >Họ Và Tên <InfoCircleOutlined  ></InfoCircleOutlined></p>
                    <span className={styles.spanrofileshop_data} >{data.fullname}</span>
                    <span className={styles.change} id='Changefullname' onClick={showModal} >Sửa đổi</span>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Email liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <p className={styles.email}>{data.email}</p>
                        {/* <span id='ChangeEmail' onClick={showModal} >Sửa đổi</span> */}
                    </div>
                </div>
                <div className={styles.Profile_Text}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Số điện thoại liên hệ <InfoCircleOutlined /></p>
                    <div className={styles.Profile_needchange}>
                        <span className={styles.spanrofileshop_data}>{data.phone}</span>
                        <span className={styles.change} onClick={showModal} id='ChangePhone'> Sửa đổi   </span>
                    </div>
                </div>
                <div className={styles.Profile_Text} style={{ marginBottom: '25px' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Tên hiển thi <InfoCircleOutlined onClick={showModal} /></p>
                    <div className={styles.Profile_needchange}>
                        <span className={styles.spanrofileshop_data}>{data.username}</span>
                        <span className={styles.change} onClick={showModal} id='ChangeName'>Sửa đổi</span>
                    </div>
                </div>
                <div className={styles.Profileshop_Img}>
                    <img src={data.shop.logo.startsWith('http') ? data.shop.logo : 'http://localhost:3003/' + data.shop.logo} onClick={showModal} id='changeImg'></img>
                </div>

            </div>
            <div className={styles.Profileshop_bottom}>
                <button className={styles.change}>Sửa đổi</button>
            </div>



        </div>
    )
}

export default ShopProfile