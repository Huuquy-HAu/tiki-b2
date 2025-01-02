import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import style from './banner.module.css'
import ShopProduct from '../component/shopProduct/ShopProduct.js'
import 'antd/dist/antd.css';
import './productShop.css';
import AllProduct from '../component/shopProduct/allProduct/AllProduct';
import DetailShop from '../component/shopProduct/detailShop/DetailShop';
import ColectionProduct from '../component/shopProduct/colectionProduct/ColectionProduct';
import PopularProduct from '../component/shopProduct/allProduct/popularProduct/PopularProduct';

const { TabPane } = Tabs;

function BannerShop({allProduct,shopInfor}) {
    const [listProductTotal,setListProductTotal] = useState([])
  const [search,setSearch] = useState('')
  const { Search } = Input;
  const [activeKey,setActiveKey] = useState('1')
  const onSearch = (value) => { 
    setSearch(value)
    setActiveKey('6')
  };
    
  useEffect(function(){
    setListProductTotal(()=>{     
        const DATA = allProduct.filter(item=>{
            return item.productName.includes(search)
        })
        return DATA
    })
  },[allProduct,search])
  const callbackTabClicked=(key,event)=>{
    setActiveKey(key)
  }
  const { TabPane } = Tabs; 
  const onChange = (key) => {
//   console.log(key);
  };
  return (
    <>
    
    <div className={style.BannerShop}>
        <div className={style.header}>
            <img src={shopInfor.logo}  className={style.avatar}/>
            <div className={style.info}>
                <div>
                    <h3>
                        {shopInfor.shopName}
                    </h3>
                    <img src='https://salt.tikicdn.com/ts/upload/58/00/b8/6c8ecad82adece328530e6f21971c309.png'/>
                    <div className={style.follower}>
                        <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.37301 2.73241L9.92801 5.88241L13.405 6.38841C13.4818 6.39949 13.554 6.43184 13.6133 6.48182C13.6727 6.5318 13.7169 6.5974 13.7409 6.6712C13.7648 6.74499 13.7677 6.82403 13.7491 6.89935C13.7305 6.97468 13.6911 7.04329 13.6355 7.09741L11.119 9.54741L11.713 13.0104C11.7261 13.0869 11.7176 13.1655 11.6883 13.2374C11.6591 13.3093 11.6103 13.3716 11.5475 13.4172C11.4847 13.4628 11.4104 13.4899 11.333 13.4956C11.2556 13.5012 11.1782 13.485 11.1095 13.4489L8.00001 11.8164L4.89001 13.4504C4.82125 13.4863 4.74383 13.5024 4.66645 13.4966C4.58908 13.4909 4.51484 13.4637 4.45211 13.4181C4.38937 13.3725 4.34062 13.3102 4.31136 13.2383C4.28211 13.1665 4.2735 13.0879 4.28651 13.0114L4.88051 9.55041L2.36401 7.10041C2.30841 7.04629 2.26907 6.97768 2.25045 6.90235C2.23183 6.82702 2.23468 6.74799 2.25867 6.6742C2.28266 6.6004 2.32684 6.5348 2.38619 6.48482C2.44555 6.43484 2.51771 6.40249 2.59451 6.39141L6.07151 5.88291L7.62651 2.73291C7.66091 2.66332 7.71407 2.60474 7.77999 2.56375C7.84592 2.52277 7.92198 2.50103 7.99961 2.50098C8.07723 2.50092 8.15333 2.52257 8.2193 2.56346C8.28528 2.60435 8.33852 2.66287 8.37301 2.73241Z" fill="#FFC400"></path></svg>
                        </span>
                        <span>4.5/ 5</span>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 8C5.1195 8 4 6.3805 4 5V4.5C4 3.1195 5.1195 2 6.5 2C7.8805 2 9 3.1195 9 4.5V5C9 6.3805 7.8805 8 6.5 8Z" fill="white" fill-opacity="0.7"></path><path d="M8.765 12.4065C8.2715 11.919 8 11.27 8 10.5775C8 10.075 8.147 9.597 8.4145 9.1855C7.8345 9.076 7.1865 9 6.5 9C5.088 9 3.8355 9.319 3.013 9.5965C2.405 9.802 2 10.3745 2 11.016V13H9.3655L8.765 12.4065Z" fill="white" fill-opacity="0.7"></path><path d="M13.5315 9.46C13.1925 9.125 12.726 8.961 12.2485 9.008C11.9755 9.0355 11.7185 9.131 11.4995 9.2825C11.2805 9.131 11.024 9.0355 10.7505 9.008C10.274 8.962 9.8065 9.125 9.4675 9.46C9.1665 9.758 9 10.155 9 10.5775C9 11 9.1665 11.397 9.468 11.695L11.5 13.703L13.532 11.6955C13.8335 11.397 14 11 14 10.5775C14 10.155 13.8335 9.758 13.5315 9.46Z" fill="white" fill-opacity="0.7"></path></svg>
                        </span>
                        <span>
                            Người theo dõi: 4500+
                        </span>
                    </div>
                </div>
                <button>
                    + Theo Dõi
                </button>
            </div>
        </div>
        <div className={style.search}>
        <Space direction="vertical" className='search'>
            <Search placeholder="Tìm kiếm trong shop" onSearch={onSearch} enterButton />
        </Space>
        </div>
    </div>  
     <div className={style.footer}>
        <div className={style.menu}>
            <Tabs defaultActiveKey='1' onChange={onChange} activeKey={activeKey} onTabClick={callbackTabClicked} className='contentShop'>
                <TabPane tab="Cửa hàng" key="1" >
                  <ShopProduct allProduct={allProduct} shopInfor={shopInfor}/>
                </TabPane>
                <TabPane tab="Tất cả sản phẩm" key="2">
                   <AllProduct activeKey1={'2'} allProduct={allProduct}/>
                </TabPane>
                <TabPane tab="Bộ sưu tập" key="3">
                 <ColectionProduct allProduct={allProduct}/>
                </TabPane>
                <TabPane tab="Giá sốc hôm nay" key="4">
                    <AllProduct activeKey1={'4'} allProduct={allProduct}/>
                </TabPane>
                <TabPane tab="Hồ sơ cửa hàng" key="5">
                   <DetailShop/>
                </TabPane>
                <TabPane tab="Find On Shop" key="6">
                    <PopularProduct listProduct={listProductTotal}/> 
                </TabPane>
            </Tabs>
        </div>       
     </div>
    </>
  )
}

export default BannerShop