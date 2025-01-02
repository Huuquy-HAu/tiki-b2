import React from 'react'
import ContentPoint from './contentPoint/ContentPoint'
import Rate from './rate/Rate'
import style from './rightAddItem.module.css'

function RightAddItem() {
  return (
    <div className={style.RightAddItems}>
        <ContentPoint/>
        <Rate/>
        <div className={style.tips}>
            <h2>Tips</h2>
            <p>
                Vui lòng tải lên hình ảnh, cung cấp tên và chọn đúng ngành hàng để có thể đăng bán sản phẩm.
            </p>
        </div>
    </div>
  )
}

export default RightAddItem