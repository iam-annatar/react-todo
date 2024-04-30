import { useContext } from "react";

import { Context } from "../contexts/TodoProvider";

export const useTodoProvider = () => {
  const context = useContext(Context);

  if (context == null)
    throw new Error("context must be used within TodoProvider");

  return context;
};
