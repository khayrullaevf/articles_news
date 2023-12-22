
import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../slice/fetchSlice";
import fetchSingleDataReducer  from "../slice/fetchSingleDataSlice";


const rootReducer={
    getData:fetchDataReducer,
    getSingleData:fetchSingleDataReducer
}


const store=configureStore({
    reducer:rootReducer
})

export default store