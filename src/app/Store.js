import { configureStore } from "@reduxjs/toolkit";
import st from "../fetures/counter/counterSlice"
export default configureStore({
    reducer:{
       count: st 
    },
})