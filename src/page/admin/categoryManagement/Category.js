import React, { useEffect, useState } from 'react'
// import { ListCategory } from './ListCategory'
import styles from './category.module.css'
import { Pagination } from 'antd';
import './Category.css'
import { Button, Modal } from 'antd';
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import 'antd/dist/antd.css';
import {getAPI, patchAPI, postAPI } from '../../../config/api';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
function Category() {
  const data = useOutletContext()
  const [pagination,setPagination] = useState([])
  const [listCategories,setListCategories] = useState([])
  const [pageSize, setPageSize] = useState(6)
  const [current, setCurrent] = useState(1);
  const location = useLocation();
  const [addData, setAddData] = useState(true)
  const [changerName, setChangerName] = useState(true)
  const [changerImg, setChangerImg] = useState(true)
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[idCategory,setIdCategory] = useState('');
  const [imageObject, setImageObject] = useState({});
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
  };
  useEffect(() => {
    setPagination(() => {
      let page = location.search.slice(-1) * 1 ? location.search.slice(-1) * 1 : 1;
      setCurrent(page);
      let start = (page - 1) * pageSize;
      let end = page * pageSize;
      const newData1 = listCategories.slice(start, end)
      return newData1
    })
  },[listCategories])
  function SoListData(page, pageSize){
    let start = (page - 1) * pageSize;
    let end = page * pageSize;
    setPagination(listCategories.slice(start, end)) 
    setCurrent(page)
    navigate(`/admin/category?page=${page}`);
  }
  useEffect(() => {
    setPagination(function() {
      const newData =  listCategories.filter(function(item) {
        return item.categoryName.toLowerCase().includes(data)
      })
      return newData
    })  
  },[data])
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };
  const onChange = (key) => {
    console.log(key);
  };
  const showModal = () => {
    setAddData(true)
    setChangerName(false)
    setChangerImg(false)
    setIsModalVisible(true);
  };
  const showModal1 = (id) => {
    setIdCategory(id)
    setAddData(false)
    setChangerName(true)
    setChangerImg(false)
    setIsModalVisible(true);
  };
  const showModal2 = (id) => {
    setIdCategory(id)
    setAddData(false);
    setChangerName(false)
    setChangerImg(true)
    setIsModalVisible(true);
  };
  async function handleOk() {
    try{
      const addNewName = document.querySelector('#addNewName').value;
      const formData = new FormData();
      formData.append('thump', imageObject)
      formData.append('categoryName', addNewName)
      await postAPI('/category/admin-create-new-category', formData);
    }catch(err){
      alert(err.response.data.message)
      console.log(err);
    }
    setIsModalVisible(false);
  };
  async function handleOk1 () {
    try{
      const categoryName = document.querySelector('#changerName').value;
      await patchAPI('/category/change-category-name/'+idCategory, {categoryName:categoryName});
    }catch(err){
      console.log(err);
    }
    setIsModalVisible(false);
  };
  async function handleOk2() {
    try {
      const formData = new FormData();
      formData.append('thump', imageObject)
      await patchAPI('/category/change-category-thump/'+idCategory, formData);
      setIsModalVisible(false);
    } catch (error) {
      console.log(121, error)
    }
  };
  const handleChange = (info) => {
    let url = URL.createObjectURL(info.file.originFileObj);
    setImageObject(info.file.originFileObj);
    setImageUrl(url)
  };
  const handleChange1 = (info) => {
    let url = URL.createObjectURL(info.file.originFileObj);
    setImageObject(info.file.originFileObj);
    setImageUrl(url)
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  useEffect(() => {
    getAPI("/category/get-all-categories")
    .then((data)=> {
      setListCategories(data.data.listCategories)
    })
    .catch((error) => {
      console.log(error)
    }) 
  },[isModalVisible])
  
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <div className={styles.category}> 
      <div>
      <Modal title="Admin Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        addData&&<Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Submit
        </Button>,
        changerName&&<Button
          onClick={handleOk1}
          type="primary"
        >
          Submit
        </Button>,
        changerImg&&<Button
        onClick={handleOk2}
        type="primary"
      >
        Submit
      </Button>,
      ]}>
        {addData&&<div>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange1}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
                ) : (
                  uploadButton
                )}
          </Upload>
        <input id='addNewName' type="text" className={styles.modalInput} placeholder='Tên sản phẩm'/></div>}
        {changerName&&<div><input type="text" className={styles.modalInput} id='changerName' placeholder='Tên sản phẩm'/></div>}
        {changerImg&&<div>
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: '100%',
                }}
              />
                ) : (
                  uploadButton
                )}
        </Upload>
        </div>}
      </Modal>
      </div>
        <div className={styles.addData}>
          <div className={styles.PageCategory}>Categories</div>
          <button onClick={()=>showModal()} className={styles.button} >+</button>
        </div>
        <div className={styles.listProductCategory}>
        {pagination.map((value, index) =>{
            return (
              <div className={styles.listCategory}>
                  <div className={styles.imageName}>
                      <img onClick={()=>showModal2(value._id)} className={styles.img} 
                      src={value.thump.startsWith('http') ? value.thump : 'http://localhost:3003/'+value.thump} alt='' />
                      <p className={styles.name}>{value.categoryName}</p>
                  </div>
                  <div>                    
                      <button onClick={()=>showModal1(value._id)} className={styles.button}>Changer</button>
                  </div>
              </div>
            )
          })}
          </div>
          <Pagination className={styles.pagination} total={listCategories.length} itemRender={itemRender} defaultPageSize={6} onChange={SoListData}
          current={current} />;
      </div>     
    </div>
  )
}

export default Category