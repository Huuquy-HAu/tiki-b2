import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import styles from "./ComponentTableProducts.module.css";

function Modall(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    console.log(props.idKey);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.modal}>
      <div id={props.id}>
        <EditOutlined onClick={showModal} />
        <Modal
          title="Chỉnh sửa"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className={styles.container}
        >
          <input
            className={styles.modalInput}
            type="text"
            id="input-modal"
            placeholder="Update Số Lượng"
          />
        </Modal>
      </div>
    </div>
  );
}

export default Modall;
