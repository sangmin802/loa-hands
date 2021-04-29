import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: 0,
  sub: 0,
};

const navSlicer = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setMainNav: (state, action) => {
      state.main = action.payload.nav;
      state.sub = 0;
    },
    setSubNav: (state, action) => {
      state.sub = action.payload.nav;
    },
    resetNav: state => {
      state.main = 0;
      state.sub = 0;
    },
  },
});

export const { setMainNav, setSubNav, resetNav } = navSlicer.actions;
export const navReducer = navSlicer.reducer;
