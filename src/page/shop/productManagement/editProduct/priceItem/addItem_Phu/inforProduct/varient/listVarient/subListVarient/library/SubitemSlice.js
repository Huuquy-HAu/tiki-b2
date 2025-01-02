import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const SubItemSlice = createSlice({
    name:'SubItemProduct',
    initialState:initialState,
    reducers:{
        loadDetailChange:(state,action)=>{
            return action.payload
        }
        
    }
})
export const {loadDetailChange} = SubItemSlice.actions
export const editSubItemReducer =  SubItemSlice.reducer