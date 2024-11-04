// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import paginationReducer from "./slices/paginationSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    pagination: paginationReducer,
  },
});

export default store;
