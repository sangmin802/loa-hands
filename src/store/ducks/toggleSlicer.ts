import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expeditionPop: false,
  isLoading: false,
};

const toggleSlicer = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    expeditionPopToggle: state => {
      state.expeditionPop = !state.expeditionPop;
    },
    loadingToggle: state => {
      state.isLoading = !state.isLoading;
    },
    resetToggle: state => {
      state.isLoading = false;
      state.expeditionPop = false;
    },
  },
});

export const {
  expeditionPopToggle,
  loadingToggle,
  resetToggle,
} = toggleSlicer.actions;
export const toggleReducer = toggleSlicer.reducer;
