import React, { useState, useEffect,useRef } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import { Checkbox } from 'antd';
import * as React1 from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './varient.module.css'
import './varient.css'
import Optional from './optional/Optional';
const { Option } = Select;
let index = 0;
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

function SubVarient({index,setAddVarient,addVarient,option,setOption,Key,setKey,option2,setOption2,Key2,varient,setKey2}) {
    const [items, setItems] = useState(['Nhóm màu', 'Biến thể']);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
  
    const onNameChange = (event) => {
      setName(event.target.value);
      console.log(25,event.target.value)
    };
  
    const addItem = (e) => {
      e.preventDefault();
      setItems([...items, name || `New item ${index++}`]);
      setName('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    };

    const handleSelectedChange1 =(value,option)=>{
        setKey(value)
    }
  const [newKey,setNewKey] = useState(Key)

  useEffect(function(){
    setNewKey(Key)
  },[Key])

  const handleDeleteVarient =(index)=>{
    if(window.confirm('Bạn có thực sự muốn xoá Biến thể này?')){
        if(index==0){
            if(option2.length>0){
                setKey(Key2)
                setKey2(Key)
                setOption(option2)
                setOption2([])
            }else{
                setOption([])
            }
        }
        if(index==1){
            setKey('Biến thể')
            setOption([])
        }
        setAddVarient(()=>{
            const newVarient = [...addVarient]
            newVarient.splice(index,1)
            return newVarient
        })
    }
  }
//   console.log(Key,Key2)

    const handleChangeAddOption = (e)=>{
        if(e.target.value != '' && e.key == 'Enter'){
            // console.log(e.target.value)
            const value = e.target.value
            setOption(()=>{
                const newData = [...option,value]
                return newData
            })
            e.target.value=''
        }

    }
    const handleSelectedChange=(value,option)=>{
        setKey(value)
    }
    // console.log(38,option)
  return (
    <div className={style.SubVarient}>
        <h3>Biến thể {index+1}</h3>
        <label>
            <span>*</span> Tên biến thể:
            <Select
                value={Key}
                onChange={handleSelectedChange1}
                className='Varient_Add'
                style={{
                    width: 300,
                }}
                placeholder="Vui lòng chọn biến thể hoặc tạo biến thể"
                dropdownRender={(menu) => (
                    <>
                    {menu}
                    <Divider
                        style={{
                        margin: '8px 0',
                        }}
                    />
                    <Space
                        style={{
                        padding: '0 8px 4px',
                        }}
                    >
                        <Input
                        placeholder="Please enter item"
                        ref={inputRef}
                        value={name}
                        onChange={onNameChange}
                        />
                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                        Add item
                        </Button>
                    </Space>
                    </>
                )}
                >
                {items.map((item) => (
                    <Option key={item}>{item}</Option>
                ))}
            </Select>
        </label>
        <div className={style.all_varient}>
            <p>Tổng số biến thể</p>
            <div>
                <Checkbox onChange={onChange} className={style.Image_add}>Thêm ảnh</Checkbox>
                <span className={style.addImage}>Tối đa thêm 8 ảnh cho mỗi biến thể</span>
                {
                    option.map((option1,index)=>{
                        return(
                            <Optional 
                            option={option1} 
                            index={index}
                            key={index} 
                            setOption={setOption} optionAll={option} 
                            id = {index==option.length-1? 'Option_last-focus':'none'}
                            />
                        )
                    })
                }
                <div className={style.Add_option}>
                    <input type='text' placeholder='Vui lòng thêm biến thể'  className={style.input_option}
                    onKeyPress={(e)=>handleChangeAddOption(e)}
                    />
                </div>
            </div>
        </div>
        <span onClick={()=>handleDeleteVarient(index)} className={style.delete}>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
        </span>
    </div>
  )
}
  
export default SubVarient