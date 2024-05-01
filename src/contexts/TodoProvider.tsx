import { createContext, useMemo, useReducer, useState } from "react";

import { ACTIONS } from "../constants";
import type {
  Action,
  TodoContextType,
  TodoItems,
  TodoProviderProps,
} from "../types";

export const Context = createContext<TodoContextType>({} as TodoContextType);

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

    case ACTIONS.EDIT:
      return todos.map((todo) =>
        todo.id === payload?.id ? { ...todo, ...payload } : todo,
      );

    default:
      return todos;
  }
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState<string>("");

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
