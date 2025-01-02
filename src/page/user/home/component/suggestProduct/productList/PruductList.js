import React, { useEffect,useState } from 'react'
import 'antd/dist/antd.css';
import style from '../suggesstProduct.module.css'
import clsx from 'clsx'
import { Rate } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
function PruductList({listProduct}) {
  const [data,setDatas] = useState([])
  const [pageSize,setPageSize] = useState(18)
  
  useEffect(function(){
    setDatas(()=>{
        const data1 = listProduct.slice(0,pageSize)
        return data1
    })
  },[pageSize,listProduct])
  const handleClick = ()=>{
    if(pageSize < listProduct.length){
        setPageSize(pageSize => (pageSize +18))
    }
  }
  const nav = useNavigate()
  const handleToDetailITem=(id)=>{
    nav(`/detail?id=${id}`)
  }
  
  return (  
    <div className={style.PruductList}>
         {
            data.map(function(item){
                let linkImg = item.thump
                if(linkImg.length > 0){
                    const newLink = linkImg[0]
                    if(newLink.startsWith('https')){
                        linkImg = newLink
                    }else{
                        linkImg = `http://localhost:3003/${newLink}`
                    }
                  }else{
                    linkImg = 'https://roofequipmentllc.com/wp-content/uploads/2019/01/noimage.png'
                  }
                return(
                    <div className={style.Card} key={item._id} onClick={()=>handleToDetailITem(item._id)}>
                        <img src={linkImg} />
                        <div className={style.content}>
                            <div className={style.info}>
                                <h3>
                                    {item.productName}
                                </h3>
                                <div className={style.rate}>
                                    <Rate disabled allowHalf defaultValue={5} />
                                    <span>  | Đã bán {item.sold}</span>
                                </div>
                            </div>
                            <div className={clsx(style.price,{
                                [style.discount]:item.discount
                            })}>
                                <span>{item.price?item.price.toLocaleString():`500.000`} <b><u>d</u></b></span>
                                <span>-{Math.round(Math.random()*10)+10}%</span>
                            </div>
                        </div>
                    </div>
                )
            })
         } 
         <button className={style.loadMore} onClick={handleClick}>Xem Thêm</button>  
    </div>
  );
}

export default PruductList;
