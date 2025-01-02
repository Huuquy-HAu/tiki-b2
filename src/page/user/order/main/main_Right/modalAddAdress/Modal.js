import React, { useEffect, useState } from 'react'

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space,Radio,Input } from 'antd';

import 'antd/dist/antd.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import style from './modal.module.css'
import './modal.css'
import { patchAPI } from '../../../../../../config/api';
import { useSelector } from 'react-redux';
function ModalAddAdress({infor,showModal,setIsModalVisible,isModalVisible,allAddress,setAllAddress,setIndexAddress,cartId, temps}) {
    const [value, setValue] = useState(0);
    const user = useSelector((state => state.user))
    console.log(17, user)
 ///tạo cảnh báo ở ô textfiled
    const [textInput, setTextInput] = useState('');
   
    const handleTextInputChange = event => {
        setTextInput(event.target.value);
        const  waraddress = document.querySelector('#waraddress')
        waraddress.style.display = 'none'
    };
    const [changeAddress,setChangeAddress] = useState(false)
    
///////////////////////////
  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
    setIndexAddress(e.target.value)
  };
  //lấy dữ liệu in ra màn hình
    const [addressList,setAddressList] = useState([])
    useEffect(function(){
        if(infor){
            setAddressList(infor)
        }
    },[infor.length,infor])
    // console.log(addressList,infor)
    //nút submit
    const handleOk = () => {
        setChangeAddress(false)
        setAllAddress(false)
        setIsModalVisible(false);
    };
    ////////////////nút cancel
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleCancel1 = () => {
        setAllAddress(true)
    };
    const handleCancel2 = () => {
        setChangeAddress(false)
        setAllAddress(true) 
    };
    ///modal thêm địa chỉ
    
    // const [visible1, setVisible1] = useState(false);
   
    const handleAddAddress = ()=>{
        setAllAddress(false)
    }
    const handleAddAddress1 = ()=>{
       
        setChangeAddress(true)
        setAllAddress(false)
    }

    // const [value1, setValue1] = useState('Controlled');

