import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId:''
    },
    reducers:{
        setuserId:(state,action)=>{
             state.userId = action.payload
        }
    }
})
export const {setuserId} = userSlice.actions
export default userSlice.reducer