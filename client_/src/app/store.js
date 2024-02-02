import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/CounterSlice'

const Store=configureStore({
    reducer:{
        user:CounterReducer
    }
})

export default Store