import React from 'react'
import  styles from './ListData.module.css'
const ListData = ({data}) => {
  return (
    <div className={styles.listData}>
        {data.map(data => {
            return (
                <div key={data.id} className = {styles.container}>
                <div className={styles.box}>
                    <img src={data.image} alt= ''/>
                    <div className= {styles.container_info}>
                    <p>{data.title}</p>
                    <span className={styles.container_amount}>1 sản phẩm</span>
                    <span>{data.price} đ</span>
                    </div>
                </div>
                    <button className={styles.btn}>chi tiết sản phẩm</button>
                </div>
            )
        })}
    </div>
  )
}

export default ListData