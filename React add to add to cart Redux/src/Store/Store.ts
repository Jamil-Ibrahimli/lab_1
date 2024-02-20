
import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./addToCartSlice";
import isActiveSliceReducer from "./isActiveSlice";

export const store = configureStore({


reducer:{

addToCartReducer,
isActiveSliceReducer
}


})


export type RootState=ReturnType<typeof store.getState>;
// export type  AppDispatch = typeof store.dispatch