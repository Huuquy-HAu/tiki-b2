import React from 'react';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link, useNavigate } from 'react-router-dom'
import { postAPI } from '../../../config/api'
import "./style.css"

function SignUp(props) {
    const nav = useNavigate()

    function checkPhone() {
        const warphone = document.querySelector('#warphone')
        warphone.style.display = 'none'
    }
    function checkMail() {
        const warmail = document.querySelector('#warmail')
        warmail.style.display = 'none'
    }
    function checkPass() {
        const warpass = document.querySelector('#warpass')
        warpass.style.display = 'none'
    }
    function checkPass1() {
        const warpass1 = document.querySelector('#warpass1')
        warpass1.style.display = 'none'
    }
    async function handleSubmit() {
        try {
            const phonenumber = document.querySelector('#phone').value
            const password = document.querySelector('#password').value
            const email = document.querySelector('#email').value
            const password1 = document.querySelector('#password1').value
            const username = email.slice(0, email.indexOf('@'));
            const warphone = document.querySelector('#warphone')
            const warmail = document.querySelector('#warmail')
            const warpass = document.querySelector('#warpass')
            const warpass1 = document.querySelector('#warpass1')
            var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (phonenumber.trim() === '') {
                warphone.innerHTML = 'Vui lòng nhập SĐT'
            }
            else if (!phoneformat.test(phonenumber)) {
                warphone.style.display = 'block'
                warphone.innerHTML = "sđt không hợp lệ";
            }
            else if (email.trim() === '') {
                warmail.innerHTML = "Vui lòng nhập email";
            }
            else if (!mailformat.test(email)) {
                warpass.style.display = 'block'
                warmail.innerHTML = "email không hợp lệ";
            }
            else if (password.trim() === '') {
                warpass.innerHTML = "Vui lòng nhập mật khẩu"
            } else if (password.length < 6) {
                warpass.style.display = 'block'
                warpass.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự"
            } else if (password1.trim() === "" || password !== password1) {
                warpass1.style.display = 'block'
                warpass1.innerHTML = "Mật khẩu không khớp"
            } else {
                var resp = await postAPI('/auth/register', { email, password, phone: phonenumber, username });
                
                nav('/sign-in')
            }
        }
        catch ( error) {
            alert(error.response.data.message)
        }

    }

    const { Option } = Select;



    return (

        <div className='box_container'>
            <div className="menu">
                <div className="menu-left">
                    <div>
                        <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt='tiki-logo' />
                    </div>
                </div>
                <div className="menu-right">
                    <a href="#team">
                        <Select defaultValue="Tiếng Việt" style={{ width: 120 }} >
                            <Option value="jack">Tiếng Việt</Option>
                            <Option value="lucy">Tiếng Anh</Option>
                        </Select>
                    </a>

                </div>
            </div>

            <div className='box'>
                <div className='box_background'>
                </div>
                <div className="container">
                    <div className="title"><h1>Đăng ký</h1></div>
                    <div className="inputGroup">
                        <div>
                            Nhập SĐT
                        </div>
                        <Space direction="vertical">
                           <Input
                                id='phone'
                                className="form-control phoneNumber"
                                placeholder="Nhập SĐT"
                                type='number'
                                name='phonenumber'

                                onChange={checkPhone}
                            />
                            <span className="warning" id='warphone'></span>
                        </Space>
                        <div>
                            Nhập Email
                        </div>

                        <Space direction="vertical">
                            <Input
                                className="form-control email"
                                placeholder="Nhập email"
                                id='email'
                                type='email'
                                name='email'
                                onChange={checkMail}

                            />
                            <span className="warning" id='warmail'></span>
                        </Space>

                        <div className='grid-container'>
                            <div>
                                <p>Nhập mật khẩu</p>
                                <Space direction="vertical">

                                    <Input.Password
                                        id="password"
                                        className="form-control "
                                        placeholder="Nhập mật khẩu"
                                        type='password'
                                        name='password'
                                        onChange={checkPass}
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                    <span className="warning" id='warpass'></span>                         
                                </Space>
                            </div>
                            <div>
                                <p>Nhập mật lại khẩu</p>
                                <Space direction="vertical">
                                    <Input.Password
                                        id="password1"
                                        className="form-control"
                                        placeholder="Nhập lại mật khẩu"
                                        type='password'
                                        name='password2'
                                        onChange={checkPass1}
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                    <span className="warning" id='warpass1'></span>                            
                                </Space>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="textGroup">
                            <p> <a href="">Bạn quên mật khẩu</a></p>

                            <p> <div>Bạn đã có tài khoản?</div>

                                <Link to='/sign-in'><i><a href="">Đăng nhập</a></i></Link>
                            </p>
                        </div>
                    </div>
                    <div className="buttonGroup">

                        <button className="login" onClick={handleSubmit} >Đăng kí</button>

                    </div>
                    <div className="line"></div>
                    <div className="buttonGroup1">
                        <button href="#" className="field facebook">
                            <FacebookOutlinedIcon className=' facebook iconface' />
                            <span>Đăng nhập với Facebook</span>
                        </button>
                    </div>

                    <div className="buttonGroup1">
                        <button href="#" className="field google">
                            <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt="" className="google-img" />
                            <span>Đăng nhập với Google</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignUp;