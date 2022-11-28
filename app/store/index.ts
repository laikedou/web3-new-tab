import { configureStore } from "@reduxjs/toolkit";
// logger
import logger from "redux-logger";
//引入reducers
import rootReducer from "./reducers";
//创建store
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
//导出store
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch