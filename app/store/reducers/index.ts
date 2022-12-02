import { combineReducers } from "@reduxjs/toolkit";
import nftSlice from "./nft";
//引入UserReducer
const reducers = combineReducers({
  user: nftSlice.reducer,
});
export default reducers;