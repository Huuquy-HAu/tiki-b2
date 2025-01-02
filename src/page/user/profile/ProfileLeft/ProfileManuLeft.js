import React from 'react';
import styles from './ProfileLeft.module.css';
import { Modal,Button } from 'antd';
import { useState } from 'react';
import {patchAPI} from '../../../../config/api'
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from 'react-redux'
import { updateInfo } from '../../../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function ProfileManuLeft(props) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const nav = useNavigate()
  const [phone, setPhone] = useState(true)
  const [password, setPassword] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setPhone(true)
    setPassword(false)
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setPhone(false)
    setPassword(true)
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  async function handleOk () {
    try {
      const phone = document.querySelector('#profileManuleft-phone-input').value;
      const res = await patchAPI('/user/update-user-info/'+user._id, {phone: phone});
      const action = updateInfo(res.data.user);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
    setIsModalVisible(false);
  }
  async function handleOk1 () {
    try {
      const oldPass = document.querySelector('#profileManuleft-password').value;
      const Newpassword = document.querySelector('#profileManuleft-Newpassword').value;
      const RepNewpassword = document.querySelector('#profileManuleft-RepNewpassword').value;
      if(Newpassword !== RepNewpassword) {
        alert('mật khẩu phải trùng nhau');
      }else if(Newpassword === RepNewpassword) {
      await patchAPI('/user/change-password/'+user._id, {oldPass,newPass: Newpassword});
      alert('Cập nhật mật khẩu thành công')
      window.localStorage.removeItem("tiki-user");
      document.cookie = 'tiki-user' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      nav('/sign-in')
      }
    } catch (error) {
      console.log(error);
    }
    setIsModalVisible(false);
  }
  
  return (
    <div className={styles.profileListManuLeft}>
       <>
      <Modal title="cập nhật thông tin" visible={isModalVisible} onOk={handleOk}  onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        phone&&<Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Submit
        </Button>,
        password&&<Button
          onClick={handleOk1}
          type="primary"
        >
          Submit
        </Button>,
      ]}>
        {phone &&  <div><input className={styles.modalInput} id='profileManuleft-phone-input' placeholder='Số điện thoại'/></div>  }
        {password && <div className={styles.modalInputpass}>
          <input id='profileManuleft-password' placeholder='mật khẩu hiện tại'/>
          <input id='profileManuleft-Newpassword' placeholder='mật khẩu mới'/>
          <input id='profileManuleft-RepNewpassword' placeholder='Nhập lại mật khẩu mới'/> 
       </div>}
      </Modal> 
      </>
      <h2>{props.header}</h2>
        {props.infors.map((infor,index) => {
          return(
            <div key={index} className= {styles.profileListManuLeftlisticon}>
             <div className= {styles.profileListManuLeftimg}>
             <img src={infor.icon} />
              <p>
                <span>{infor.title}</span>
                <br />
                <span>{infor.title1}</span>
              </p>
             </div>
              {infor.onClick == 'true' ? <button onClick={()=>{showModal()}}>{infor.button} </button>:infor.onClick=='Changepass'?<button onClick={()=>{showModal1()}}>{infor.button} </button>:<button >{infor.button}</button>}
            </div>
          )
        })}
    </div>
  )
}
export default ProfileManuLeft;
