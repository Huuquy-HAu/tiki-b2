import React, { useState } from "react";
import styles from "./FilterProducts.module.css";
import { Input, Select } from "antd";
import "antd/dist/antd.css";
import { Option } from "antd/lib/mentions";
import "./FilterProducts.css";
import { listBranch } from "../../user/createShop/listBranch";
import SearchIcon from '@mui/icons-material/Search';
const { Search } = Input;
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

function FilterProducts({ setValue, setselectSort, setCount, count }) {
  const [val, setVal] = useState('')
  function onChange() {
    const seachData = document.querySelector(`.${styles.inp_search} .ant-input`).value;

    setValue(removeAccents(seachData.toLowerCase()))
  }
  function handleChange(value) {
    setselectSort(value)
  }
  const onSearch = (value) => {
    const seachData = document.querySelector(`.${styles.inp_search} .ant-input`).value;
    console.log(1)
    if (seachData.trim().length > 0) {
      setValue(removeAccents(seachData.toLowerCase()))
    } else {
      setValue('');
      setCount(count + 1);
    }


  };
  return (
    <div className={styles.filterProducts}>
      <div>
        <span className={styles.flterSpan}>Lọc sản phẩm:</span>
      </div>
      <div className={styles.filter}>
        <div className={[styles.filterInput, styles.width33,].join(" ")}>
          <Input.Group compact>
            <Select style={{ width: "30%" }} defaultValue="Tên sản phẩm">
              <Option value="Mã sản phẩm">Mã sản phẩm</Option>
              <Option value="SKU">SKU</Option>
              <Option value="PSKU">PSKU</Option>
            </Select>
            <div className={styles.inp_search}>
              <Search
                allowClear
                placeholder=" Vui lòng nhập "
                onSearch={onSearch}
                onChange={onChange}
              />
              <SearchIcon className={styles.searchicon} />
            </div>

          </Input.Group>
        </div>
        <div className={[styles.width33].join(" ")}>
          <Input.Group compact>
            <Select
              style={{
                width: "100%",
              }}
              defaultValue="Ngành Hàng"
              placeholder="Ngành Hàng"
            >
              {listBranch.map((data, index) => {
                return (
                  <Option value={data} key={index}>
                    {data}
                  </Option>
                );
              })}
            </Select>
          </Input.Group>
        </div>
        <div className={[styles.width33].join(" ")}>
          <Input.Group compact>
            <Select
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              defaultValue="Sắp xếp"
              placeholder="sắp xếp"
            >
              <Option value="Giá">Giá</Option>
              <Option value="Số lượng kho" >Số lượng kho</Option>
            </Select>
          </Input.Group>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
