import { Button, Modal } from 'antd';
import SideBar from './SideBar';
import React, { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
import "./styles.css";
const Modall = ({className}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
  return (
    <>
      <Button type="primary" className = {className}>
      <FilterOutlined style={{color: 'black'}} onClick={showModal} /><span style={{color: 'black', marginLeft: '2px' }}>Lọc</span>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} className="filter-modall">
      <SideBar />
      </Modal>
    </>
  )
}

export default Modall