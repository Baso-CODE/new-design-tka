import { configureStore } from "@reduxjs/toolkit";
import contactCsReducer from "./features/contactSlice";

export const store = configureStore({
  reducer: {
    contactCs: contactCsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
