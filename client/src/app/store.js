import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counter/CounterSlice'
import RandomReducer from '../features/counter/pwd'
const Store=configureStore({
    reducer:{
        user:CounterReducer,
        random:RandomReducer
    }
})

export default Store;