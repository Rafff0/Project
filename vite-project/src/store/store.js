import {configureStore} from "@reduxjs/toolkit"
import {slice} from "../components/authenticationSlice"




const store = configureStore({
    reducer:{
auth: slice.reducer
    }
})

export default store