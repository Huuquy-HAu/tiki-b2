import {createSlice} from '@reduxjs/toolkit'
const initialState = []
export const ImageSliceReducer = createSlice({
    name:'uploadImages',
    initialState:initialState,
    reducers:{
        loadImages:((state,action)=>{
            return {
                ...state,
                newImage:action.payload
            }
        }),
        loadDeleteImg:((state,action)=>{
            return {
                ...state,
                delImd:action.payload
            }
        })
    }
})
export const { loadImages,loadDeleteImg } = ImageSliceReducer.actions
export const ImageSlice =  ImageSliceReducer.reducer