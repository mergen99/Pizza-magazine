import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

export const store = configureStore({
  reducer: {
    card: cartReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
