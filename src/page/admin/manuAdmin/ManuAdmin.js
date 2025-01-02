import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShopIcon from '@mui/icons-material/Shop';
import CategoryIcon from '@mui/icons-material/Category';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Divider, Menu, Switch } from 'antd';
import React, { useState } from 'react';
import styles from './ManuAdmin.module.css'
import clsx from 'clsx';
import './menu.css'
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
{/* <Link to='user'> <AccountCircleIcon/></Link> */}
const items = [
  getItem('Dashboard', '1',<Link to='dashboard'> <DashboardIcon/></Link>),
  getItem('User management', '2',<Link to='user'> <AccountCircleIcon/></Link>),
  getItem('Shop management', 'sub1',<Link to='shop'> <ShopIcon/></Link>),
  getItem('Categories', 'sub2',<Link to='category'> <CategoryIcon/></Link>),
  getItem('Profile','3',<ContactMailIcon/>),
];
function ManuAdmin(props) {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  function fitter(data) {
    props.setData(data)   
  }

  return (
    <div className ={styles.ManuAdmin} >
      <div className ={styles.manuAll_input}>
        <div className={styles.all}>All - UI Admin </div>
        <input className={styles.input} type="text" placeholder='Search' onChange={(e)=>fitter(e.target.value)}></input>
      </div>
      <Menu
        className={clsx(styles.menu,'menu_admin')}
        style={{
          width: 258,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </div>
  )
}
export default ManuAdmin