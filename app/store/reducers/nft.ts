import { useGetHotNftsQuery } from "#/app/service/nfts";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchNftsByName = createAsyncThunk(
  "nfts/fetchNftsByName",
  async (name: string = "", thunkAPI) => {
    //需要从链上面去获取数据
    console.log("fetchNftsByName....data is ....", []);
    return [];
  }
);
const initialState = {
  nfts: [],
} as {
  nfts: any[];
};
export const nftSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNftsByName.fulfilled, (state, action) => {
      // Add user to the state array
      state.nfts.push(action.payload);
    });
  },
});

export default nftSlice;
