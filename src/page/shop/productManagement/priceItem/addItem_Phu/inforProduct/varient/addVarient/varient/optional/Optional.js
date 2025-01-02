import React, { useEffect } from 'react'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import style from './optional.module.css'


function Optional({option,index,setOption,optionAll,id}) {
  const handleOptionChange = (e)=>{
    setOption(()=>{
        const newData = [...optionAll]
        newData[index] = e.target.value
        return newData
    })
  }
     
  const handleDelete =(index)=>{
    console.log(index)
    setOption(()=>{
        const newData = [...optionAll]
        newData.splice(index,1)
        return newData
    })
  }
  return (
    <div className={`${style.option} ${id}`}>
        <input type='text' placeholder='Vui lòng điền biến thể' value={option} className={style.input_option}
        onChange={(e)=>{handleOptionChange(e)}}/>
        <DeleteSweepOutlinedIcon onClick={()=>{handleDelete(index)}}/>
    </div>
  )
}

export default Optional