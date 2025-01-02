import React from 'react'
import './library.css'
function InputNumberPhu({placeholder}) {
  const handleDecrese=(e)=>{
    const Input = e.target.parentNode.querySelector('.hello_ant-input-number-input')
    if(Input.value>=0){
        Input.value = Input.value*1 + 1
    }
  }
  const handleIncrese=(e)=>{
    const Input = e.target.parentNode.querySelector('.hello_ant-input-number-input')
    if(Input.value >=1){
        Input.value = Input.value*1 - 1
    }
  }
  return (
    <div className='quantity'>
        <input type='number'className='hello_ant-input-number-input' placeholder={placeholder}/>
        <button className='btn_spin__imputNumber btn_descriese' onClick={(e)=>handleDecrese(e)}>
            +
        </button>
        <button className='btn_spin__imputNumber btn_inscese' onClick={(e)=>handleIncrese(e)}>
            -
        </button>
    </div>
  )
}

export default InputNumberPhu