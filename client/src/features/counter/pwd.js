import {createSlice} from '@reduxjs/toolkit'

const initialState={
    random:0
}

const random=createSlice({
    name:'random',
    initialState,
    reducers:{
        niss:(state,action)=>{ 
            state.random=action.payload
        }
    }
})

export default random.reducer

export const {niss}=random.actions