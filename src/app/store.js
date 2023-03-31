import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../servers/cryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});