import React, { useEffect, useState } from 'react'
import './library.css'


function InputLimeted({click,index}) { 
  const [length,setLength] = useState(0)

  useEffect(function(){
    setLength(document.querySelector(`#Sku_input__limited${index}`).value.length)
  },[click])
  const handleChange=(e)=>{
    setLength(e.target.value.length)
  }
  return (
    <div  className='Input_maxLength'>
        <input type='text' maxLength={200} className='Input_MaxLength__Phu' placeholder='Seller SKU' onChange={handleChange} id={`Sku_input__limited${index}`}/>
        <div className='Limited_input'>
            {length}/200
        </div>
    </div>
  )
}

export default InputLimeted