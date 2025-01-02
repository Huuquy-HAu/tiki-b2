import React, { useEffect, useState } from 'react'
import SideBar from './sideBar/SideBar'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import styles from './Filter.module.css'
import Container from './fiterContainer/Container'
import { getAPI } from '../../../config/api'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  const [loading, setLoading] = useState(true)
  const [sos, setSos] = useState(false)
  const [data1, setData] = useState([])
  const [listProducts,setListProducts]= useState([])
  const [query] = useSearchParams()
  const search = query.get('search')

  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }

  console.log(42, listProducts)

  useEffect(() => {
    setListProducts([])
    setLoading(true)
    getAPI("/product/get-all-products")
    .then((data)=> {
      setListProducts(() => {
        setData([])
        const newData = []
        for(let value of data.data.listProduct) {
          if(search){
            if(value.price && value.brandId && value.categoryId && value.shopId.address){
                const newName = value.categoryId.categoryName.toLowerCase()
                  if(newName.includes(search.toLowerCase())){
                    newData.push(value)
                    setLoading(false)
                    setSos(false)
                  }else {
                    if(removeAccents(newName).includes(search.toLowerCase())){
                      newData.push(value)
                      setLoading(false)
                      setSos(false)
                    }
                  }
            }
          }else {
            if(value.price) {
              newData.push(value)
              setLoading(false)
            }
          }
        }
        if(newData.length === 0) {
          setSos(true)
        }
        return newData
      })
    })
    .catch((error) => {
      setLoading(false)
    }) 
  },[search])

  return (
    <div className='App'>
        <div  className = {styles.slider}>
            <Breadcrumb />
            <div className = {styles.container}>
                <div className = {styles.container_box} >
                    <SideBar setData= {setData} listProducts = {listProducts} />
                </div>
                <Container data1={data1} listProducts = {listProducts} loading = {loading} search = {search} sos= {sos}/>
            </div>
        </div>
    </div>
  )
}

export default Filter