import {createSlice} from '@reduxjs/toolkit'

const initialState={
    userId:0
}

const CounterSlicer=createSlice({
    name:'user',
    initialState,
    reducers:{
        plus:(state,action)=>{ 
            state.userId=action.payload
        }
    }
})

export default CounterSlicer.reducer

export const {plus}=CounterSlicer.actions