import React, { useEffect, useState } from "react";

import style from "./style/home.module.css";
import clsx from "clsx";
import Banner from "./component/banner1/Banner";
import Banner2 from "./component/banner2/Banner2";
import HotDeal from "./component/hotdeal/HotDeal";
import Banner3 from "./component/banner3/Banner3";
import Voucher from "./component/voucher/Voucher";
import BannerAdd from "./component/bannerAdd/BannerAdd";
import Brand from "./component/brand/Brand";
import HotItem from "./component/hotItem/HotItem";
import BannerAdd2 from "./component/banneradd2/BannerAdd2";
import SuggestProduct from "./component/suggestProduct/SuggestProduct";
import { getAPI } from "../../../config/api";

function Home() {
  const [listProduct, setListProduct] = useState([]);
  useEffect(function () {
    getAPI("/product/get-all-products")
      .then((data) => {
        setListProduct(() => {
          const newdata = data.data.listProduct;
          return newdata.sort((a, b) => b.sold - a.sold);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className={style.HomePage}>
      <div className={style.container}>
        <div id="Addvetisement_Shop__Home">
          <div className={style.first_slider} id="FirstSlide_Shop__Home">
            <Banner />
            <img
              className={style.image}
              src="https://epz24x4zq6r.exactdn.com/wp-content/uploads/2021/07/Tiki-7.7-9.jpg?strip=all&lossy=1&resize=800%2C645&ssl=1"
            ></img>
          </div>
          <div className={style.second_slider} id="SecondSlide_Shop__Home">
            <div className={style.HotDeal}>
              <HotDeal data = {listProduct}/>
            </div>
            <Banner2 />
          </div>
          <Banner3 />
          <Voucher />
          <BannerAdd />
          <Brand />
          <HotItem />
          <BannerAdd2 />
        </div>
        <SuggestProduct data={listProduct} />
      </div>
    </div>
  );
}

export default Home;
;