//   const handleChange = (event) => {
//     setValue1(event.target.value);
//   };
    ///////////////////function check tên
    function checkPhone() {
        const warphones = document.querySelector('#warphones')
        warphones.style.display = 'none'
    }
    function checkName() {
        const warname = document.querySelector('#warname')
        warname.style.display = 'none'
    }
    const handleOk1 =  async(id) => {
    try{
            const phonenumbers = document.querySelector('#phones').value
        const usernames = document.querySelector('#names').value
        const address=document.querySelector('#outlined-multiline-static')
        const warphones = document.querySelector('#warphones')
        const warname = document.querySelector('#warname')
        const waraddress = document.querySelector('#waraddress')

       
       if (usernames.trim() === '') {
        warname.style.display = 'block'
        warname.innerText = "Vui lòng nhập tên";
    }
   
        var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (phonenumbers.trim() === '') {
           
            warphones.innerText = 'Vui lòng nhập SĐT'
        }
        else if (!phoneformat.test(phonenumbers)) {
            warphones.style.display = 'block'
            warphones.innerText = "sđt không hợp lệ";
        }
       
        if (textInput.trim() === '') {
            waraddress.style.display = 'block'
            waraddress.innerText = "Vui lòng nhập địa chỉ";
        }
        // console.log(102,usernames , phonenumbers , textInput)
        if(usernames && phonenumbers && textInput){
            var resp = await patchAPI(`/user/update-user-info/`+user._id, {address:{
                name:usernames,
                phone:phonenumbers,
                address:textInput

            }})
            //   console.log(104, resp)
             setAllAddress(resp.data.user.address)
             temps()
        }
        }
        catch ( error) {
            console.log(110,error)
           
        }     
    };
    // handok2
    const handleOk2 =  async(id) => {
        try{
            const phonenumbers = document.querySelector('#phones').value
            const usernames = document.querySelector('#names').value
            const address=document.querySelector('#outlined-multiline-static')
            const warphones = document.querySelector('#warphones')
            const warname = document.querySelector('#warname')
            const waraddress = document.querySelector('#waraddress')
    
           console.log(69, textInput)
           
           if (usernames.trim() === '') {
            warname.style.display = 'block'
            warname.innerText = "Vui lòng nhập tên";
        }
       
            var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (phonenumbers.trim() === '') {
               
                warphones.innerText = 'Vui lòng nhập SĐT'
            }
            else if (!phoneformat.test(phonenumbers)) {
                warphones.style.display = 'block'
                warphones.innerText = "sđt không hợp lệ";
            }
           
            if (textInput.trim() === '') {
                waraddress.style.display = 'block'
                waraddress.innerText = "Vui lòng nhập địa chỉ";
            }
            console.log(102,usernames , phonenumbers , textInput)
            if(usernames && phonenumbers && textInput){
                var resp = await patchAPI(`/user/update-user-info/`+user._id , {address:{
                    name:usernames,
                    phone:phonenumbers,
                    address:textInput
    
                }})
                  console.log(104, resp)
                 setAllAddress(resp.data.user.address)
                 setIsModalVisible(false);
            }
            }
            catch ( error) {
                console.log(110,error)
               
            }
         
    
           
        };
   

  
  return (
    
    <div>
          
        

        <Modal 
            title={allAddress==false&&changeAddress==false?'Địa chỉ giao hàng':allAddress==true&&changeAddress==false?'Thêm địa chỉ':'Cập nhật địa chỉ'} 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer={[
                (allAddress&&!changeAddress)&&
                <Button key="back" onClick={handleCancel}>
                  Cancel1
                </Button>,

                 !allAddress&&!changeAddress&&
                <Button key="back" onClick={handleCancel1}>
                Cancel2
              </Button>,
              changeAddress&&
              <Button key="back" onClick={handleCancel2}>
              Cancel3
            </Button>,

                allAddress&&!changeAddress&&
                <Button key="submit" type="primary" onClick={handleOk}>
                  Submit1
                </Button>,

                 !allAddress&&!changeAddress&&
                <Button key="submit" type="primary" onClick={handleOk1}>
                  Submit2
                </Button>,
                changeAddress&&
                <Button key="submit" type="primary" onClick={handleOk2}>
                  Submit3
                </Button>
              ]}
            >
            <div className={style.allAdredd}>
                {
                    allAddress&&!changeAddress?
                    <Radio.Group onChange={onChange} value=
                    {value}>
                    <Space direction="vertical">    
                        {
                        //     <div >
                        //     <div className="customer_info">
                        //         <p className="customer_infonp">{infor[0].name}</p>
                        //         <p className="customer_infonp">{infor[0].phone}</p></div>
                        //     <div className="address">{infor[0].address}</div>                
                        // </div>
                            addressList.map((item,index)=>{
                                return (
                                         <Radio value={index}>
                                            <div>
                                        <div className='customer_infor'>
                                            <div>
                                                <span className="customer_infonp">{item.name}</span>
                                                <span className="customer_infonp">{item.phone}</span>
                                            </div>
                                            <div>
                                                <button onClick={handleAddAddress1}>Cập nhật</button>
                                            </div>
                                               
                                        </div>
                                        <span className='itemad'>
                                        
                                             {item.address}
                                        </span>
                                    </div>
                                    </Radio>
                                                 
                                )
                            })
                        }
                    </Space>
                </Radio.Group>:
                <div className='UpdateAddress'> 
                    
                        <div className='form-info'>
                                <div>
                                    <Space direction="vertical">

                                    <Input
                                        
                                        placeholder="Họ và tên"
                                        id='names'
                                        name='usernames'
                                        onChange={checkName}
                                        
                                    />
                                    </Space>
                                    <span className="warning1" id='warname'></span>
                                </div>
                                <div>
                                        <Space direction="vertical">

                                        <Input
                                        
                                            placeholder="Số điện thoại"
                                            id='phones'
                                            name='phonenumbers'
                                            onChange={checkPhone}

                                        />
                                        </Space>
                                        <span className="warning1" id='warphones'></span>
                                </div>
                        
                        </div>

                        
                        <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    
                    
                    <div >
                    
                    <TextField 
                        id="outlined-multiline-static abc"
                        label="Nhập địa chỉ"
                        multiline
                        rows={4}
                        className="textaddress"
                        name='address'
                        value= {textInput}
                        onChange= {handleTextInputChange}
                        
                        />
                    </div>
                    <span className="warning1" id='waraddress'></span>
                    </Box>
                </div>
                }
            </div>  
            {
                allAddress&&!changeAddress&&<div className={style.AddAdress_btn} onClick={handleAddAddress}>
                + Thêm địa chỉ       
           </div>  
            }              
        </Modal>

               
    </div>
  )
}

export default ModalAddAdress