import React, { useState } from "react";
import {
  RightOutlined,
  BellFilled,
  EnvironmentFilled,
} from '@ant-design/icons';
import { listIcon } from './listIcon';
import styles from './Profile.module.css';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuUserIcon from './MenuUserIcon.js';
import { Button, Drawer, Radio, Space } from 'antd';
import 'antd/dist/antd.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

function Profile() {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');
  const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div>
      <div className="manuListSmartPhone">
        <Space>
          <Radio.Group value={placement} onChange={onChange}></Radio.Group>
          <MenuIcon type="primary" onClick={showDrawer}></MenuIcon>
        </Space>
        <Drawer
          // title='Basic Drawer'
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <div className={styles.header}>
            <MenuUserIcon
              title2='Trang chủ'
              icon={<RightOutlined />}
              children='Thông tin tài khoản'
            />
          </div>
          <div className={styles.account}>
            <Link to='/user/profile'> <MenuUserIcon icon={listIcon[1]}>
              <div>
                <span>Tài khoản của</span>
                <br />
                <strong>{user.username}</strong>
              </div>
            </MenuUserIcon>
            </Link>
          </div>
          <div className={styles.headerList}>
            <Link to='/user/profile'>
              <MenuUserIcon
                icon={<PersonRoundedIcon />}
                title='Thông tin tài khoản'
              />
            </Link>
            <MenuUserIcon icon={<BellFilled />} title='Thông báo của tôi' />
            <Link to='/user/order'> <MenuUserIcon icon={listIcon[2]} title='Quản lý đơn hàng' /></Link>
            <MenuUserIcon icon={listIcon[3]} title='Quản lý đổi trả' />
            <MenuUserIcon icon={<EnvironmentFilled />} title='Sổ địa chỉ' />
            <MenuUserIcon icon={listIcon[5]} title='Thông tin thanh toán' />
            <MenuUserIcon icon={listIcon[6]} title='Nhận xét sản phẩm đã mua' />
            <MenuUserIcon icon={listIcon[8]} title='Nhận xét của tôi' />
            <MenuUserIcon icon={listIcon[9]} title='Mã giảm giá' />
            <MenuUserIcon icon={listIcon[7]} title='Quản lý Tiki Xu của tôi' />
            <MenuUserIcon icon={listIcon[10]} title='BookCare của tôi' />
          </div>
        </Drawer>
      </div>
      <div className={styles.manuUserContainer}>
        <div className={styles.header}>
          <MenuUserIcon

            title2={<Link to='/'>Trang chủ </Link>}
            icon={<RightOutlined />}
            children='Thông tin tài khoản'
          />
        </div>
        <div className={styles.account}>
          <Link to='/user/profile'> <MenuUserIcon icon={listIcon[1]}>
            <div>
              <span>Tài khoản của</span>
              <br />
              <strong>{user.username}</strong>
            </div>
          </MenuUserIcon></Link>
        </div>

        <div className={styles.headerList}>
          <Link to='/user/profile'><MenuUserIcon
            icon={<PersonRoundedIcon />}
            title='Thông tin tài khoản'
          /></Link>
          <MenuUserIcon icon={<BellFilled />} title='Thông báo của tôi' />
          <Link to='/user/order'> <MenuUserIcon icon={listIcon[2]} title='Quản lý đơn hàng' /></Link>
          <MenuUserIcon icon={listIcon[3]} title='Quản lý đổi trả' />
          <MenuUserIcon icon={<EnvironmentFilled />} title='Sổ địa chỉ' />
          <MenuUserIcon icon={listIcon[5]} title='Thông tin thanh toán' />
          <MenuUserIcon icon={listIcon[6]} title='Nhận xét sản phẩm đã mua' />
          <MenuUserIcon icon={listIcon[8]} title='Nhận xét của tôi' />
          <MenuUserIcon icon={listIcon[9]} title='Mã giảm giá' />
          <MenuUserIcon icon={listIcon[7]} title='Quản lý Tiki Xu của tôi' />
          <MenuUserIcon icon={listIcon[10]} title='BookCare của tôi' />
        </div>
      </div>
    </div >
  )
}

export default Profile;
