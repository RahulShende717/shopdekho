import { configureStore } from "@reduxjs/toolkit";
import { headerSlice } from "./HeaderReducer";
const store= configureStore({
    reducer:{
        PageHeader:headerSlice.reducer
    }
})

export default store;