import React, { useEffect, useState } from "react";
import "./Cart.css";
import ClosingCart from "./ClosingCart";
import style from "./TotalCart.module.css";
import { getAPI, patchAPI } from "../../../config/api";
import data from "../profile/UserInfo_data/data";

function TotalCart() {
  const [listProduct, setListProduct] = React.useState([]);
  useEffect(() => {
    getCart();
  }, []);
  const [cartID,setCartID] = useState('')
  async function getCart() {
    try {
      const data = await getAPI("/cart/get-loged-in-cart");
      setCartID(data.data.cart._id)
      const listProductdetail = data.data.cart.listProduct;
      const newData = data.data.cart.product;
      
      const NEWDATA = newData.map((item) => {
        return {
          productDetailId: {  
            _id: item.productId._id,
            productId: item.productId,
            price: item.productId.price,
          },
          quantity: item.quantity,
          selected: item.selected,
          _id: item.productId._id,
        };
      });
      const Newdata = [...NEWDATA, ...listProductdetail]
      const EndData = []
      Newdata.map(item=>{
        if(item.selected==false){
          EndData.push(item) 
        }
      })
      setListProduct(()=>{
        if(EndData&&EndData.length>0){
          return EndData
        }else{
          return []
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(49,listProduct)
  const windowScroll = ()=>{
    if (window.scrollY >= 180&&newData&&newData.length>0) {
      document.querySelector(".total-cart").style.position = "sticky";
      document.querySelector(".total-cart").style.top = "0";
      document.querySelector(".total-cart").style.zIndex = "1";
    } else {
      document.querySelector(".total-cart").style.position = "static";
    }
  }
  useEffect(function(){
    window.addEventListener("scroll", windowScroll);
    return ()=>{
      window.removeEventListener("scroll", windowScroll,false);
    }
  },[])

  const [newData, setNewData] = useState([]);

  useEffect(
    function () {
      if(listProduct&&listProduct.length>0){
        setNewData(() => {
          let Obj = {};
          let DATA = [];
          listProduct.map((item) => {
            const newDATA = listProduct.filter((item2) => {
              return item2.productDetailId.productId.shopId.shopName == item.productDetailId.productId.shopId.shopName;
            });
            if (!Obj[item.productDetailId.productId.shopId.shopName]) {
              const Element = {
                checked: false,
                shopName: item.productDetailId.productId.shopId.shopName,
                listProduct: [...newDATA],
              };
              DATA.push(Element);
            }
            Obj[item.productDetailId.productId.shopId.shopName] = Obj[item.productDetailId.productId.shopId.shopName] ? Obj[item.productDetailId.productId.shopId.shopName] : newDATA;
          });
          return DATA;
        });
      }
    },
    [listProduct]
  );

  const [total, setTotal] = React.useState(0);
  const [finalTotal, setFinalTotal] = useState([]);

  console.log(77, finalTotal);
  useEffect(() => {
    let total = 0;
    finalTotal.map((item) => {
      total += item.quantity * item.productDetailId.price;
    });
    setTotal(total);
  }, [finalTotal]);
  useEffect(() => {
    listProduct.map((item) => {
      item.checked = false;
    });
  }, []);
  useEffect(() => {
    if (finalTotal.length > 0) {
      finalTotal.map((item) => {
        item.selected = true;
      });
    } else {
      listProduct.map((item) => {
        item.selected = false;
      });
    }
  }, [finalTotal]);

  const onRemove = (e, id, index, index1) => {
    console.log(126,id)
    setNewData(() => {
      // const potitions = finalTotal.findIndex((item) => {
      //   return item.productDetailId._id === id;
      // });
      // const Quanlity = newData[index].listProduct[index1].quantity;
      // console.log(77, potitions, Quanlity);
      const newListData1 = [...newData];

      console.log(68, newListData1, index, index1);
      if (newListData1[index].listProduct[index1].quantity >= 2) {
        setFinalTotal(() => {
          const newFinalTotal = [...finalTotal];
          const exits = newFinalTotal.findIndex((Item) => {
            return Item.productDetailId._id === id;
          });
          if (exits >= 0) {
            newFinalTotal[exits].quantity = newData[index].listProduct[index1].quantity;
          }
          return newFinalTotal;
        });
        newListData1[index].listProduct[index1].quantity -= 1;
        return newListData1;
      } else {
        setFinalTotal(() => {
          const newFinalTotal = [...finalTotal];
          const exits = newFinalTotal.findIndex((Item) => {
            return Item.productDetailId._id === id;
          });
          if (exits >= 0) {
            newFinalTotal.splice(exits, 1);
          }
          return newFinalTotal;
        });
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
          if (newListData1[index].listProduct.length > 1) {
            newListData1[index].listProduct.splice(index1, 1);

            if (
              newListData1[index].listProduct.filter((subItem) => {
                return subItem.checked == false;
              }).length == 0
            ) {
              //!Có thể đang sai
              newListData1[index].checked = true;
            }
            return newListData1;
          } else {
            newListData1.splice(index, 1);
            return newListData1;
          }
        } else {
          return newListData1;
        }
      }
    });
  };
  const onAdd = (e, id) => {
    const check = e.target.closest(`.${style.tradingCart}`).querySelector(".checkItem").checked;
    setFinalTotal(() => {
      const newElement = listProduct.filter((item) => {
        return item.productDetailId._id == id;
      });
      const newFinalTotal = [...finalTotal];
      newFinalTotal.map((item) => {
        if (item.productDetailId._id == id) {
          item.quantity = newElement[0].quantity;
        }
      });

      return newFinalTotal;
    });

    const exist = listProduct.findIndex((item) => item.productDetailId._id === id);
    if (exist >= 0) {
      setListProduct(() => {
        const newListData = [...listProduct];
        newListData[exist].quantity += 1;
        return newListData;
      });
    }
  };

  async function  onDelete(id, index, index1){
    console.log(209,id)
    console.log(210,cartID)
    setNewData(() => {
      const newListData = [...newData];
      console.log(134, newListData);
      if (newListData[index].listProduct.length == 1) {
        newListData.splice(index, 1);
        return newListData;
      } else {
        newListData[index].listProduct.splice(index1, 1);
        if (
          newListData[index].listProduct.filter((subItem) => {
            return subItem.checked == false;
          }).length == 0
        ) {
          newListData[index].checked = false;
        }
        return newListData;
      }
    });
        try {
        const data = await getAPI('/product/get-one-product/'+id)
        if(data.data.product){      
           await patchAPI('/cart/remove-from-cart/'+cartID,{productId : id})
        }else {
         await patchAPI('/cart/remove-from-cart/'+cartID,{productDetailId : id})
        }
        }
        catch (e){
          console.log(e)
        }

      }
  const handleCheckItem = (e, index, index1) => {
    if (e.target.checked == true) {
      setFinalTotal(() => {
        const Element = newData[index].listProduct[index1];
        return [...finalTotal, Element];
      });
    } else {
      setFinalTotal(() => {
        const Exits = finalTotal.findIndex((item) => {
          return item.productDetailId._id == newData[index].listProduct[index1].productDetailId._id;
        });
        const newFinalTotal = [...finalTotal];
        newFinalTotal.splice(Exits, 1);
        return newFinalTotal;
      });
    }
    setNewData(() => {
      const newListData = [...newData];
      newListData[index].listProduct[index1].checked = e.target.checked;
      return newListData;
    });
    const ListCheckItem = e.target.closest(`.${style.tradingCart}`).querySelectorAll(".checkItem");
    if (
      [...ListCheckItem].filter((item) => {
        return item.checked == false;
      }).length == 0
    ) {
      setNewData(() => {
        const ListallCheckItem = document.querySelectorAll(".checkItem");
        if (
          [...ListallCheckItem].filter((item) => {
            return item.checked == false;
          }).length == 0
        ) {
          document.querySelector(`.${style.TotalCheckItemStore}`).checked = true;
        }
        const newListData = [...newData];
        newListData[index].checked = true;
        return newListData;
      });
    } else {
      setNewData(() => {
        document.querySelector(`.${style.TotalCheckItemStore}`).checked = false;
        const newListData = [...newData];
        newListData[index].checked = false;
        return newListData;
      });
    }
  };
  const [product, setProduct] = useState([]);
  useEffect(
    function () {
      if(newData.length>0){
        setProduct(() => {
          let total = 0;
          newData.map((item) => {
            total += item.listProduct.length;
          });
          return total;
        });
        const ListallCheckItem = document.querySelectorAll(".checkItem");
        if (
          [...ListallCheckItem].filter((item) => {
            return item.checked == false;
          }).length == 0
        ) {
          document.querySelector(`.${style.TotalCheckItemStore}`).checked = true;
        } else {
          document.querySelector(`.${style.TotalCheckItemStore}`).checked = false;
        }
        setFinalTotal(() => {
          const newListFinalTotal = [];
          const newListCheked = [...ListallCheckItem];
          newListCheked.map((item) => {
            if (item.checked == true) {
              const index = item.getAttribute("index");
              const index1 = item.getAttribute("index1");
              newListFinalTotal.push(newData[index].listProduct[index1]);
            }
          });
          return newListFinalTotal;
        });
      }
      
    },
    [newData]
  );
  console.log(302,newData)
  const handleCheckStore = (e, index) => {
    setNewData(() => {
      const newListData = [...newData];
      newListData[index].checked = !newListData[index].checked;
      newListData[index].listProduct.map((item) => {
        return (item.checked = e.target.checked);
      });
      return newListData;
    });
  };
  const handleTotalCheckItemStore = (e) => {
    if (e.target.checked == true) {
      setNewData(() => {
        const newListData = [...newData];
        newListData.map((item) => {
          item.checked = true;
          item.listProduct.map((subItem) => {
            subItem.checked = true;
          });
        });
        return newListData;
      });
    } else {
      setNewData(() => {
        const newListData = [...newData];
        newListData.map((item) => {
          item.checked = false;
          item.listProduct.map((subItem) => {
            subItem.checked = false;
          });
        });
        return newListData;
      });
    }
  };

  const handleRemoveAllCheckItem = () => {
    setNewData(() => {
      const newListProduct = [...newData];
      finalTotal.map((item) => {
        const index = newListProduct.findIndex((item2) => {
          return item2.shopName === item.productDetailId.productId.shopId.shopName;
        });
        console.log(275, index);

        if (newListProduct[index].listProduct.length == 1) {
          newListProduct.splice(index, 1);
        } else {
          const newIndex = newListProduct[index].listProduct.findIndex((subItem) => {
            return subItem.productDetailId._id == item.productDetailId._id;
          });
          newListProduct[index].listProduct.splice(newIndex, 1);
        }
      });
      return newListProduct;
    });
    setFinalTotal([]);
  };

  return (
    <div className="totalcart-container">
        {newData&&newData.length>0?
      <div className="totalcart-right">
        <div className="total-cart">
          <label>
            <input type="checkbox" onChange={handleTotalCheckItemStore} className={style.TotalCheckItemStore} /> <span className="checkboxStore"></span>{" "}
            <span className={style.text_TotalCheckItemStore}>Tất cả ({product} sản phẩm)</span>
          </label>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span className={style.remove_all} onClick={handleRemoveAllCheckItem}>
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
          </span>
        </div>
        <div className="TradingCart">
          {newData.map((item1, index) => {
            return (
              <div className={style.tradingCart}>
                <div className={style.tradingCart_header}>
                  <input type="checkbox" checked={item1.checked} onChange={(e) => handleCheckStore(e, index)} className={style.storeCart} />
                  <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png" alt="#" className={style.tradingCart_sellers__icon_home}></img>
                  <div className={style.tradingCart_shopName}>
                    {item1.shopName}
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg" alt="seller-link" className={style.sellers__icon_arrow}></img>
                  </div>
                </div>

                {item1.listProduct.map((item, index1) => {
                  return (
                    <div className={style.tradingCart_container}>
                      <div className={style.col_1}>
                        {" "}
                        <input
                          checked={item.checked}
                          type="checkbox"
                          className="checkItem"
                          ItemKey={item.productDetailId._id}
                          index={index}
                          index1={index1}
                          onChange={(e) => handleCheckItem(e, index, index1)}
                        />
                        <div className={style.tradingCart_img}>
                          <img
                            src={
                              item.productDetailId.productId.thump[0].startsWith("http")
                                ? item.productDetailId.productId.thump[0]
                                : "https://tiki.thaihm.site/" + item.productDetailId.productId.thump[0]
                            }
                            alt=""
                          />
                        </div>
                        <div className={style.tradingCart_content}>
                          <a>
                            {" "}
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/tikinow/tiki-now-15@2x.png"
                              alt="tiki-icon"
                              className={style.product__icon__fast}
                              width="64"
                              height="16"
                            ></img>
                            {item.productDetailId.productId.productName}
                          </a>
                        </div>
                      </div>
                      <div className={style.tradingCart_price}>
                        <span>{item.productDetailId.price.toLocaleString()} ₫</span>
                      </div>
                      <div className={style.tradingCart_qty}>
                        <button className={style.decrease} onClick={(e) => onRemove(e, item.productDetailId._id, index, index1)}>
                          -
                        </button>
                        <input type="tel" value={item.quantity} index={item.productDetailId._id} className={style.qty_input} />
                        <button className={style.increase} onClick={(e) => onAdd(e, item.productDetailId._id)}>
                          +
                        </button>
                      </div>
                      <div className={style.tradingCart_finalPrice} index={item.productDetailId._id}>
                        <span>{(item.productDetailId.price * item.quantity).toLocaleString()} ₫</span>
                      </div>
                      <div className={style.tradingCart_delete} onClick={() => onDelete(item.productDetailId._id, index, index1)}>
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
                      </div>
                    </div>
                  );
                })}
                {/* <div>
                  <h1>footer</h1>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
      :<div className="img_cart__empty">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"/>
      </div>}
      <div className="totalcart-left">
        <ClosingCart listProduct={listProduct} total={total} finalTotal={finalTotal} cartID={cartID} />
      </div>
    </div>
  );
}

export default TotalCart;