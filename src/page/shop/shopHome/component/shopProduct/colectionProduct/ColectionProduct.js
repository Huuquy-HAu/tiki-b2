import { Radio, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import './colectionProduct.css'
import style from './colectionProduct.module.css'
import ListDataColection from './listDataColection/ListDataColection';


const { TabPane } = Tabs;

function ColectionProduct({allProduct}) {

    const [colection,setColection] = useState([])
    useEffect(function(){
        setColection(()=>{
            const data = []
            const newData = []
            allProduct.map(item=>{
                const catagoryName = item.categoryId.categoryName
                if(!data.includes(catagoryName)){
                    data.push(catagoryName)
                    const listColectionData = allProduct.filter(subItem=>{
                        return subItem.categoryId.categoryName == catagoryName
                    })
                    newData.push({
                        title :catagoryName,
                        listProduct:listColectionData
                    })
                }
            })
            return newData
        })
    },[allProduct])
    console.log(33,colection)
    
    const [tabPosition, setTabPosition] = useState('left');

    useEffect(function(){
        if(window.innerWidth <= 768){
            setTabPosition('top')
        }else{
            setTabPosition('left')
        }
    },[window.innerWidth])

    const changeTabPosition = (e) => {
      setTabPosition(e.target.value)};
  return (
    <div className={style.ColectionProduct}>
       
        <>
            <Tabs tabPosition={tabPosition} className='tab_colection'>
                {colection.map((colection,index)=>{
                    return(
                        <TabPane tab={colection.title} key={`${index}`}>
                            <ListDataColection data={colection.listProduct}/>
                        </TabPane>
                    )
                })}
            </Tabs>
        </>
    </div>
  )
}

export default ColectionProduct