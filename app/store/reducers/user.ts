import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    count: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decremented: (state) => {
      state.count -= 1;
    },
  },
});

export default userSlice;
