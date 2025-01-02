import React from 'react'
import ShopDashboard from './dashBoardOrder/ShopDashboard'
import DashBoardAnalysisa from './dashBoardSaleAnalysis/DashBoardAnalysisa'
import DashBoardLeftCommen from './dashBoardLeft/DashBoardLeftCommen'
import styles from './DasdBord.module.css'
function ShopDashBoardAll() {
  return (
    <div className={styles.shopDashBoardAll}>
        <ShopDashboard/>
        <div className={styles.shopDashboardContainer}>
        <DashBoardAnalysisa/>
        <DashBoardLeftCommen/>
        </div>
    </div>
  )
}

export default ShopDashBoardAll