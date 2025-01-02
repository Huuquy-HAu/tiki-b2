import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import style from './footerAdd.module.css'
import { useSelector } from 'react-redux';
import { getAPI, patchAPI, postAPI } from '../../../../../../config/api';
import { useNavigate } from 'react-router-dom';

function FooterAdd() {
  const nav = useNavigate()
  const varient = useSelector(state=>state.addItemReducerSlice.varient)
  const listIMG = useSelector(state=>state.addItemReducerSlice.images)
  const Shoper = JSON.parse(window.localStorage.getItem('tiki-user'))
  const [shopID,setShopID] = useState('')
  useEffect(function(){
    setShopID(Shoper.shop._id)
  },[Shoper])

  const getBrandId =()=>{}
  const handleCreatorProduct = async function(){
    const listOption = document.querySelectorAll('.DetailListItem')
    const newList  =  [...listOption]
    const productName = document.querySelector('.ant-input-affix-wrapper .ant-input.input_additem').value
    const CatagoryName = document.querySelector('.ant-select-selection-item').title
    const BrandID = document.querySelector('#Brand_brandIDName').value
    const Origin = document.querySelector('#Brand_Origin').value
    const Material = document.querySelector('#Brand_material').value
    const Age = document.querySelector('#Brand_Age').value
    const Detail = document.querySelector('#Brand_detail').value
    const about = []
      if(Origin.trim()!= ''){
        about.push({
            "key":"Origin",
            "value":Origin
        })
      }
      if(Material.trim()!= ''){
        about.push({
          "key":"Material",
          "value":Material
        })
      } 
      if(Age.trim()!= ''){
        about.push({
            "key":"Age",
            "value":Age
        })
      }
      if(Detail.trim()!= ''){
        about.push({
            "key":"Detail",
            "value":Detail
        })
      }
    let categoryId
    let brandId
    await getAPI('/category/get-all-categories')
            .then(data=>{
              console.log('1');
              const brandList =  data.data.listCategories
              const index = brandList.findIndex(item=>item.categoryName == CatagoryName)
              categoryId = brandList[index]._id
            })
            .catch(error=>{
              console.log(50,error)
            })
    await getAPI('/brand/get-all-brand')
            .then(data=>{
              const brandList = data.data.brand
              const index = brandList.findIndex(item=>item.brandName == BrandID)
              if(index>=0){
                brandId = brandList[index]._id
              }else{
                brandId = '630ed388d163dd9dc72d3d61'
              }
            })
            .catch(error=>console.log(error))

    if(varient[0]&&varient[0].option.length==0){
      const priceMain = newList[0].querySelector('.Add_price__varient .hello_ant-input-number-input').value
      const totalStorege = newList[0].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
      const pubLic = newList[0].querySelector('.ant-switch.sellUp').getAttribute('aria-checked')
      if(priceMain.trim()!=''&&totalStorege.trim()!=""&&productName.trim()!=''&&CatagoryName.trim()!=''&&BrandID.trim()!=''){
        const product = {
          about:about,
          categoryId:categoryId,
          productName: productName,
          totalStorage:totalStorege*1,
          brandId:brandId,
          shopId:shopID,
          price:priceMain*1,
          publish:pubLic
        }
        console.log(49,product)
        let IdProduct
        await postAPI('/product/shop-create-new-product',product)
                .then(data=>{
                  console.log(data)
                  IdProduct = data.data.newProduct._id
                })
                .catch(error=>console.log(error))
        await Promise.all(listIMG.map(async(item)=>{
          const formData = new FormData();
          formData.append('thump', item)
          await patchAPI(`/product/add-product-thump/${IdProduct}`,formData)
            .then(data=>{
              console.log('up ảnh ok');
            })
            .catch(error=>console.log(error))
        }))
        nav('/adminShop/Product')
      }
      
    }else{
      let listDetail = []
      let checked = true
      if(listIMG.length==0){
        checked = false
      }
      varient[0].option.map((item,index) =>{
          const option2Length = varient[1].option.length
          if(option2Length>0){
            varient[1].option.map((subItem,subIndex)=>{
              const price = newList[index*option2Length+subIndex].querySelector('.Add_price__varient .hello_ant-input-number-input').value
              const storage = newList[index*option2Length+subIndex].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
              if(price.trim()==''||storage.trim()==''){
                checked = false
              }
              listDetail.push({
                price: price,
                storage: storage,
                publish:true,
                option: [
                    {optionName: varient[0].key, "value":item },
                    {optionName: varient[1].key, "value":subItem },
                ]
              })
            })
          }else{
            const price =  newList[index].querySelector('.Add_price__varient .hello_ant-input-number-input').value
            const storage = newList[index].querySelector('.Add_storege-btn .hello_ant-input-number-input').value
            if(price.trim()==''||storage.trim()==''){
              checked = false
            }
            listDetail.push({
              price: price,
              storage: storage,
              publish:true,
              option: [
                  {optionName: varient[0].key, "value":item }
              ]
            })
          }
      })
      if(productName.trim()!=''&&CatagoryName.trim()!=''&&BrandID.trim()!=''&&checked){
        const product = {
          about:about,
          categoryId:categoryId, 
          productName: productName,
          brandId:brandId,
          shopId:shopID
        }
        let IdProduct
        await postAPI('/product/shop-create-new-product',product)
        .then(data=>{
          console.log(data)
          IdProduct = data.data.newProduct._id
        })
        .catch(error=>console.log(error))
        await Promise.all(listDetail.map(async(item,index)=>{
          await postAPI(`/product-detail/add-product-detail/product/${IdProduct}`,item)
                   .then(data=>{
                     console.log('up biến thể ok');
                   })
                   .catch(error=>console.log(error))
         }))
       
        await Promise.all(listIMG.map(async(item)=>{
          const formData = new FormData();
          formData.append('thump', item)
          await patchAPI(`/product/add-product-thump/${IdProduct}`,formData)
            .then(data=>{
              console.log('up ảnh ok');
            })
            .catch(error=>console.log(error))
        }))
        nav('/adminShop/Product')
      }
    }

  }
  return (
    <div className={style.FooterAdd}>
        <Button className={style.Button}>Lưu Bản Nháp</Button>
        <Button type="primary" className={style.Button_primary} onClick={handleCreatorProduct}>Gửi Đi</Button>
    </div>  
  )
}

export default FooterAdd