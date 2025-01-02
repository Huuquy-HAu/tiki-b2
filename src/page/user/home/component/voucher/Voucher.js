import React from 'react'
import style from './voucher.module.css'

function Voucher() {
  const data = [
    {
        img:'https://salt.tikicdn.com/ts/upload/7b/fc/54/777d24de8eff003bda7a8d5f4294f9a8.gif',
        title:'Mua sắm có lời'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/9c/ca/37/d6e873b1421da32b76654bb274e46683.png.webp',
        title:'Siêu sale 7/7'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png.webp',
        title:'Đi chợ siêu tốc'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png.webp',
        title:'Đóng tiền, nạp thẻ'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/ff/20/4a/0a7c547424f2d976b6012179ed745819.png.webp',
        title:'Mua bán ASA/XU'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png.webp',
        title:'Mã giảm giá'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/ef/ae/82/f40611ad6dfc68a0d26451582a65102f.png.webp',
        title:'Bảo hiểm Tiki360'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/99/29/ff/cea178635fd5a24ad01617cae66c065c.png.webp',
        title:'Giảm đến 50%'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/52/50/73/0788d5207ec8b82e05859dfe953a4327.png.webp',
        title:'Hoàn tiền 15%'
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/upload/4a/b2/c5/b388ee0e511889c83fab1217608fe82f.png.webp',
        title:'Ưu đãi thanh toán'
    },
  ]
  return (
     <div className={style.banner_voucher}>
        <div className={style.banner}>
            <img src='https://thuvienmuasam.com/uploads/default/original/2X/e/ecebb2282f9348e42333185337a9b6514449b54a.jpeg' />
            <img src='https://salt.tikicdn.com/ts/brickv2og/36/a5/71/4a28285eb3a232ae22601efb47d1e7e2.png' />
            <img src='https://cdn.thesaigontimes.vn/wp-content/uploads/2022/01/KV-Tet-2022_h3.jpg' />
        </div>
        <div className={style.voucher} id='Voucher_Shop__Home'>
            {data.map(function(item){
                return(
                    <div className={style.item}>
                        <img src={item.img} />
                        <h5>{item.title}</h5>
                    </div>
                )
            })}
        </div>
     </div>
  )
}

export default Voucher