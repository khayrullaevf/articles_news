import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";



export const fetchData=createAsyncThunk('fetchData',async(url)=>{
    const response=await fetch(url);
    const data=await response.json()
    return data
})


const getDataSlice=createSlice({
    name:'data',
    initialState:{
        loading:false,
        data:[],
        error:false,
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading=true;            
        })

        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload;
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.loading=false
            state.error=true
        })
        

    }

})


export default getDataSlice.reducer;