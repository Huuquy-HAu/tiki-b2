import React from 'react'
import style from '../suggesstProduct.module.css'
import clsx from 'clsx'

function Navigation() {
  const data=[
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp',
        title:'Dành cho bạn',
        active:true,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/tikimsp/3d/cc/b6/92908056ddb7e83897fba102bf39c248.png.webp',
        title:'Flash Voucher 300K',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png.webp',
        title:'Đi Chợ Siêu Sale',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp',
        title:'Deal Siêu Hot',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp',
        title:'Rẻ Vô Đối',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp',
        title:'Hàng Mới',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp',
        title:'Xu Hướng Thời Trang',
        active:false,
    },
    {
        img:'https://salt.tikicdn.com/cache/w100/ts/personalish/b9/e1/a9/65ad8ac4e167c5009ae3f7c80395a5a4.png.webp',
        title:'Trending',
        active:false,
    },
  ]

  return (
    <div className={style.Navigation}>
        {
            data.map(function(item1){    
                return(
                    <div className={clsx(style.item,
                        {
                            [style.active]:item1.active
                        }
                        )}>
                        <img src={item1.img} />
                        <h4>{item1.title}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Navigation