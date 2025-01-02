import { Table } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./ComponentTableProducts.module.css";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./FilterProducts.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { handleBreakpoints } from "@mui/system";
import { getAPI, patchAPI } from "../../../config/api";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';

const columns = [
  {
    title: "Thông tin sản phẩm",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Giá",
    dataIndex: "price",
  },
  {
    title: "Kho",
    dataIndex: "address",
  },
  {
    title: "Trạng thái ",
    dataIndex: "contentScore",
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ", "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ"
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}
const ComponentTableProducts = ({ value, selectSort, count }) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [listData, setListData] = useState([])
  const [listData1, setListData1] = useState([]);
  const [shopId,setShopId] = useState('')

  useEffect(function(){
    getAPI('/shop/get-loged-in-shop')
      .then(data=>{
        setShopId(data.data.shop._id)
      })
      .catch(error=>console.log(error));
  },[])


  useEffect(() => {
   if(shopId.length>0){
    getAPI(`/product/get-product-by-shopId/${shopId}`)
    .then((res) => {
      console.log(74, res.data.product)
      if (selectSort == 'Giá') {
        res.data.product.sort((a, b) => {
          return a.price - b.price
        })
      } else if (selectSort == 'Số lượng kho') {
        res.data.product.sort((a, b) => {
          return a.totalStorage - b.totalStorage
        })
      }
      const newData = res.data.product
      if (value.length > 0) {
        const newDataa = newData.filter(data => {
          const dataa = removeAccents(data.productName.toLowerCase())
          if (dataa.includes(value)) {
            return true
          }
        })
        setListData(newDataa)
      } else {
        setListData(newData)
      }
    })
    .catch((error) => {
      console.log(error)
    })
   }
  }, [value, count, selectSort,shopId])
  
  const nav = useNavigate()
  const handleUpdate = (id) => {
    nav(`/editItem?id=${id}`)
  }
  let dataTest = listData.map((ele, index) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
   
    function handleChange (e){
    console.log(117,e)
    console.log(117,e.target.checked)

  }
  let linkImg = ele.thump
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
      return {
        key: index + 1,
        name: (
          <div className={styles.products}>
            <img src={linkImg} alt="img" />
            <span>{ele.productName}</span>
          </div>
        ),
        price: (
          <div className={styles.modalUpdate}>
            <p>{ele.price ? ele.price.toLocaleString() : '' } đ</p>
          </div>
        ),
        address: (
          <div  className={styles.modalUpdate}>
            <p className={ele.totalStorage > 0 ? ele.totalStorage :'red'}> {ele.totalStorage ? ele.totalStorage : 'Hết Hàng'} </p>
            <EditOutlined onClick={()=>handleUpdate(ele._id)} />
          </div>
        ),
        contentScore: (
          <div className={styles.contentScore}>
            <p className={ele.public ? 'checkboxGreen' : 'checkboxRed '}></p>
            <p className={styles.status}> {ele.public = 'true' ? 'Đang hoạt động' : 'Tạm khoá'}</p>
            <p><Switch {...label} defaultChecked  onChange={handleChange} /></p>
          </div>
        ),
      };
   
  });

  return (
    <div className={styles.Table}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataTest}
      />

    </div>
  );
};

export default ComponentTableProducts;
