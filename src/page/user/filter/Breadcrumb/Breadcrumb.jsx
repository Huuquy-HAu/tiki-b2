import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import styles from './Breadcrumb.module.css'
import { Link } from 'react-router-dom';
const Breadcrumb = () => {
  return (
    <div className={styles.container}>
        <Link to = '/'><div className={styles.link}>Trang chủ</div></Link>
        <RightOutlined style={{fontSize:'0.8rem', color: 'rgb(128, 128, 137)', padding:'0 8px 0 6px'}}/>
        <span className={styles.name}>Làm Đẹp - Sức Khỏe</span>
    </div>
  )
}

export default Breadcrumb