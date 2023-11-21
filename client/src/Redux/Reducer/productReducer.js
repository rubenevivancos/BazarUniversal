import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listProduct: [],
    error: "",
    success: "" 
}


export const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers:{
        getByProductReducer: (state, action) => {
            if(action.payload.length){
                state.listProduct = action.payload;
                state.error= "";
            }else{
                state.error = "NO HAY RESULTADOS";
            }
        },
        successMsg: (state, action) => {
            state.success = action.payload
        },
        errorMsg: (state, action) => {
            state.error = action.payload
        },
    }
})

export const {
    getByProductReducer, 
    successMsg, 
    errorMsg
} = productReducer.actions;

export default productReducer.reducer