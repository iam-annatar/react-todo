import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { TodoItems } from "../../types";

export interface TodoState {
  todos: TodoItems[];
}

const setTodosToLocalStorage = (item: TodoItems[]) => {
  localStorage.setItem("todos", JSON.stringify(item));
};

const getTodosFromLocalStorage = localStorage.getItem("todos");

const initialState: TodoState = {
  todos: getTodosFromLocalStorage ? JSON.parse(getTodosFromLocalStorage) : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItems>) => {
      state.todos.push(action.payload);
      setTodosToLocalStorage(state.todos);
    },
    deleteTodo: (state, action: PayloadAction<TodoItems>) => {
      const { id } = action.payload;
      const idx = state.todos.findIndex((todo) => todo.id === id);

      if (idx !== -1) {
        state.todos.splice(idx, 1);
      }
      setTodosToLocalStorage(state.todos);
    },
    updateTodo: (state, action: PayloadAction<TodoItems>) => {
      const idx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );

      if (idx !== -1) {
        state.todos[idx] = action.payload;
      }
      setTodosToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
