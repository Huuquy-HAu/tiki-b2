import React from 'react'
import Delivery from './delivery/Delivery'
import styled from './listorder.module.css'
import ListProduct from './listproduct/ListProduct'

function ListOrder() {
  return (
    <div className={styled.ListOrder}>
       <h3>Chọn hình thức giao hàng </h3>
       <Delivery/>
        <ListProduct/>
    </div>
  )
}

export default ListOrder