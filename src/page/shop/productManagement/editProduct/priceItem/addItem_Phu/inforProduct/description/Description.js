import React, { useState } from 'react'
import { Radio } from 'antd';
import style from './description.module.css'
import TextArea from './textArea/TextArea';
function Description() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={style.Description} id='Description_step__scroll'>
      <h2>
        Mô tả sản phẩm
      </h2>
      <p>
      Long Description (Lorikeet)
      </p>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Rich Text</Radio>
          <Radio value={2}>Lorikeet</Radio>
        </Radio.Group>
      </div>
      <div className={style.description}>
        <TextArea/>
      </div>
    </div>
  )
}

export default Description