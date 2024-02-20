import { createSlice } from "@reduxjs/toolkit";




 export const isActiveSlice=createSlice({

name:"isActive",
initialState:{isActive:false},
reducers:{

 handleActive:(state)=>{

state.isActive=!state.isActive

 }   


}


})


export const{handleActive}=isActiveSlice.actions;
export default isActiveSlice.reducer
