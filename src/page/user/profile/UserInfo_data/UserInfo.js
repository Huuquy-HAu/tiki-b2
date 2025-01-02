import React from 'react';
import styles from './UserInfor.module.css';
import data from './data';
import DataDay from './DataDay';
import 'antd/dist/antd.css';
import { Radio, Modal } from 'antd';
import DataMonth from './DataMonth';
import Countries from './Countries';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './userinfor.css';
import { patchAPI } from '../../../../config/api';
import { updateInfo } from '../../../../redux/userSlice';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};
function UserInfo() {
  const dispatch = useDispatch()
  const user = useSelector((state => state.user))
  console.log(44,user)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [imageObject, setImageObject] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageObject)
      const res = await patchAPI('/user/update-user-info/'+user._id, formData);
      const action = updateInfo(res.data.user)
      dispatch(action)
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleChange = (info) => {
    let url = URL.createObjectURL(info.file.originFileObj);
    setImageObject(info.file.originFileObj);
    setImageUrl(url)
  };

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
  async function handleUpdate() {
    try {
      const adusername = document.querySelector("#adusername").value;
      const adFirstName = document.querySelector("#first_last_name").value;
      const dateTime = document.querySelector("#datetime").value;
      const dataMother = document.querySelector("#dataMonth").value;
      const dataDay = document.querySelector("#dataDay").value;
      const nationality = document.querySelector("#formCountriesInput").value;
      const male = document.querySelector("#male");
      const female = document.querySelector("#female");
      const other = document.querySelector("#other");
      let dateOfBirth;
      if (dateTime * 1 && dataMother * 1 && dataDay * 1) {
        dateOfBirth = dateTime + "/" + dataMother + "/" + dataDay;
      }
      const name = await patchAPI("/user/update-user-info/" + user._id, {
        username: adusername,
        fullname: adFirstName,
        dateOfBirth,
        sex:
          male.checked === true
            ? male.value
            : female.checked === true
            ? female.value
            : other.value,
        nationality: nationality,
      });
      const action = updateInfo(name.data.user);
      dispatch(action);
    } catch (error) {
      console.log(97, error);
    }
  }

  return (
  <div className= {styles.userInfomation}>
    <>
      <Modal title="Cập nhật ảnh đại diện" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
      </Modal>
    </>
      <div className= {styles.acountForm}>
        <div>Thông tin cá nhân</div>
        <div className={styles.formInfor}>
          <div className={styles.formAvatar}>
            <div className={styles.avatarView}>
              <img
                className={styles.avatar}
                src={
                  user.avatar.startsWith("http")
                    ? user.avatar
                    : "http://localhost:3003/" + user.avatar
                }
                alt="avatar"
              />
            </div>
            <div className={styles.edit}>
              <img
                onClick={showModal}
                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                class="edit_img"
                alt=""
              />
            </div>
          </div>
          <div className={styles.formName}>
            <div className={styles.formControl}>
              <p className={styles.formP}> Họ Và tên</p>
              <input
                type="text"
                className={styles.formInput}
                defaultValue={user.fullname}
                placeholder="Thêm họ tên"
                id="first_last_name"
              />
            </div>
            <div className={styles.formControl}>
              <p className={styles.formP}> Nickname</p>
              <input
                type="text"
                className={styles.formInput}
                defaultValue={user.username}
                id="adusername"
              />
            </div>
          </div>
        </div>
        <div className={styles.formDatetime}>
          <div className={styles.formDate}>
            <p>Ngày sinh</p>
            <select className={styles.formDatetimeInput} id="datetime">
              {data.map(function (data) {
                if (new Date(user.dateOfBirth).getFullYear() === data) {
                  return (
                    <option value={data} selected>
                      {data}
                    </option>
                  );
                } else {
                  return <option value={data}>{data}</option>;
                }
              })}
            </select>
          </div>

          <div>
            <select className={styles.formDatetimeInput} id="dataMonth">
              {DataMonth.map(function (DataMonth) {
                if (new Date(user.dateOfBirth).getMonth() + 1 === DataMonth) {
                  return (
                    <option value={DataMonth} selected>
                      {DataMonth}
                    </option>
                  );
                } else {
                  return <option value={DataMonth}>{DataMonth}</option>;
                }
              })}
            </select>
          </div>
          <div>
            <select className={styles.formDatetimeInput} id="dataDay">
              {DataDay.map(function (DataDay) {
                if (new Date(user.dateOfBirth).getDate() === DataDay) {
                  return (
                    <option value={DataDay} selected>
                      {DataDay}
                    </option>
                  );
                } else {
                  return <option Value={DataDay}>{DataDay}</option>;
                }
              })}
            </select>
          </div>
        </div>
        <div className={styles.formRadio}>
          <p>Giới tính</p>
          <Radio.Group name="radiogroup" defaultValue={user.sex}>
            <Radio id="male" value={"male"}>
              Nam
            </Radio>
            <Radio id="female" value={"female"}>
              nữ
            </Radio>
            <Radio id="other" value={"other"}>
              Khác
            </Radio>
          </Radio.Group>
        </div>
        <div className={styles.formCountries}>
          <p>Quốc tịch</p>
          <select id="formCountriesInput">
            {Countries.map(function (Countries) {
              if (user.nationality === Countries) {
                return (
                  <option value={Countries} selected>
                    {Countries}
                  </option>
                );
              } else {
                return <option value={Countries}>{Countries}</option>;
              }
            })}
          </select>
        </div>
        <div>
          <button onClick={handleUpdate} id={styles.formButton}>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
