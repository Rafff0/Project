import {createSlice} from "@reduxjs/toolkit"

export const slice = createSlice({
    name: "slice",
    initialState:{
        value:[],
        data:[]
       
    },
    reducers:{
add:(state,action)=>{

   state.value = [action.payload, ...state.value]

   
},

    }
})


export const {add} = slice.actions