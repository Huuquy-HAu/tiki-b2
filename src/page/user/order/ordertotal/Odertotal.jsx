import React from 'react'
import ListInfor from './listinfor/ListInfor'
import ListOrder from './listorder/ListOrder'
import styled from './ordertotal.module.css'

function Odertotal() {
  return (
    <div className={[styled.Odertotal,'hello'].join(' ')}>
        <ListOrder/>
        <ListInfor/>
    </div>
    
  )
}

export default Odertotal