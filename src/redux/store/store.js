
import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../slice/fetchSlice";


const rootReducer={
    getData:fetchDataReducer
}


const store=configureStore({
    reducer:rootReducer
})

export default store