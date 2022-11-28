import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user";
//引入UserReducer
const reducers = combineReducers({
  user: userSlice.reducer,
});
export default reducers;
