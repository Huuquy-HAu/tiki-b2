import React, { useEffect, useState } from 'react'
import ShopList from './shoplist/ShopList'
import style from './Shopmanagement.module.css'
import clsx from 'clsx';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { getAPI } from '../../../config/api';
function SetActiveButton(status) {
  let active = document.querySelectorAll(`.${style.Header_ButtonActive}`)
  const arr = Array.prototype.slice.call(active)
  arr.map((value) => {
    return value.classList.remove(`${style.ShopActive}`)
  })
  const element = arr.filter((value) => {
    if (value.innerHTML === status) {
      return value;
    }
  })
  if (element[0]) {
    element[0].classList.add(`${style.ShopActive}`)
  }
}
function Shop() {
  const [ShopListdata, setShopListdata] = useState([])
  const [Shopstatus, setShopstatus] = useState('')
  const [newListdata, setnewListdata] = useState([])
  const [start, setstart] = useState(0)
  const [current, setcurrent] = useState(1)
  const [count, setCount] = useState(0)
  useEffect(() => {
    getAllShop()
  }, [count])
  async function getAllShop() {
    try {
      const data = await getAPI('/shop/get-all-shop');
      setShopListdata(() => {
        const newdata = [];
        data.data.listShop.map((value, index) => {
          newdata.push({
            name: `${value.shopName}`,
            timestart: `${value.createdAt}`.slice(0, 10),
            Shopid: `${value._id}`,
            avatar: `${value.logo}`,
            status: `${value.status}`
          })
        })
        setnewListdata(newdata)
        return newdata
      })

    } catch (error) {
      console.log(error)
    }
  }

  const ListShopActive = () => {
    setShopstatus('accepted')
    SetActiveButton('Đang Hoạt Động')
    setstart(0)
    setcurrent(1)
    setnewListdata(ShopListdata.filter((value) => {
      return value.status === 'accepted'
    }))
  }
  const ListShopPending = () => {
    setShopstatus('pending')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Chờ Kích Hoạt')
    setnewListdata(ShopListdata.filter((value) => {
      return value.status === 'pending'
    }))
  }
  const ListShopBlock = () => {
    setShopstatus('rejected')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Tạm Khóa')
    setnewListdata(ShopListdata.filter((value) => {
      return value.status === 'rejected'
    }))
  }
  const ListShopDelete = () => {
    setShopstatus('closed')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Đã Đóng')
    setnewListdata(ShopListdata.filter((value) => {
      return value.status === 'closed'
    }))
  }
  const ListShop = () => {
    setShopstatus('')
    setstart(0)
    setcurrent(1)
    SetActiveButton('ok')
    setnewListdata(ShopListdata)
  }
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }

    if (type === 'next') {
      return <a>Next</a>;
    }

    return originalElement;
  };
  function onChangePagination(page, pageSize) {
    setstart(pageSize * (page - 1));
    setcurrent(page)
  }
  return (
    <div className={style.Shop}>
      <div className={style.ShopManage}>
        <div className={style.ShopManageHeader}>
          <div className={style.HeaderLeft}>
            <h3 onClick={ListShop}>LIST SHOP</h3>
          </div>
          <div className={style.HeaderRight}>
            <button onClick={ListShopActive} className={clsx(style.Header_ButtonActive)}  >Đang Hoạt Động</button>
            <button onClick={ListShopPending} className={clsx(style.Header_ButtonActive)}  >Chờ Kích Hoạt</button>
            <button onClick={ListShopBlock} className={clsx(style.Header_ButtonActive)} >Tạm Khóa</button>
            <button onClick={ListShopDelete} className={clsx(style.Header_ButtonActive)} >Đã Đóng</button>
          </div>
        </div>
        <div className={style.Shoplist}>
          <ShopList count={count} setCount={setCount} newListdata={newListdata} Shopstatus={Shopstatus} ShopListdata={ShopListdata} setnewListdata={setnewListdata} setShopstatus={setShopstatus} start={start}> </ShopList>
        </div>
        <div className={style.Pagination}>
          <Pagination itemRender={itemRender} defaultCurrent={1} current={current} total={newListdata.length} onChange={onChangePagination} defaultPageSize={5} />
        </div>
      </div>
    </div>
  )
}
export default Shop