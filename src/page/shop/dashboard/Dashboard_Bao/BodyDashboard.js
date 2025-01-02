import React from "react";
import { Tabs } from "antd";
import style from "./BodyDashboard.module.css";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import IosShareIcon from "@mui/icons-material/IosShare";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./BodyDashboard.css";
const { TabPane } = Tabs;

const BodyDashboard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className={style.BodyDashboard}>
        <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/d/a/dashboards_by_function_marketing_web_analytics_dashboard_slide01.jpg" className={style.anaylist}/>
    </div>
  );
};

export default BodyDashboard;
