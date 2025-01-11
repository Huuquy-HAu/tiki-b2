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

  // console.log(42, listProducts)
  useEffect(() => {
    const fetchProducts = async () => {
      setListProducts([]);
      setLoading(true);
  
      try {
        const { data } = await getAPI("/product/get-all-products");
        console.log(50,data);
  
        const searchLower = search ? search.toLowerCase() : "";
        const searchNoAccents = search ? removeAccents(searchLower) : "";
        const newData = data.listProduct.filter((value) => {
          console.log( 56,value);
          if (!value.price || !value.categoryId ) {
            return false;
          }
          
          const categoryName = value.categoryId.categoryName.toLowerCase();
          // console.log(61,categoryName , searchLower);
          // if (search) {
          //   return (
          //     categoryName.includes(searchLower) ||
          //     removeAccents(categoryName).includes(searchNoAccents)
          //   );
          // }
          return true;
        });
        console.log(70,newData);
  
        setListProducts(newData);
        setLoading(false);
        setSos(newData.length === 0);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        setSos(true);
      }
    };
  
    fetchProducts();
  }, [search]);
  
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