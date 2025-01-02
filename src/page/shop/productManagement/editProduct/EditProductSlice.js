import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
export const EditProductSlice = createSlice({
    name:'EditProduct',
    initialState:initialState,
    reducers:{
        loadDefault:(state,action)=>{
            return {
                ...action.payload,
                defaultData:action.payload
            }
        },
        ChangeProductName:(state,action)=>{
            state.productName = action.payload
        },
        ChangeCatagoryName:(state,action)=>{
           return {
            ...state,
            categoryId:{
                ...state.categoryId,
                categoryName:action.payload.category,
                _id:action.payload.id
            } 
           }
        }
    }
})
export const {ChangeProductName,loadDefault,ChangeCatagoryName} = EditProductSlice.actions
export const editProductReducer =  EditProductSlice.reducer