
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleData = createAsyncThunk("fetchData", async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const getSingleDataSlice = createSlice({
  name: "singleData",
  initialState: {
    loading: false,
    data: [],
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSingleData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSingleData.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default getSingleDataSlice.reducer;