import {
  ShoppingOutlined,
  ProfileOutlined,
  PrinterOutlined,
  IdcardOutlined,
  DeleteOutlined,
  CloudDownloadOutlined,
  BarChartOutlined,
  FolderOpenOutlined,
  FlagOutlined,
  FireOutlined,
  GlobalOutlined,
  PayCircleOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import "./ShopMenu.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const items = [

  getItem("Dasboard", "0", <Link to='Dashboard'>
    <img src="https://media.loveitopcdn.com/3807/logo-tiki-dongphucsongphu-02.png" alt="dasboard" className="logo_admin__shop_img" />
  </Link>),
  getItem("Quản lý sản phẩm", "1", <Link to='Product'> <ShoppingOutlined /></Link>),
  getItem("Quản lý đơn hàng", "2", <Link to='Order'> <PrinterOutlined /></Link>),
  getItem("Quản lý hồ sơ Shop", "3", <Link to='Profile'> <IdcardOutlined /></Link>),

  getItem("Chức năng tạm khoá", "5", <GlobalOutlined />),
  getItem("Chức năng tạm khoá", "6", <FireOutlined />),
  getItem("Chức năng tạm khoá", "7", <FlagOutlined />),
  getItem("Chức năng tạm khoá", "8", <FolderOpenOutlined />),
  getItem("Chức năng tạm khoá", "9", <CloudDownloadOutlined />),
  getItem("Chức năng tạm khoá", "10", <BarChartOutlined />),
  getItem("Chức năng tạm khoá", "11", <PayCircleOutlined />),
  getItem("Chức năng tạm khoá", "12", <DeleteOutlined />),
];

function ShopMenu() {
  const [collapsed, setCollapsed] = useState(true);


  return (
    <div className="db-Product">
      <div className="db-Product-left">

        <Menu
          defaultSelectedKeys={["0"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          className="Menu_shop__admin"
        />
      </div>
      <div className="db-Product-right">
        <Outlet />
      </div>
    </div>
  );
}

export default ShopMenu;
