
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const fetchText = createAsyncThunk(
  "text/getText",
  async ({ n, s }) => {
    const res = await axios.get(
      `https://baconipsum.com/api/?type=all-meat&paras=${n}&format=${s}`
    );
    return res.data.split("\n");;
  }
);



export const textSlice = createSlice({
  name: "text",
  initialState: {
    contents: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: (state) => {
      state.status = "loading";
    },
    [fetchText.fulfilled]: (state, action) => {
      state.contents = action.payload;
      state.status = "succeeded";
    },
    [fetchText.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});


export default textSlice.reducer;