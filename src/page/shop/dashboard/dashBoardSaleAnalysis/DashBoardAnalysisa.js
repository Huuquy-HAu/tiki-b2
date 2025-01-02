import React from 'react'
import styles from './shopDasBoardAnalysis.module.css'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Checkbox } from 'antd';
function DashBoardAnalysisa() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={styles.shopDasBoardAnalysis}>
      <div className={styles.shopDasBoardAnalysisHeader}>
        <h1>Phân tích bán hàng</h1>
        <a href=''>Cập nhật gần nhất <span className = {styles.ArrowForwardIos}><ArrowForwardIos /></span> </a>
      </div>
      <div class={styles.date}>Cập nhật GMT+7 10:30:50</div>
      <div class={styles.titalmoney}>
        <div>
        <p className ={styles.money}><span>đ</span>680.500</p>
        <span className ={[styles.turnover, styles.active].join(' ')}>Doanh thu</span>
        <p className ={styles.yesterday}>So với hôm qua <span>-84.5%</span></p>
        </div>
        <div>
        <p className ={styles.money}>173</p>
        <span className = {styles.turnover}>Khách truy cập</span>
        </div>
        <div>
        <p className ={styles.money}>1.73%</p>
        <span className ={styles.turnover}>Tỷ lệ chuyển đổi</span>
        </div>
      </div>
      <div className ={styles.trent}>
        <div>Xu hướng doanh thu</div>
        <div>
        <Checkbox onChange={onChange}>Hôm nay</Checkbox>
        <Checkbox onChange={onChange}>Hôm qua</Checkbox>
        </div>  
      </div>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  )
}

export default DashBoardAnalysisa