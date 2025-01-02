import React from "react";
import { listBranch } from "./listBranch";
import "./createShop.css";
import { useSelector } from "react-redux";
import { postAPI } from "../../../config/api";
import { useNavigate } from "react-router-dom";
function CreateShop() {
  const shop = useSelector((state) => state.user);
  const nav = useNavigate()
  console.log(7, shop);
  async function handleClick() {
    try {
      const shopName = document.querySelector("#ShopName").value;
      const res = await postAPI("/shop/create-shop", { shopName: shopName });
      window.alert('Thông tin đăng ký của bạn đang chờ được xác nhận. Vui lòng chờ thông báo')
      nav("/user")
    } catch (err) {
      window.confirm(err.response.data.message)
      console.log(15, err.response.data.message);
    }
  }
  return (
    <div className="user-createShop">
      <h1>BẠN CẦN ĐƯỢC TƯ VẤN?</h1>
      <div className="user-createShop-container">
        <form action="">
          <div className="user-createShop-input">
            <p>Shop Name</p>
            <input type="text" id="ShopName" placeholder="Shop name" />
          </div>
          <div className="user-createShop-input">
            <p>SĐT liên hệ</p>
            <input type="number" id="Phone" placeholder="Phone" />
          </div>
          <div className="user-createShop-input">
            <p>Email </p>
            <input type="text" id="Email" placeholder="Nhập Email" />
          </div>
          <div className="user-createShop-input" >
            <p>Ngành hàng chủ lực của Anh/Chị?</p>
            <select name="" id="branch" className="user-createShop-select">
              <option value="">Vui lòng chọn</option>
              {listBranch.map((branch, index) => {
                return (
                  <option value="" key={index}>
                    {branch}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="user-createShop-input">
            <p>
              {" "}
              Cửa hàng doanh nghiệp của Anh/Chị đã đăng ký kinh doanh chưa?
            </p>
            <select name="" id="license" className="user-createShop-select">
              <option value="">Vui lòng chọn</option>
              <option value="">Đã đăng ký rồi</option>
              <option value="">Chưa đăng ký</option>
            </select>
          </div>
          <button type="button" onClick={handleClick}>Gửi yêu cầu </button>
        </form>
      </div>
    </div>
  );
}

export default CreateShop;
