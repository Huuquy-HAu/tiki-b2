import { Input, Radio, Space } from 'antd';
import React, { useState } from 'react';
import styled from './delivery.module.css'
import './delivery.css'
function Delivery() {
    const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={styled.Delivery}>
       <Radio.Group onChange={onChange} value={value} className={'delivery_header'}>
        <Space direction="vertical">
            <Radio value={1}>
                <div className={styled.img}><img src="https://salt.tikicdn.com/ts/upload/a8/d8/2b/bbb0d52b818116c3873363acfd7cd6c4.png" alt="" width={'48px'} height={'14px'} /></div>
                <span className={"method_text"}> Giao Sáng Mai</span>
                <span className={styled.cost}>-17k</span>
                <div className={styled.img}><img src="https://salt.tikicdn.com/ts/upload/b7/77/7d/0a981c8d05f5bec66dc057f6575d2e2f.png" alt="" width={'48px'} height={'14px'} /></div>

            </Radio>
            <Radio value={2}>
            <div className={styled.img}><img src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png" alt="" width={'48px'} height={'14px'} /></div>
                <span className={"method_text"}> Giao tiết kiệm</span>
                <span className={styled.cost}>-6k</span>
                <div className={styled.img}><img src="https://salt.tikicdn.com/ts/upload/b7/77/7d/0a981c8d05f5bec66dc057f6575d2e2f.png" alt="" width={'48px'} height={'14px'} /></div>

            </Radio>
            {value === 4 ? (
                <Input
                style={{
                    width: 100,
                    marginLeft: 10,
                }}
                />
            ) : null}
        </Space>
        </Radio.Group>
    </div>
  )
}

export default Delivery