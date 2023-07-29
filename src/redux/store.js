import { configureStore } from "@reduxjs/toolkit";
import sidebarConfigureReducer from "./features/appLayout/applayoutslice"

const store = configureStore({
  reducer: {
    sidebarConfigure: sidebarConfigureReducer, 
  },
});

export default store;
