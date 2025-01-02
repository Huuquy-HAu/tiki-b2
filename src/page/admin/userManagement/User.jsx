import React, { useEffect, useState } from 'react'
import UserList from '.././userManagement/userlist/UserList'
import style from '../userManagement/UserManagement.module.css'
import clsx from 'clsx';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { getAPI } from '../../../config/api';
const ListUserdata = [];
function SetActiveButton(status) {
  let active = document.querySelectorAll(`.${style.Header_ButtonActive}`)
  const arr = Array.prototype.slice.call(active)
  arr.map((value) => {
    return value.classList.remove(`${style.UserActive}`)
  })
  const element = arr.filter((value) => {
    if (value.innerHTML === status) {
      return value;
    }
  })
  if (element[0]) {
    element[0].classList.add(`${style.UserActive}`)
  }
}
function User() {
  const [UserListdata, setUserListdata] = useState([])
  const [count, setCount] = useState(0)
  const [Userstatus, setUserstatus] = useState('')
  const [newListdata, setnewListdata] = useState([])
  const [start, setstart] = useState(0)
  const [current, setcurrent] = useState(1)
  useEffect(() => {
    getAllShop()
  }, [count])

  async function getAllShop() {
    try {
      const data = await getAPI('/user/get-all-user');
      setUserListdata(() => {
        const newdata = [];
        data.data.listUser.map((value, index) => {
          newdata.push({
            name: `${value.username}`,
            timestart: `${value.createdAt.slice(0, 10)}`,
            Userid: `${value._id}`,
            avatar: `${value.avatar}`,
            status: `${value.active}`
          })
        })
        setnewListdata(newdata)
        return newdata
      })

    } catch (error) {
      console.log(error)
    }
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
  const ListUserActive = () => {
    setUserstatus('true')
    SetActiveButton('Đang Hoạt Động')
    setstart(0)
    setcurrent(1)
    setnewListdata(UserListdata.filter((value) => {
      return value.status === 'true'
    }))
  }
  const ListUserBlock = () => {
    setUserstatus('false')
    setstart(0)
    setcurrent(1)
    SetActiveButton('Đã Khóa')
    setnewListdata(UserListdata.filter((value) => {
      return value.status === 'false'
    }))
  }
  const ListUser = () => {
    setUserstatus('')
    setstart(0)
    setcurrent(1)
    SetActiveButton('ok')
    setnewListdata(UserListdata)
  }
  function onChangePagination(page, pageSize) {
    setcurrent(page)
    setstart(pageSize * (page - 1));
  }
  return (
    <div className={style.User}>
      <div className={style.UserManage}>
        <div className={style.UserManageHeader}>
          <div className={style.HeaderLeft}>
            <h3 onClick={ListUser}>LIST USER</h3>
          </div>
          <div className={style.HeaderRight}>
            <button onClick={ListUserActive} className={clsx(style.Header_ButtonActive)}  >Đang Hoạt Động</button>
            <button onClick={ListUserBlock} className={clsx(style.Header_ButtonActive)} >Đã Khóa</button>
          </div>
        </div>
        <div className={style.Userlist}>
          <UserList count={count} setCount={setCount} newListdata={newListdata} Userstatus={Userstatus} UserListdata={UserListdata} setnewListdata={setnewListdata} setUserstatus={setUserstatus} start={start}> </UserList>
        </div>
        <div className={style.Pagination}>
          <Pagination itemRender={itemRender} defaultCurrent={1} current={current} total={newListdata.length} onChange={onChangePagination} defaultPageSize={5} />
        </div>
      </div>
    </div>
  )
}

export default User