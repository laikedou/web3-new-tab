import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  theme: "dark",
} as {
  theme: "light" | "dark" | "system" | undefined;
};
export const themeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme(
      state,
      action: PayloadAction<"light" | "dark" | "system" | undefined>
    ) {
      state.theme = action.payload;
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice;
