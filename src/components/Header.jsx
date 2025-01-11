import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import './Header.css'
// import axios from 'axios'
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { postAPI, getAPI } from '../config/api';
// import  style from'./Header.module.css';
// import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

import { userLogin } from '../redux/userSlice';
import { style } from '@mui/system'
// import { withCookies, Cookies } from 'react-cookie'
import './Header.css'
import logout from './Logout';

function Header(props) {
  const nav = useNavigate()
  const [word, setWord] = useState([]);
  const [search, setSearch] = useState("");
  const [ListCategory, setListCategory] = useState([]);
  const [ListProduct, setListProduct] = useState([]);
  const [checkShop, setCheckShop] = useState(false);
  const [idShop, setidShop] = useState('');
  let setTime;
  const user_information = useSelector(function (state) {
    return state.user
  })
  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  function SearchTitle(input) {
    if (input.trim() != '') {
        document.querySelector(".CoverInputListItems").setAttribute('style', 'display: none;');
        document.querySelector(".HistorySeach").setAttribute('style', 'display: block;');
    } else {
        document.querySelector(".CoverInputListItems").setAttribute('style', 'display: block;');
        document.querySelector(".HistorySeach").setAttribute('style', 'display: none;');
    }

    setSearch(input);
    clearTimeout(setTime);
    setTime = setTimeout(() => {
        getAPI(`/product/find-product-by-name?productName=${input}`)
            .then((data) => {
                let dataSearch = data.data.categories;
                const dataProduct = data.data.product;

                console.log(dataProduct);

                if (dataSearch.length > 0 || dataProduct.length > 0) {
                    // Combine categories and products into setWord
                    const combinedData = [
                        ...dataSearch.slice(0, 4),
                        ...dataProduct.slice(0, 5).map((product) => ({
                            categoryName: product.productName
                        }))
                    ];
                    setWord(combinedData);
                } else {
                    setWord([
                        {
                            categoryName:
                                "không có kết quả nào phù hợp, mời bạn nhập lại !!!",
                        },
                    ]);
                }

                clearTimeout(setTime);
            })
            .catch((err) => {
                console.log(err);
                clearTimeout(setTime);
            });
    }, 0);
}

console.log(word);

  ///
  function seachInputData(categoryName) {
    nav(`/filter?search=${categoryName}`);
  }
  function EnterInputSeach(e) {
    let getInputSearch = document.querySelector(".componentHeaderInput").value;
    clearTimeout(setTime)
    setTime = setTimeout(() => {
      if (e.charCode === 13) {
        if (removeAccents(getInputSearch).trim() !== '') {
          nav(`/filter?search=${getInputSearch}`)
          document.querySelector(".HistorySeach").setAttribute('style', 'display: none;');
        }
      }
      clearTimeout(setTime);
    }, [500])
  }
  function SeachInputDataProduct() {
    let getInputSearch = document.querySelector(".componentHeaderInput").value;
    if (removeAccents(getInputSearch).trim() !== '') {
      nav(`/filter?search=${getInputSearch}`);
      document.querySelector(".HistorySeach").setAttribute('style', 'display: none;');
    }

  }
  function on_mypage() {
    nav("/user/profile");
  }
  function on_myOrder() {
    nav("/user/order");
  }
  function CreateShop_Tiki() {
    nav("/create-shop");
  }
  function Go_FilterCategory(categoryName) {
    nav(`/filter?search=${categoryName}`);
  }
  function Go_ProductDetail(id) {
    nav(`detail?id=${id}`)
  }
  //đăng xuất xóa cookie và local
  function logout() {
    window.localStorage.removeItem("tiki-user");
    document.cookie = 'tiki-user' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    nav("/sign-in");
  }

  const WindowClick = (e) => {
    if (e.target.closest('.componentHeaderInput')) {
      document.querySelector('.ShowCoverInput').setAttribute('style', 'display:block;');
    } else {
      document.querySelector('.ShowCoverInput').setAttribute('style', 'display:none;');
    }
  }
  useEffect(function () {
    window.addEventListener('click', WindowClick)
    return () => {
      window.removeEventListener('click', WindowClick, false);
    }
  }, [])
  ///hiển thị số lượng Sản phâm ở giỏ hàng
  const [numberCart, setNumberCart] = useState(0)
  const [cartId, setCartId] = useState('')
  useEffect(() => {
    getAPI("/cart/get-loged-in-cart")
      .then((data) => {
        setNumberCart(data.data.cart.listProduct.length + data.data.cart.product.length)
        setCartId(data.data.cart._id)
      })
      .catch((err) => {
        console.log(err);
      })
    getAPI('/category/get-all-categories')
      .then(res => {
        const newListCategory = [];
        res.data.listCategories.map(value => {
          newListCategory.push({
            categoryName: value.categoryName,
            thump: value.thump,
            id: value._id,
          });
        })
        setListCategory(newListCategory)
      })
      .catch((err) => { console.log(err); });
    getAPI('/product/get-all-products')
      .then(data => {
        console.log(181, data);
        const newListProduct = data.data.listProduct.map(value => {
          return {
            ProductName: value.productName,
            categoryName: value.categoryId ? value.categoryId.categoryName : "Default Category",
            img: value.thump[0],
            sold: value.sold,
            id: value._id,
          }
        })
        newListProduct.sort((a, b) => {
          return b.sold - a.sold;
        })
        console.log(197, newListProduct)
        setListProduct(newListProduct);
      })
      .catch(err => console.log(err))
    getAPI('/auth/me')
      .then(data => {
        if (data.data.shop && data.data.shop.status == 'accepted') {
          setCheckShop(true)
          setidShop(data.data.shop._id)
        }
      })
      .catch(err => console.log(err))
  }, [])


  const handlegotoCart = () => {
    nav(`/cart`)
  }
  function go_myShop() {
    nav('/adminShop/Dashboard')
  }
  return (
    <div>
      <div className="Header" id='Header_Shop__Home'>
        <div className='HeaderBody'>
          <div className='HeaderTop'>
            <div className="HeaderTopContainer">
              <div className="HeaderTopLeft">
                <Link to='/'>
                  <div className="HeaderTopContainerLogo cursorPoiter" >
                    <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="" />
                  </div>
                </Link>
                <div className="HeaderTopContainerInput">
                  <div className="InputCover">
                    <input type="text" name="" id="" className='componentHeaderInput'
                      onKeyPress={EnterInputSeach}
                      placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...'
                      onChange={(e) => {
                        SearchTitle(e.target.value)
                      }}
                    />
                    <div className="ShowCoverInput" >
                      <div className="HistorySeach"
                        style={search ? { display: "inline-block" } : { display: "none" }}
                      >
                        {
                          word.map((value, index) => {
                            return (
                              <div className="SearchWord" onClick={() => seachInputData(value.categoryName)}>
                                <SearchOutlined className='seach-icon' />
                                <p className='SeachInputDataText'>
                                  {value.categoryName}
                                </p>
                              </div>
                            )

                          })
                        }
                      </div>

                      <div className="CoverInputListItems">
                        <a href="" className='HeaderCoverInput'>
                          <span className='HeaderCoverInputText'>Săn Sale Công Nghệ</span>
                          <img src
                            ="https://salt.tikicdn.com/cache/140x28/ts/banner/ec/32/4e/2227fe4869feaf2a75598c0ab0a8cf29.png"
                            alt="" />
                        </a>
                        <div className="InputCoverItemTop">
                          <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="" width='27px' height='25px' />
                          <p >Tìm Kiếm Phổ Biến</p>
                        </div>
                        <div className="ShowCoverInputListItem">
                          {
                            ListProduct.slice(0, 6).map(value => {
                              return <div className='InputCoverLists' onClick={() => { Go_ProductDetail(value.id) }}>
                                < img src={value.img} alt="" witdth='50px' height='50px' />
                                <p>{value.ProductName.slice(0, 20)}</p>
                              </div>
                            })
                          }
                        </div>

                        <div className="CatogoryAttenion">
                          {ListCategory.slice(0, 8).map(val => {
                            return <div className="CatogoryList" onClick={() => { Go_FilterCategory(val.categoryName) }}>
                              <div className='CatogoryListTitle'>
                                {/* <img src={val.thump} alt="" witdth='64.5px' height='64.5px' /> */}
                                {
                                  <img witdth='64.5px' height='64.5px'
                                    src={
                                      val.thump.startsWith("http")
                                        ? val.thump
                                        : "http://localhost:3003/" + val.thump
                                    }
                                    alt="avatar"
                                  />
                                }
                                <p >{val.categoryName}</p>
                              </div>
                            </div>
                          })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='HeaderbuttonSeach cursorPoiter' onClick={SeachInputDataProduct}>
                    <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className='icon-seach' alt="" />
                    Tìm Kiếm
                  </button>
                </div>
              </div>
              <div className="HeaderTopContainerRight">
                {user_information.username ?

                  (
                    <div className="HeaderTopContainerUser cursorPoiter">
                      {/* //hiển thi avartar */}
                      {/* {console.log(305, user_information)} */}
                      {/* <img src=
                        {user_information.avatar.length > 0 ?
                          user_information.avatar : "https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"}
                        alt="" className='HeaderUserImg' /> */}
                      {
                        <img className='HeaderUserImg'
                          src={
                            user_information.avatar.startsWith("http")
                              ? user_information.avatar
                              : "http://localhost:3003/" + user_information.avatar
                          }
                          alt="avatar"
                        />
                      }
                      <div className="HeaderUserLoginContainer">
                        <span>
                          <div>
                            <span>{user_information.username ? user_information.username : 'hello'}</span>
                            <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="" className='HeaderUserImgdown' />
                          </div>
                        </span>
                      </div>
                      <div className="header_navbar_iteam_mypage_selec">
                        <div
                          className="header_navbar_iteam_mypage_selec-item"
                          onClick={on_myOrder}
                        >
                          Đơn hàng của tôi
                        </div>
                        { }
                        <div
                          className="header_navbar_iteam_mypage_selec-item"
                        >
                          <span> Thông báo của tôi</span>
                        </div>
                        {
                          checkShop ? <div
                            className="header_navbar_iteam_mypage_selec-item"
                            onClick={go_myShop}
                          >
                            Shop của tôi
                          </div> : null
                        }
                        <div
                          className="header_navbar_iteam_mypage_selec-item"
                          onClick={on_mypage}
                        >
                          Tài khoản của tôi
                        </div>
                        <div
                          className="header_navbar_iteam_mypage_selec-item"
                          onClick={logout}
                        >
                          Đăng xuất
                        </div>
                      </div>



                    </div>
                  )
                  : (
                    <div className="HeaderTopContainerUser cursorPoiter">
                      <img src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt="" className='HeaderUserImg' />
                      <div className="HeaderUserLoginContainer">
                        <span className="HeaderUserLogin">
                          <Link to='/sign-in'>  <span >Đăng Nhập</span></Link>


                          / <Link to='/sign-up'><span >Đăng kí</span></Link>
                        </span>
                        <span>
                          <span className="HeaderUserLoginUser">

                            Tài khoản</span>
                          <img src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png" alt="" className='HeaderUserImgdown' />

                        </span>
                      </div>
                    </div>
                  )}

                <div className="HeaderTopContainerCart">
                  <div className="HeaderTopContainerCartWallet cursorPoiter" onClick={handlegotoCart}>
                    <div className="HeaderWalletCart">
                      <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className='HeaderCart' />
                      <span className='HeaderCartTitle'> {numberCart}</span>
                    </div>
                    <span className='HeaderCartText'>Giỏ Hàng</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="HeaderMiddle">
            <a href='' >
              <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height='12' witdth='83' />
            </a>
            <div className="HeaderMiddleListData">

              {
                ListCategory.slice(0, 8).map(val => {
                  return <span onClick={() => { Go_FilterCategory(val.categoryName) }}>
                    {val.categoryName}
                  </span>
                })
              }
            </div>
            <a href="" className='HeaderSeller'>
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
                alt="" />
              <span className="HeaderSellerText" onClick={CreateShop_Tiki}>Bán hàng cùng Tiki</span>
            </a>
          </div>

        </div>

        <div className="HeaderMobie">
          <div className="HeaderMobieTop">
            <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="" height="10px" witdth='12px' />

            <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="" height="15px" witdth='18px' className='HeaderMobieLogo' />



            <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" height="10px" witdth='12px' />


          </div>
          <div className="HeaderMobieMidle">
            <input type="text" name="" id="" placeholder="Bạn tìm gì hôm nay ?" className='HeaderMobieText'
              onChange={(e) => SearchTitle(e.target.value)}
            />
          </div>
          <div className="HeaderMobieBottom">
            <a href="">nhà cửa</a>
            <a href="">điện tử</a>
            <a href="">điện thoại</a>
            <a href="">Mẹ và bé</a>
            <a href="">Làm đẹp</a>
            <a href="">Gia dụng</a>
            <a href="">Thời trang</a>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Header;