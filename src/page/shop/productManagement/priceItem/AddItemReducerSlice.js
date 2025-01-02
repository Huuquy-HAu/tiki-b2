import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    varient:{},
    images:[]
}
export const AddItemReducerSlice = createSlice({
    name:'AddProduct',
    initialState:initialState,
    reducers:{
        LoadVarient:(state,action)=>{
            return {
                ...state,
                varient:action.payload
            }
        },
        LoadImgFile:(state,action)=>{
            return{
                ...state,
                images:action.payload
            }
        }
    }
})
export const {LoadVarient,LoadImgFile} = AddItemReducerSlice.actions
export const addItemReducerSlice =  AddItemReducerSlice.reducer