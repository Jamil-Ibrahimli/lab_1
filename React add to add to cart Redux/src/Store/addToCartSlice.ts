
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface ICartItem {

    id: number;
    title: string;
    image: string;
    count: number;
    price:number;
}


export interface ICart {

    items: ICartItem[]

}


const initialState: ICart = {

    items: JSON.parse(localStorage.getItem('cart') || '[]') as ICartItem[]

}

const addToCartSlice = createSlice({

    name: 'cartItem',

    initialState,


    reducers: {


        addToCart: (state, action: PayloadAction<ICartItem>) => {

            const existingItem = state.items.find(
                (item) => item.id === action.payload.id)

            if (!existingItem) {

                const newItem = { ...action.payload, count: 1 }
                state.items.push(newItem)

            }
            else {


                existingItem.count += 1


            }
            localStorage.setItem('cart', JSON.stringify(state.items))

        },



        removeItem: (state, action: PayloadAction<ICartItem>) => {


            state.items = state.items.filter((item) => item.id !== action.payload.id)

            localStorage.setItem('cart', JSON.stringify(state.items))

        },

        incrementCount: (state, action: PayloadAction<ICartItem>) => {
            const incremented = state.items.find(
                (item) => item.id === action.payload.id)

            if (incremented) {

                incremented.count++
                localStorage.setItem('cart', JSON.stringify(state.items))

            }

        },

        decrementCount: (state, action: PayloadAction<ICartItem>) => {

            const decremented = state.items.find(
                (item) => item.id === action.payload.id)

            if (decremented && decremented.count > 1) {

                decremented.count--
                localStorage.setItem('cart', JSON.stringify(state.items))
            }



        }




    }


})


export const { addToCart, removeItem, incrementCount, decrementCount } = addToCartSlice.actions;
export default addToCartSlice.reducer