import { configureStore } from "@reduxjs/toolkit";
import filmReduser from "./films/films.reducer";

export const store = configureStore({
  reducer: {
    films: filmReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;