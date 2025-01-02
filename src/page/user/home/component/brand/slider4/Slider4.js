import React from 'react'
import style from './slider4.module.css'

function Slider4() {
    const data=[
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/c1/fa/5e/e6553518f807f25af68c4e8d15cd7392.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/1a/49/a1/a35f407750d8af31788ff8ced96990c5.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/c1/52/3f/9e211c4edaecb6573f7885b9c9165fc2.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/78/fe/68/76140ccdd50a90d332e8ee4b7ee7ba9c.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/9a/fe/88/6ef898b213aaf12c956252eceff0b30d.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/c1/2d/aa/0975b428b3c24cac062aa26d5fbaedd1.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/7e/e6/43/5244b23c622853c21410b224c17fc179.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/94/f2/30/33c67f20120c800cf48b09659c6222a6.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/95/e7/62/7a0df1e3100173a2b0cd7b60260042a6.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/ff/44/a3/53059e6d22a0e9d2a2d2c2d10d8d4482.png.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/03/94/d7/958278bc15dafd9bcc4b4e32266957d0.jpg.webp',
        },
        {
            img:'https://salt.tikicdn.com/cache/w200/ts/banner/fe/d9/ce/c719d17df0f548a719d5e8fbbb486346.png.webp',
        },
        
      ]
  return (
    <div className={style.slider}>
        {data.map(function(item){
            return(
                <img src={item.img} />
            )
        })}
    </div>
  )
}

export default Slider4