import React from 'react'
import styles from './DashBoardLeftCommen.module.css'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
function DashBoardLeftCommen() {
  return (
    <div className={styles.DashBoardLeftCommen}>
      <div className={styles.DashboardLeftCommenHeader}>
        <h1>Xuất sắc</h1>
        <div>
          <a href="#"><ArrowForwardIos/></a>
        </div>
      </div> 
      <div className={styles.DashboardHeader}>Bạn đang vận hành rất tốt</div>
      <div className={styles.Notifications}>
        <di>
            <NotificationsIcon/>
        </di>
        <p>Hãy tuân thủ chính sách đặt tên gian hàng. tên gian hàng sử dụng thương hiệu 
          đã được đăng ký sẽ bị hệ thống đặt lại theo định dạng mặc định</p>   
      </div>   
      <div className={styles.a}>
        <a href='#'>Chính sách nhà bán hàng</a>
      </div>
      <hr/>
      <br/>
      <div className={styles.status}>
        <div className={styles.point}>Điểm vi phạm</div>
        <div className={styles.point}>Trạng thái</div>
      </div>
      <div className={styles.status}>
        <div className={styles.violation}>0</div>
        <div className={styles.good}>Tốt</div>
      </div>
      <div className={styles.status}>
        <div className={styles.point}>Chỉ số</div>
        <div className={styles.point}>Trạng thái</div>
      </div>
      <div className={styles.status}>
        <div className={styles.category}>Tỉ lệ hủy</div>
        <div className={styles.good}>Tốt</div>
      </div>
      <div className={styles.status}>
        <div className={styles.category}>Đơn hàng chưa sẵn sàng</div>
        <div className={styles.good}>Tốt</div>
      </div>
      <div className={styles.status}>
        <div className={styles.category}>Giao hàng đúng thời hạn</div>
        <div className={styles.good}>Tốt</div>
      </div>
    </div>
  )
}

export default DashBoardLeftCommen