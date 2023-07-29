import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarEnable: false,
};

const sidebarConfigureSlice = createSlice({
  name: "sidebarConfigure",
  initialState: initialState, 
  reducers: {
    toggleSideBar: (state) => {
      state.sideBarEnable = !state.sideBarEnable;
    return state
    },
  },
});

export const { toggleSideBar } = sidebarConfigureSlice.actions;
export default sidebarConfigureSlice.reducer;
