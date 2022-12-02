import { combineReducers } from "@reduxjs/toolkit";
import nftSlice from "./nft";
import themeSlice from "./theme";
import { creatorsApi } from "../../service/creators";
import { nftsApi } from "../../service/nfts";
//引入UserReducer
const reducers = combineReducers({
  user: nftSlice.reducer,
  theme: themeSlice.reducer,
  [creatorsApi.reducerPath]: creatorsApi.reducer,
  [nftsApi.reducerPath]: nftsApi.reducer,
});
export default reducers;
