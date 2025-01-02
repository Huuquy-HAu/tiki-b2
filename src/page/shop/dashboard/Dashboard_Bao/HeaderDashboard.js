import React from "react";
import { Progress } from "antd";
import style from "./HeaderDashboard.module.css";
import "./HeaderDashboardData";
import "./HeaderDashboard.css";

const HeaderDashboard = ({ HeaderDashboardData }) => {
  return (
    <div>
      <div className={style.headerDashboard}>
        <div className={style.item}>
          <div className={style.itemTitle}>
            <span>NEW SESSIONS</span>
          </div>
          <div className={style.itemDescription}>
            <span>22,500</span>
          </div>
          <div className={style.itemTitleSub}>
            <span>Analytics for last week</span>
          </div>
          <div className={style.analytics}>
            {/* <Progress strokeLinecap="butt" percent={75} /> */}
            <Progress percent={75} />
          </div>
        </div>
        <div className={[style.item, "process"].join(" ")}>
          <div className={style.itemTitle}>
            <span>TIME ON SITE</span>
          </div>
          <div className={style.itemDescription}>
            <span>1,070</span>
          </div>
          <div className={style.itemTitleSub}>
            <span>Analytics for last week</span>
          </div>
          <div className={style.analytics}>
            {/* <Progress strokeLinecap="butt" percent={75} /> */}
            <Progress percent={30} />
          </div>
        </div>
        <div className={[style.item, "process2"].join(" ")}>
          <div>
            <span className={style.itemTitle}>BOUNCE RATE</span>
          </div>
          <div className={style.itemDescription}>
            <span>10K</span>
          </div>
          <div className={style.itemTitleSub}>
            <span>Analytics for last week</span>
          </div>
          <div className={style.analytics}>
            {/* <Progress strokeLinecap="butt" percent={75} /> */}
            <Progress percent={50} />
          </div>
        </div>
        <div className={[style.item, "process3"].join(" ")}>
          <div className={style.itemTitle}>
            <span>GOAL COMPLETIONS</span>
          </div>
          <div className={style.itemDescription}>
            <span>$ 1,220,500</span>
          </div>
          <div className={style.itemTitleSub}>
            <span>Analytics for last week</span>
          </div>
          <div className={style.analytics}>
            {/* <Progress strokeLinecap="butt" percent={75} /> */}
            <Progress percent={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
