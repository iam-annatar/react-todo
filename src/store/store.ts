import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todo/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
