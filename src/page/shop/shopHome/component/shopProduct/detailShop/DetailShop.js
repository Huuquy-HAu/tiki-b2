import React from 'react'
import style from './detailShop.module.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
function DetailShop() {
  return (
    <div className={style.DetailShop}>
        <div className={style.left}>
            <div className={style.rate}>
                <span>
                    Tỉ lệ huỷ
                </span>
                <h3>
                    0 %
                </h3>
            </div>
            <div  className={style.rate}>
                <span>
                    Tỉ lệ đổi trả
                </span>
                <h3>
                    0 %
                </h3>
            </div>
        </div>
        <div className={style.right}>
            <div className={style.infor}>
                <span>
                    <CalendarMonthOutlinedIcon/> Thành viên từ năm
                </span>
                <span>
                    2017
                </span>
            </div>
            <div className={style.infor}>
                <span>
                    <Inventory2OutlinedIcon/> Sản Phẩm
                </span>
                <span>
                    10000+
                </span>
            </div>
            <div className={style.infor}>
                <span>
                    <StorefrontOutlinedIcon/> Mô tả cửa hàng
                </span>
                <span>
                    Mua online sản phẩm của cửa hàng Tiki Trading trên Tiki.vn. ✓ chất lượng cao, uy tín, giá tốt ✓ Chính hãng ✓ Giao hàng toàn quốc
                </span>
            </div>
            <div className={style.infor}>
                <span>
                    <StarBorderOutlinedIcon/> Đánh giá
                </span>
                <span>
                    4.7 / 5 (4.8tr+ đánh giá)
                </span>
            </div>
            <div className={style.infor}>
                <span>
                    <AccountCircleOutlinedIcon/> Người theo dõi
                </span>
                <span>
                    421k+
                </span>
            </div>
            <div className={style.infor}>
                <span>
                    <MmsOutlinedIcon/> Phản hồi Chat
                </span>
                <span>
                    Chưa có
                </span>
            </div>
        </div>
    </div>
  )
}

export default DetailShop