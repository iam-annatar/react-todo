import { createContext, useEffect, useMemo, useReducer, useState } from "react";

import { initilizer, todoReducer } from "../reducers";
import type { TodoContextType, TodoProviderProps } from "../types";

export const Context = createContext<TodoContextType>({} as TodoContextType);

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
