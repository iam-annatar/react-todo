import { ACTIONS } from "../constants";
import type { Action, TodoItems } from "../types";

export const initilizer = (initValue: TodoItems[]) => {
  const value = localStorage.getItem("Todos");

  return value ? JSON.parse(value) : initValue;
};

export const todoReducer = (
  todos: TodoItems[],
  action: Action,
): TodoItems[] => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD:
      if (payload) {
        return [...todos, payload];
      }

      return todos;

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload?.id);

    case ACTIONS.UPDATE:
      return todos.map((todo) =>
        todo.id === payload?.id ? { ...todo, ...payload } : todo,
      );

    default:
      return todos;
  }
};
