import React from 'react';
import ProfileManuLeft from './ProfileManuLeft';
import styles from './ProfileLeft.module.css';
import { useSelector } from 'react-redux';

function ProfileList() {
  const user = useSelector((state => state.user))
  return (
    
    <div className= {styles.ProfileList} > 
      <ProfileManuLeft header='Số điện thoại và Email' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png',
          title:'Số điện thoại',
          title1:`${user.phone}`,
          button:'Cập nhật',
          onClick: 'true',
        },
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png',
          title:`${user.email}`,
          title1:'Thêm địa chỉ email',
          button:'Cập nhật',
          onClick:'false',
        },
      ]}/>      
       <ProfileManuLeft  header='Bảo mật' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png',
          title:'Đổi mật khẩu',
          button:'Cập nhật',
          onClick:'Changepass',     
        },
      ]}/>
       <ProfileManuLeft  header='Liên kết mạng xã hội' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png',
          title:'Facebook',
          button:<a href="https://www.facebook.com/tiki.vn/" >Liên kết</a>
        },
      ]}/>
       <ProfileManuLeft  header='Bảo mật' infors={[
        {
          icon:'https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png',
          title:'Google',
          button: <a href='https://www.google.com.vn/'>Liên kết</a>
        },
      ]}/>
    </div>
  );
}

export default ProfileList;
