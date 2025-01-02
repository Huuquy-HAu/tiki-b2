import React from "react";
import HeaderDashboard from "./Dashboard_Bao/HeaderDashboard";
import BodyDashboard from "./Dashboard_Bao/BodyDashboard";
import styles from './DasdBord.module.css' 
const ShopDashboard = () => {
  return (
    <div className={styles.ShopDashboard}>
      <HeaderDashboard />
      <BodyDashboard />
    </div>
  );
};

export default ShopDashboard;
