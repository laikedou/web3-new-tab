import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
// logger
import logger from "redux-logger";
import { creatorsApi } from "../service/creators";
import { nftsApi } from "../service/nfts";

//创建store
const store = configureStore({
  reducer: {
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [nftsApi.reducerPath]: nftsApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(creatorsApi.middleware, nftsApi.middleware),
});
// Can still subscribe to the store
//store.subscribe(() => console.log(store.getState()));
//导出store
export default store;

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
