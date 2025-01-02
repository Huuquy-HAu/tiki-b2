import React from 'react'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import styles from './ShopDashBoard.module.css'
function ShopDashboard() {
  return (
    <div className ={styles.ShopDashboard}>
        <div className ={styles.ShopDashboardOrder}>
            <h2>Đơn hàng của tôi</h2>
            <div className ={styles.ShopDashboardOrdermore}>
                <a href=''>
                Thêm
                <span><ArrowForwardIos /></span>
                </a>             
            </div>
        </div>
        <div className={styles.ShopDashboardListMore}>
            <div className ={styles.ShopDashboardList}>
                <h3>3</h3>
                <a href='#'>
                <div className ={styles.ShopDashboardOrdermoreList}>Đơn hàng chờ xử lý
                <span className={styles.Icon}><ArrowForwardIos /></span>
                </div>
                </a>
            </div>
            <div className ={styles.ShopDashboardList}>
                <h3>3</h3>
                <a href=''>
                <div className ={styles.ShopDashboardOrdermoreList}>Đơn chưa thanh toán
                <span className={styles.Icon}><ArrowForwardIos /></span>
                </div>
                </a>
            </div>
            <div className ={styles.ShopDashboardList}>
                <h3>3</h3>
                <a href=''>
                <div className ={styles.ShopDashboardOrdermoreList}>Đơn trả hàng chờ xử lý
                <span className={styles.Icon}><ArrowForwardIos /></span>
                </div>
                </a>
            </div>
            <div className ={styles.ShopDashboardList}>
                <h3>3</h3>
                <a href=''>
                <div className ={styles.ShopDashboardOrdermoreList}>Chờ được đánh giá
                <span className={styles.Icon}><ArrowForwardIos /></span>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ShopDashboard