import React, { useEffect, useState } from "react";
import { listcontact } from "./listdata/listcontact";
import {
  size,
  tich,
  amoutn,
  refund,
  logo,
  action,
  rateshop,
  imgproduct,
} from "./listdata/rate";
import ProductLeft from "./js/ProductLeft";
import "./css/Detail.css";
import "./css/productleft.css";
import "./css/productright.css";
import ProductRight from "./js/ProductRight";
import Productbottom from "./js/Productbottom";
import { Image, message } from "antd";
import { Product } from "./data/test";
import { color } from "@mui/system";
import { useSearchParams } from "react-router-dom";
import { getAPI, patchAPI } from "../../../config/api";
function Detail() {
  const [listImg, setListImg] = useState([]);
  const [check, setCheck] = useState();
  const [myColor, setMycolor] = useState();
  const [mySize, setMySize] = useState();
  const [isDisabled, setIsDisable] = useState(true);
  const [colorDetail, setcolorDetail] = useState({
    color: "",
    name: "",
  });
  const success = () => {
    message.success("Sản phẩm đã được thêm vào giỏ hàng");
  };

  const [sizeDetail, setSizeDetail] = useState(
    Product.product.productDetailId[0].option[1].value
  );
  const [detail, setDetail] = useState(null);
  const [query] = useSearchParams();
  const id = query.get("id");

  const [shopId, setShopId] = useState("");
  //get Data
  useEffect(() => {
    getAPI(`/product/get-one-product/${id}`)
      .then((data) => {
        setDetail(data.data.product);
        setShopId(data.data.product.shopId._id);
        setcolorDetail({ color: data.data.product.thump[0], name: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(56, shopId);
  //get cart id
  const [cartid, setCartid] = useState();
  useEffect(() => {
    getAPI("/cart/get-loged-in-cart")
      .then((data) => {
        setCartid(data.data.cart._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //id-user
  const idUser = JSON.parse(localStorage.getItem("tiki-user"));

  //get productdetailID
  const [option, setOption] = useState({ option1: "", option2: "" });

  //id-cart
  const [iddetail, setIddetail] = useState();
  console.log(iddetail);
  useEffect(() => {
    if (myColor && mySize) {
      for (let i = 0; i < detail.productDetailId.length; i++) {
        if (
          myColor == detail.productDetailId[i].option[0].value &&
          mySize == detail.productDetailId[i].option[1].value
        ) {
          setIddetail(detail.productDetailId[i]._id);
        }
      }
    }
  }, [myColor, mySize]);

  //path-quantity
  console.log();
  const handleBuy = () => {
    let slBuy = document.querySelector("#amoutn-value").innerHTML;
    if (detail.productDetailId.length > 0) {
      patchAPI(`/cart/add-to-cart/${cartid}`, {
        productDetailId: iddetail,
        quantity: slBuy,
      })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      patchAPI(`/cart/add-to-cart/${cartid}`, {
        productId: id,
        quantity: slBuy,
      })
        .then((data) => {
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    let cart =
      document.getElementsByClassName("HeaderCartTitle")[0].innerHTML * 1;
    cart += 1;
    document.getElementsByClassName("HeaderCartTitle")[0].innerHTML = `${cart}`;

    success();
  };
  function AmoutnUp() {
    let soluong = document.getElementById("amoutn-value").innerHTML * 1;
    soluong += 1;
    document.getElementById("amoutn-value").innerHTML = `${soluong}`;
    if (soluong > 1) {
      setIsDisable(false);
    }
  }

  function AmoutnDown() {
    let soluong = document.getElementById("amoutn-value").innerHTML * 1;
    soluong -= 1;
    document.getElementById("amoutn-value").innerHTML = `${soluong}`;
    if (soluong === 1) {
      setIsDisable(true);
    }
  }

  function buyProduct() {
    let cart =
      document.getElementsByClassName("HeaderCartTitle")[0].innerHTML * 1;
    cart += 1;
    document.getElementsByClassName("HeaderCartTitle")[0].innerHTML = `${cart}`;
  }

  const hanldeColor = (color) => {
    const getID = document.getElementById(color);
    const getColor = getID.getElementsByTagName("img")[0].getAttribute("src");
    const getColorName = getID.getElementsByTagName("span")[0].innerHTML;
    document
      .getElementById("main")
      .getElementsByTagName("img")[0]
      .setAttribute("src", getColor);
    //preview
    setcolorDetail({ color: getColor, name: getColorName });
    //imgextend
    detail.productDetailId.map((item) => {
      if (item.option[0].value == color) {
        setListImg(item.listImg);
      }
    });

    const listColor = Array.prototype.slice.call(
      document.querySelectorAll(".option1")
    );

    listColor.map(function (item, index) {
      if (item.id == color) {
        document
          .getElementById(color)
          .getElementsByTagName("img")[1]
          .classList.add("show-select");
        document.getElementById(color).classList.add("show-border");
      } else {
        document
          .getElementById(item.id)
          .getElementsByTagName("img")[1]
          .classList.remove("show-select");
        document.getElementById(item.id).classList.remove("show-border");
      }
    });
    setMycolor(color);
  };

  const hanldeSize = (size) => {
    const getID = document.getElementById(size);
    const getSize = getID.getElementsByTagName("span")[0].innerHTML;
    const selectSize = document.getElementById(size).innerHTML;

    setSizeDetail(getSize);
    const listSize = Array.prototype.slice.call(
      document.querySelectorAll(".option2")
    );

    document.getElementById("size-select").innerHTML = `${selectSize}`;
    listSize.map(function (item, index) {
      if (item.id == size) {
        document
          .getElementById(size)
          .getElementsByTagName("img")[0]
          .classList.add("show-select");
        document.getElementById(size).classList.add("show-border");
      } else {
        document
          .getElementById(item.id)
          .getElementsByTagName("img")[0]
          .classList.remove("show-select");
        document.getElementById(item.id).classList.remove("show-border");
      }
    });
    setMySize(size);
  };
  return (
    <div className="Detai">
      <div className="product-content">
        {detail ? (
          <ProductLeft
            detail={detail}
            listImg={listImg}
            setcolorDetail={setcolorDetail}
            product={Product}
            colorDetail={colorDetail}
            icon={listcontact}
            banner="https://salt.tikicdn.com/cache/w1080/ts/tka/1d/8f/00/d8d6ff67e8c1eed442001b4827297e5f.jpg"
          />
        ) : null}
        {detail ? (
          <ProductRight
            shopId={shopId}
            productDetail={detail}
            check={check}
            setcheck={setCheck}
            brand="https://tiki.vn/thuong-hieu/oem.html"
            colorDetail={colorDetail}
            sizeDetail={sizeDetail}
            bestseller="https://tiki.vn/bestsellers-month/ao-thun-nam-dai-tay/c8336"
            price="39.000đ"
            listprice="78.000đ"
            discount="50%"
            icon="https://salt.tikicdn.com/ts/upload/2e/da/c9/4b9c0150392c753ccb65b2595500e9d6.png"
            imgproduct={imgproduct}
            size={size}
            tich={tich}
            amoutn={amoutn}
            refund={refund}
            logo={logo}
            action={action}
            rateshop={rateshop}
            AmoutnUp={AmoutnUp}
            AmoutnDown={AmoutnDown}
            buyProduct={buyProduct}
            handleBuy={handleBuy}
            isDisabled={isDisabled}
            Product={Product}
            hanldeColor={hanldeColor}
            hanldeSize={hanldeSize}
            myColor={myColor}
            mySize={mySize}
          />
        ) : null}
      </div>
      {/* <Productbottom /> */}
    </div>
  );
}

export default Detail;
