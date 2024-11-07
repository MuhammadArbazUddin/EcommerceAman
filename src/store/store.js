// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});

export default store;
