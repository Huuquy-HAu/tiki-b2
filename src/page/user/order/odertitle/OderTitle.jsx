import React, { useEffect } from 'react'
import styles from '../odertitle/OderTitle.module.css'
import clsx from 'clsx';
function OderTitle(props) {
  function ShowDataTitle(data, Title) {
    props.setstart(0)
    props.setcurrent(1)
    // props.setcount(props.count + 1)
    let Oder_Check = document.querySelectorAll(`.${styles.User_Oder_Title}`);
    const arr = Array.prototype.slice.call(Oder_Check)
    arr.map((value) => {
      return value.classList.remove(`${styles.active}`)
    })
    const element = arr.filter((value) => {
      if (value.innerHTML === Title) {
        return value;
      }
    })

    element[0].classList.add(`${styles.active}`)
    let check = false;
    data.setstatus(data.Title)
    if (data.Title === 'Tất cả đơn') {
      data.setnewListdata(data.newListdata)
      data.setdataInputSeach(data.newListdata)
      check = true;
    } else {
      const newdata = data.newListdata.filter(value => {
        console.log(18, value.status)
        return value.status == data.Title;
      })
      data.setdataInputSeach(newdata)
      if (newdata.length > 0) {
        check = true;
      }
      data.setnewListdata(newdata)
    }
    if (!check) {
      props.setemptyOder('https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png')
      props.setshowPagination(false)
    } else {
      props.setemptyOder('')
      props.setshowPagination(true)
    }
  }

  return (
    <div className={clsx(styles.User_Oder_Title, 'OptionsAll_Oder__history')} onClick={() => { ShowDataTitle(props, props.Title) }}>
      {props.Title}
    </div>
  )
}

export default OderTitle