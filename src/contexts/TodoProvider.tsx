import { createContext, useMemo, useReducer, useState } from "react";

import { ACTIONS } from "../constants";
import type {
  Action,
  Todo,
  TodoContextType,
  TodoProviderProps,
} from "../types";

export const Context = createContext<TodoContextType>({} as TodoContextType);

const todoReducer = (todos: Todo[], action: Action): Todo[] => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD:
      if (payload) {
        return [...todos, payload];
      }

      return todos;

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
