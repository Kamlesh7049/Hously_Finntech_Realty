import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import offerReducer from './Slice/offerSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        offer: offerReducer
    },
    devTools: true
})


export default store;