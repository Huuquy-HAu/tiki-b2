import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './contentPoint.module.css'

function ContentPoint() {
  return (
    <div className={style.ContentPoint}>
        <p className={style.des}>
            <span>Điểm nội dung</span>
            <ArrowDropDownIcon/>
        </p>
        <p className={style.point}>
            Xuất Sắc
        </p>
    </div>
  )
}

export default ContentPoint