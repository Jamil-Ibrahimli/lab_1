import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ICartItem{

id:number;
title:string;
image:string;
    
}


export interface ICart{

items:any[]

}


const initialState:ICart={

items:[]

}


const addToCartSlice=createSlice({

name:'cartItem',
initialState,
reducers:{

    addToCart:(state,action:PayloadAction<ICartItem>)=>{

state.items.push(action.payload)

    },


    removeItem:(state,action:PayloadAction<ICartItem>)=>{

state.items=state.items.filter((item)=>item.id!==action.payload.id)

    }
}


})


export const{addToCart,removeItem}=addToCartSlice.actions;
export default addToCartSlice.reducer