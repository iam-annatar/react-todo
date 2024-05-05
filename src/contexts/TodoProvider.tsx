import { createContext, useEffect, useMemo, useReducer, useState } from "react";

import { ACTIONS } from "../constants";
import type { Action, TodoContextType, TodoItems } from "../types";

const initilizer = (initValue: TodoItems[]) => {
  const value = localStorage.getItem("Todos");

  return value ? JSON.parse(value) : initValue;
};

const todoReducer = (todos: TodoItems[], action: Action): TodoItems[] => {
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

export const Context = createContext<TodoContextType>({} as TodoContextType);

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, [], initilizer);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (todos) {
      localStorage.setItem("Todos", JSON.stringify(todos));
    }
  }, [todos]);

  const values = useMemo(() => {
    return {
      todos,
      dispatch,
      inputValue,
      setInputValue,
    };
  }, [inputValue, todos]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
